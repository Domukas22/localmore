// add tagUsage_CONT.js

const express = require("express");
const router = express.Router();

const category_CONT = require("../controllers/category_CONT");
const city_CONT = require("../controllers/city_CONT");
const country_CONT = require("../controllers/country_CONT");
const staticProfile_CONT = require("../controllers/staticProfile_CONT");
const tag_CONT = require("../controllers/tag_CONT"); // for tags and subtags
const tagGroup_CONT = require("../controllers/tagGroup_CONT");
const tagUsage_CONT = require("../controllers/tagUsage_CONT");
const uiTranslation_CONT = require("../controllers/uiTranslation_CONT");

router.get("/categories", category_CONT.LIST_categories);
router.get("/cities", city_CONT.LIST_cities);
router.get("/countries", country_CONT.LIST_countries);
router.get("/staticProfiles", staticProfile_CONT.LIST_staticProfiles);
router.get("/tags", tag_CONT.LIST_tags);
router.get("/subtags", tag_CONT.LIST_subtags);
router.get("/tagGroups", tagGroup_CONT.LIST_tagGroups);
router.get("/tagUsages", tagUsage_CONT.LIST_tagUsages);
router.get("/uiTranslations", uiTranslation_CONT.LIST_uiTranslations);

router.post("/categories", category_CONT.CREATE_category);
router.post("/cities", city_CONT.CREATE_city);
router.post("/countries", country_CONT.CREATE_country);
router.post("/staticProfiles", staticProfile_CONT.CREATE_staticProfile);
router.post("/tags", tag_CONT.CREATE_tag);
router.post("/subtags", tag_CONT.CREATE_subtag);
router.post("/tagGroups", tagGroup_CONT.CREATE_tagGroup);
router.post("/tagUsages", tagUsage_CONT.CREATE_tagUsage);
router.post("/uiTranslations", uiTranslation_CONT.CREATE_uiTranslation);

router.put("/categories/:id", category_CONT.UPDATE_category);
router.put("/cities/:id", city_CONT.UPDATE_city);
router.put("/countries/:id", country_CONT.UPDATE_country);
router.put("/staticProfiles/:id", staticProfile_CONT.UPDATE_staticProfile);
router.put("/tags/:id", tag_CONT.UPDATE_tag);
router.put("/subtags/:id", tag_CONT.UPDATE_subtag);
router.put("/tagGroups/:id", tagGroup_CONT.UPDATE_tagGroup);
router.put("/tagUsages/:id", tagUsage_CONT.UPDATE_tagUsage);
router.put("/uiTranslations/:id", uiTranslation_CONT.UPDATE_uiTranslation);

router.delete("/categories/:id", category_CONT.DELETE_category);
router.delete("/cities/:id", city_CONT.DELETE_city);
router.delete("/countries/:id", country_CONT.DELETE_country);
router.delete("/staticProfiles/:id", staticProfile_CONT.DELETE_staticProfile);
router.delete("/tags/:id", tag_CONT.DELETE_tag);
router.delete("/subtags/:id", tag_CONT.DELETE_subtag);
router.delete("/tagGroups/:id", tagGroup_CONT.DELETE_tagGroup);
router.delete("/tagUsages/:id", tagUsage_CONT.DELETE_tagUsage);
router.delete("/uiTranslations/:id", uiTranslation_CONT.DELETE_uiTranslation);

module.exports = router;
