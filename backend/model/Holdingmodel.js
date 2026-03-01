const { model} = require("mongoose");

const {holdingSchema, HoldingSchemas} = require('../schemas/HoldingSchemas');

const Holdingmodel  = new model("holding" , HoldingSchemas);

module.exports={Holdingmodel};
