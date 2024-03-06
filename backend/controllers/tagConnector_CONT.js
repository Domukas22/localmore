//

const tagConnector = require("../models/tagConnector_MODEL");
const asyncHandler = require("express-async-handler");

exports.CREATE_tagConnector = asyncHandler(async (req, res) => {
  const tagConnector = new tagConnector({
    desc: req.body.desc,
    category: req.body.category,
    tag: req.body.tag,
    tagGroup: req.body.tag_GROUP,
  });
});

exports.LIST_tagConnectors = asyncHandler(async (req, res, next) => {
  const tagConnectors = await tagConnector.find({}, "desc").exec();
  res.json(tagConnectors);
});
