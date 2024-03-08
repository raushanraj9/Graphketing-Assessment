const express = require("express");
const router = express.Router();
const siteController = require("../controller/siteController"); // Corrected import path

// Route: POST /api/sites
// Description: Add a new work site
router.post("/siteRoutes", siteController.addSite);

// Route: GET /api/sites
// Description: Get all work sites
router.get("/siteRoutes", siteController.getAllSites);

// Route: GET /api/sites/:id
// Description: Get work site by ID
router.get("/siteRoutes/:id", siteController.getSiteById);

// Route: PUT /api/sites/:id
// Description: Update work site details
router.put("/siteRoutes/:id", siteController.updateSite);

// Route: DELETE /api/sites/:id
// Description: Delete work site by ID
router.delete("/siteRoutes/:id", siteController.deleteSite);

module.exports = router;
