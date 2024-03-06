//

const express = require("express");
const router = express.Router();

const category_CONT = require("../controllers/category_CONT");
const city_CONT = require("../controllers/city_CONT");
const country_CONT = require("../controllers/country_CONT");
const staticProfile_CONT = require("../controllers/staticProfile_CONT");
// const subtag_CONT = require("../controllers/subtag_CONT");
const tag_CONT = require("../controllers/tag_CONT");
const tagConnector_CONT = require("../controllers/tagConnector_CONT");
const tagGroup_CONT = require("../controllers/tagGroup_CONT");
const staticTranslation_CONT = require("../controllers/staticTranslation_CONT");
const uiTranslation_CONT = require("../controllers/uiTranslation_CONT");

router.get("/categories", category_CONT.LIST_categories);
router.get("/cities", city_CONT.LIST_cities);
router.get("/countries", country_CONT.LIST_countries);
router.get("/staticProfiles", staticProfile_CONT.LIST_staticProfiles);
// router.get("/subtags", subtag_CONT.LIST_subtags);
router.get("/tags", tag_CONT.LIST_tags);
router.get("/tagConnectors", tagConnector_CONT.LIST_tagConnectors);
router.get("/tagGroups", tagGroup_CONT.LIST_tagGroups);
router.get(
  "/staticTranslations",
  staticTranslation_CONT.LIST_staticTranslations
);
router.get("/uiTranslations", uiTranslation_CONT.LIST_uiTranslations);

router.post("/categories", category_CONT.CREATE_category);
router.post("/cities", city_CONT.CREATE_city);
router.post("/countries", country_CONT.CREATE_country);
router.post("/staticProfiles", staticProfile_CONT.CREATE_staticProfile);
// router.post("/subtags", subtag_CONT.CREATE_subtag);
router.post("/tags", tag_CONT.CREATE_tag);
router.post("/tagConnectors", tagConnector_CONT.CREATE_tagConnector);
router.post("/tagGroups", tagGroup_CONT.CREATE_tagGroup);
router.post(
  "/staticTranslations",
  staticTranslation_CONT.CREATE_staticTranslation
);
router.post("/uiTranslations", uiTranslation_CONT.CREATE_uiTranslation);

router.post("/tags/:id/delete", tag_CONT.DELETE_tag);

module.exports = router;
