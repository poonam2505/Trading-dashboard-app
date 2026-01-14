const { model } = require("mongoose");

const { OrderSchema } = require("../schemas/OrderSchema");

const Ordersmodel = new model("order", OrderSchema);

module.exports = { Ordersmodel };