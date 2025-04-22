const express = require("express");
const router = express.Router();
const reportController = require("./../controllers/reportController");
const apiKeyMiddleware = require("../config/apiKey")

router.use(apiKeyMiddleware);

//Rota para exportar CSV
router.get("/report/csv", reportController.exportWizardCSV);


//Rota para exportar PDF
router.get("/report/pdf", reportController.exportWizardPDF);


module.exports = router;