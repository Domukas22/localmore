//

const country_MODEL = require("../models/country_MODEL");
const asyncHandler = require("express-async-handler");

exports.CREATE_country = asyncHandler(async (req, res) => {
  const country = new country_MODEL({
    name: req.body.name,
  });

  await country.save();
  console.log("Country created successfully:", country);
  res.status(201).json(country);
});

exports.LIST_countries = asyncHandler(async (req, res, next) => {
  const countries = await country_MODEL.find({}, "name.en").exec();
  res.json(countries);
});
