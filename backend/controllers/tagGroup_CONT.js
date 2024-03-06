//

const tagGroup_MODEL = require("../models/tagGroup_MODEL");
const asyncHandler = require("express-async-handler");

exports.CREATE_tagGroup = asyncHandler(async (req, res) => {
  const tagGroup = new tagGroup_MODEL({
    desc: req.body.desc,
    name: req.body.name,
  });

  await tagGroup.save();
  res.status(201).json(tagGroup);
});

exports.LIST_tagGroups = asyncHandler(async (req, res, next) => {
  const tagGroups = await tagGroup_MODEL.find({}, "desc").exec();
  res.json(tagGroups);
});
