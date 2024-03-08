const express = require("express");
const router = express.Router();
// const fairDistributionAlgorithm = require("../utils/fairDistributionAlgorithm");

const fairDistributionAlgorithm=require("../controller/distributionController.js")
// Route: GET /api/distribute-sites
// Description: Trigger the optimal distribution of sites algorithm
router.get("/distributionRoutes", fairDistributionAlgorithm.triggerDistribution);

module.exports = router;
