//

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const uiTranslation_SCHEMA = new Schema(
  {
    compName: { type: String, required: true },
    en: { type: Map, of: String, required: true },
    de: { type: Map, of: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ui_translations", uiTranslation_SCHEMA);
