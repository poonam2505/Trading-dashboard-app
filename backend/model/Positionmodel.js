const mongoose = require("mongoose");
const { PositionsSchema } = require("../schemas/PositionSchema");

const PositionModel = mongoose.model("Position", PositionsSchema);

module.exports = { PositionModel };