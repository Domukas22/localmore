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

exports.DELETE_uiTranslation = asyncHandler(async (req, res) => {
  const result = await uiTranslation_MODEL.findByIdAndDelete(req.params.id);
  if (result) {
    res.json({ message: "uiTranslation removed" });
  } else {
    res.status(404).json({ message: "uiTranslation not found" });
  }
});

exports.UPDATE_uiTranslation = asyncHandler(async (req, res) => {
  const uiTranslation = await uiTranslation_MODEL.findById(req.params.id);
  if (uiTranslation) {
    uiTranslation.compName = req.body.compName;
    uiTranslation.en = req.body.en;
    uiTranslation.de = req.body.de;
    const updatedUiTranslation = await uiTranslation.save();
    res.json(updatedUiTranslation);
  } else {
    res.status(404).json({ message: "uiTranslation not found" });
  }
});
