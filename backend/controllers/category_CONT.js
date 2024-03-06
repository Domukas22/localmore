// create, read, update, delete the category model just like the city model

const category_MODEL = require("../models/category_MODEL");
const asyncHandler = require("express-async-handler");

exports.CREATE_category = asyncHandler(async (req, res) => {
  const category = new category_MODEL({
    new: req.body.new,
    city: req.body.city,
    slug: req.body.slug,
    icon: req.body.icon,
    name: req.body.name,
    parent_CATEG: req.body.parent_CATEG,
    child_CATEG: req.body.child_CATEG,
    ancestor_CATEG: req.body.ancestor_CATEG,
  });

  await category.save();
  res.status(201).json(category);
});

exports.LIST_categories = asyncHandler(async (req, res, next) => {
  const categories = await category_MODEL.find({}, "slug").exec();
  res.json(categories);
});
