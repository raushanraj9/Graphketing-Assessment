const mongoose = require("mongoose");

const siteSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "completed"],
    default: "pending",
  },
  assigned_electrician_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Electrician",
  },
  other_relevant_information: {
    type: String,
  },
  
},{
  timestamps:true,
});

const Site = mongoose.model("Site", siteSchema);

module.exports = Site;
