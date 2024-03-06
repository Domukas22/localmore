// // create, read, update, delete the translateStatic model just like the category model

const translateStatic_MODEL = require("../models/staticTranslation_MODEL");
const asyncHandler = require("express-async-handler");

exports.CREATE_staticTranslation = asyncHandler(async (req, res) => {
  console.log("Received request:", req.body);
  const translation = new translateStatic_MODEL({
    name: req.body.name,
    subname: req.body.subname,
    pros: req.body.pros,
    cons: req.body.cons,
    about_TITLE: req.body.about_TITLE,
    about_PARAG: req.body.about_PARAG,
  });

  await translation.save();
  res.status(201).json(translation);
});

exports.LIST_staticTranslations = asyncHandler(async (req, res, next) => {
  const translations = await translateStatic_MODEL
    .find({}, { "name.en": 1 })
    .exec();
  res.json(translations);
});
