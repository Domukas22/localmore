//

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trStaticSchema = new Schema(
  {
    name: {
      en: { type: String, required: true },
      de: { type: String, required: true },
    },
    subName: {
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
    aboutTitle: {
      en: { type: String, required: true },
      de: { type: String, required: true },
    },
    aboutParag: {
      en: { type: String, required: true },
      de: { type: String, required: true },
    },
  },
  { collection: "tr_static" }
);

module.exports = mongoose.model("tr_static", trStaticSchema);
