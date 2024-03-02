//

const Tag = require("../models/tag");
const asyncHandler = require("express-async-handler");

exports.LISTtags = asyncHandler(async (req, res, next) => {
  const tags = await Tag.find({}, "slug").exec();
  res.json(tags);
});
