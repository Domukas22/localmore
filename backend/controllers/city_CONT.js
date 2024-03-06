//

const city_MODEL = require("../models/city_MODEL");
const asyncHandler = require("express-async-handler");

exports.CREATE_city = asyncHandler(async (req, res) => {
  const city = new city_MODEL({
    name: req.body.name,
    country: req.body.country,
  });

  await city.save();
  console.log("City created successfully:", city);
  res.status(201).json(city);
});

exports.LIST_cities = asyncHandler(async (req, res, next) => {
  const cities = await city_MODEL.find({}, "name.en").exec();
  res.json(cities);
});
