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

exports.LIST_countries = asyncHandler(async (req, res) => {
  const countries = await country_MODEL.find({});
  const totalCount = await country_MODEL.countDocuments();

  const countriesWithId = countries.map((country) => ({
    // _id --> id (for react-admin to work properly)
    id: country._id,
    ...country.toObject(),
  }));

  res.header("Content-Range", `countries 0-${countries.length}/${totalCount}`);
  res.header("Access-Control-Expose-Headers", "Content-Range");
  res.json(countriesWithId); // Send the array with the added id field
});

exports.DELETE_country = asyncHandler(async (req, res) => {
  const result = await country_MODEL.findByIdAndDelete(req.params.id);
  if (result) {
    res.json({ message: "country removed" });
  } else {
    res.status(404).json({ message: "country not found" });
  }
});

exports.UPDATE_country = asyncHandler(async (req, res) => {
  const country = await country_MODEL.findById(req.params.id);
  console.log(country);
  if (country) {
    country.name = req.body.name;
    const updatedCountry = await country.save();
    res.json(updatedCountry);
  } else {
    res.status(404).json({ message: "country not found" });
  }
});
