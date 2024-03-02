//

const profileStatic = require("../models/profileStatic");
const asyncHandler = require("express-async-handler");

exports.LISTstaticProfiles = asyncHandler(async (req, res, next) => {
  const profiles = await profileStatic.find({}).exec();
  res.json(profiles);
});
