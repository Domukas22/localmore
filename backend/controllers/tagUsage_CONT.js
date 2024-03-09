// create a tag usage controller with the tagUsage_MODEL, simialr to the tagGroup_CONT.js

const tagUsage_MODEL = require("../models/tagUsage_MODEL");
const asyncHandler = require("express-async-handler");

exports.CREATE_tagUsage = asyncHandler(async (req, res) => {
  const tagUsage = new tagUsage_MODEL({
    desc: req.body.desc,
    tag_ID: req.body.tag_ID,
    category_ID: req.body.category_ID,
    group_ID: req.body.group_ID,
    count: req.body.count,
  });

  await tagUsage.save();
  res.status(201).json(tagUsage);
});

exports.LIST_tagUsages = asyncHandler(async (req, res, next) => {
  const tagUsages = await tagUsage_MODEL.find({}).exec();
  res.json(tagUsages);
});

exports.DELETE_tagUsage = asyncHandler(async (req, res) => {
  const result = await tagUsage_MODEL.findByIdAndDelete(req.params.id);
  if (result) {
    res.json({ message: "tagGroup removed" });
  } else {
    res.status(404).json({ message: "tagGroup not found" });
  }
});

exports.UPDATE_tagUsage = asyncHandler(async (req, res) => {
  const tagUsage = await tagUsage_MODEL.findById(req.params.id);
  if (tagUsage) {
    tagUsage.desc = req.body.desc;
    tagUsage.tag_ID = req.body.tag_ID;
    tagUsage.category_ID = req.body.category_ID;
    tagUsage.group_ID = req.body.group_ID;
    tagUsage.count = req.body.count;
    const updatedTagUsage = await tagUsage.save();
    res.json(updatedTagUsage);
  } else {
    res.status(404).json({ message: "tagGroup not found" });
  }
});
