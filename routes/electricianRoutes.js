const express = require("express");
const router = express.Router();
const electricianController = require("../controller/electricianController");

// Route: POST /api/electricians
// Description: Add a new electrician
router.post("/electricianRoutes", electricianController.addElectrician);
router.get("/electricianRoutes", electricianController.getAllElectricians);
router.get("/electricianRoutes/:id",electricianController.getElectricianById);
router.put("/electricianRoutes/:id",electricianController.updateElectrician);
router.delete("/electricianRoutes/:id",electricianController.deleteElectrician);


module.exports = router;
