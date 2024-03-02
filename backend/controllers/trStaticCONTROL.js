//

const trStatic = require("../models/trStatic");
const asyncHandler = require("express-async-handler");

exports.LISTstaticTranslations = asyncHandler(async (req, res, next) => {
  const translations = await trStatic.find({}, { "name.en": 1, _id: 0 }).exec();
  res.json(translations);
});
