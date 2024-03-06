// create, read, update, delete the tag model just like the category model

const tag_MODEL = require("../models/tag_MODEL");
const asyncHandler = require("express-async-handler");

exports.CREATE_tag = asyncHandler(async (req, res) => {
  const tag = new tag_MODEL({
    new: req.body.new,
    slug: req.body.slug,
    icon: req.body.icon,
    name: {
      en: req.body.name.en,
      de: req.body.name.de,
    },
  });
  await tag.save();
  res.status(201).json(tag);
});

exports.LIST_tags = asyncHandler(async (req, res, next) => {
  const tags = await tag_MODEL.find({}, { "name.en": 1 }).exec();
  res.json(tags);
});

exports.DELETE_tag = asyncHandler(async (req, res) => {
  console.log(req.params.id); // Log the ID to ensure it's correct
  const result = await tag_MODEL.findByIdAndDelete(req.params.id);
  console.log(result); // Check the result of the deletion
  if (result) {
    res.json({ message: "tag removed" });
  } else {
    res.status(404).json({ message: "tag not found" });
  }
});
