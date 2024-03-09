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

exports.DELETE_city = asyncHandler(async (req, res) => {
  const result = await city_MODEL.findByIdAndDelete(req.params.id);
  if (result) {
    res.json({ message: "city removed" });
  } else {
    res.status(404).json({ message: "city not found" });
  }
});

exports.UPDATE_city = asyncHandler(async (req, res) => {
  const city = await city_MODEL.findById(req.params.id);
  if (city) {
    city.name = req.body.name;
    city.country = req.body.country;
    const updatedCity = await city.save();
    res.json(updatedCity);
  } else {
    res.status(404).json({ message: "city not found" });
  }
});
