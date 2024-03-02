//

const Category = require("../models/category");
const asyncHandler = require("express-async-handler");

exports.LISTcategories = asyncHandler(async (req, res, next) => {
  const categories = await Category.find({}, "slug").exec();
  res.json(categories);
});
