//

const express = require("express");
const router = express.Router();

const categoryCONTROL = require("../controllers/categoryCONTROL");
const profileStaticCONTROL = require("../controllers/profileStaticCONTROL");
const tagCONTROL = require("../controllers/tagCONTROL");
const trStaticCONTROL = require("../controllers/trStaticCONTROL");
const trUICONTROL = require("../controllers/trUICONTROL");

router.get("/categories", categoryCONTROL.LISTcategories);
router.get("/tags", tagCONTROL.LISTtags);
router.get("/profilesStatic", profileStaticCONTROL.LISTstaticProfiles);
router.get("/trStatic", trStaticCONTROL.LISTstaticTranslations);

module.exports = router;
