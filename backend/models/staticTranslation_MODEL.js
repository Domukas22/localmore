//

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const staticTranslations_SCHEMA = new Schema(
  {
    name: {
      en: { type: String, required: true },
      de: { type: String, required: true },
    },
    subname: {
      en: { type: String, required: true },
      de: { type: String, required: true },
    },
    pros: [
      {
        en: { type: String, required: true },
        de: { type: String, required: true },
      },
    ],
    cons: [
      {
        en: { type: String, required: true },
        de: { type: String, required: true },
      },
    ],
    about_TITLE: {
      en: { type: String, required: true },
      de: { type: String, required: true },
    },
    about_PARAG: {
      en: { type: String, required: true },
      de: { type: String, required: true },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "static_translations",
  staticTranslations_SCHEMA
);
