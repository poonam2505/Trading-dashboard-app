const { model } = require("mongoose");

const { PositionsSchema } = require("../schemas/PositionSchema");

const Positionsmodel = new model("position", PositionsSchema);

module.exports = { Positionsmodel };
