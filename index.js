const express=require("express");
require("./db/connection.js");
const electricianRoutes=require("./routes/electricianRoutes.js");
const siteRoutes = require("./routes/siteRoutes");
const distributionRoutes = require("./routes/distributionRoutes");

const port=process.env.PORT || 3000;

// Initialize Express app
const app=express();

// Middleware
app.use(express.json());

// Routes
app.use("/routes", electricianRoutes);
app.use("/routes", siteRoutes);
app.use("/routes", distributionRoutes);

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})