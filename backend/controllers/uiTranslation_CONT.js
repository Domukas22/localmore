// create, read, update, delete the uiTranslation model just like the category model

const uiTranslation_MODEL = require("../models/uiTranslation_MODEL");
const asyncHandler = require("express-async-handler");

exports.CREATE_uiTranslation = asyncHandler(async (req, res) => {
  const uiTranslation = new uiTranslation_MODEL({
    compName: req.body.compName,
    en: req.body.en,
    de: req.body.de,
  });

  await uiTranslation.save();
  res.status(201).json(uiTranslation);
});

exports.LIST_uiTranslations = asyncHandler(async (req, res, next) => {
  const uiTranslations = await staticProfile_MODEL.find({}).exec();
  res.json(uiTranslations);
});
