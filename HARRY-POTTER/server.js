require("dotenv").config();
const express = require("express");
const cors = require("cors");

const wizardRoutes = require("./src/routes/wizardRoutes");
const houseRoutes = require("./src/routes/houseRouter");
const reportRoutes = require("./src/routes/reportRouter");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", wizardRoutes);
app.use("/api", houseRoutes);
app.use("/api", reportRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
