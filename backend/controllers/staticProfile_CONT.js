// create, read, update, delete the staticProfile model just like the category model

const staticProfile_MODEL = require("../models/staticProfile_MODEL");
const asyncHandler = require("express-async-handler");

exports.CREATE_staticProfile = asyncHandler(async (req, res) => {
  const profile = new staticProfile_MODEL({
    desc: req.body.desc,
    new: req.body.new,
    city: req.body.city,
    category: req.body.category,
    category_PATH: req.body.category_PATH,
    tags: req.body.tags,
    text: req.body.text,
    img: req.body.img,
    adress: req.body.adress,
  });

  await profile.save();
  res.status(201).json(profile);
});

exports.LIST_staticProfiles = asyncHandler(async (req, res, next) => {
  const profiles = await staticProfile_MODEL.find({}).exec();
  res.json(profiles);
});
