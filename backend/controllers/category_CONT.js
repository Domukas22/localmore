// create, read, update, delete the category model just like the city model

const category_MODEL = require("../models/category_MODEL");
const asyncHandler = require("express-async-handler");

exports.CREATE_category = asyncHandler(async (req, res) => {
  const category = new category_MODEL({
    IS_endCateg: req.body.IS_endCateg,
    tagGroups: req.body.tagGroups,
    IS_new: req.body.new,
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

exports.DELETE_category = asyncHandler(async (req, res) => {
  const result = await category_MODEL.findByIdAndDelete(req.params.id);
  if (result) {
    res.json({ message: "category removed" });
  } else {
    res.status(404).json({ message: "category not found" });
  }
});

exports.UPDATE_category = asyncHandler(async (req, res) => {
  const category = await category_MODEL.findById(req.params.id);
  if (category) {
    category.IS_endCateg = req.body.IS_endCateg;
    category.tagGroups = req.body.tagGroups;
    category.IS_new = req.body.new;
    category.city = req.body.city;
    category.slug = req.body.slug;
    category.icon = req.body.icon;
    category.name = req.body.name;
    category.parent_CATEG = req.body.parent_CATEG;
    category.child_CATEG = req.body.child_CATEG;
    category.ancestor_CATEG = req.body.ancestor_CATEG;
    const updatedCategory = await category.save();
    res.json(updatedCategory);
  } else {
    res.status(404).json({ message: "category not found" });
  }
});
