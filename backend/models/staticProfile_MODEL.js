const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const staticProfile_SCHEMA = new Schema({
  desc: { type: String, required: true },
  new: { type: Boolean, required: true },
  city: { type: Schema.ObjectId, ref: "static_translations", required: true },
  category: { type: Schema.ObjectId, ref: "categories", required: true },
  category_PATH: [{ type: Schema.ObjectId, ref: "categories", required: true }],
  tags: [{ type: Schema.ObjectId, ref: "tags", required: true }],
  text: { type: Schema.ObjectId, ref: "static_translations", required: true },
  img: {
    desk_FRONT: { type: String, required: true },
    mob_FRONT: { type: String, required: true },
    desk_ALL: [{ type: String, required: true }],
    mob_ALL: [{ type: String, required: true }],
  },
  adress: {
    gMaps: { type: String, required: true },
    street: { type: String, required: true },
    region: { type: String, required: true },
    plz: { type: String, required: true },
    coords: {
      type: { type: String, required: true },
      coordinates: [{ type: String, required: true }],
    },
  },
});

module.exports = mongoose.model("static_profiles", staticProfile_SCHEMA);
