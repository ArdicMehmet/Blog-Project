const Joi = require("joi");
const Regex = require("../contants/regex");
const ValidationMessages = require("../contants/validationMessages");

const registerSchema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  email: Joi.string().pattern(Regex.email).required().messages({
    "string.pattern.base": ValidationMessages.email,
  }),
  password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(Regex.email).required().messages({
    "string.pattern.base": ValidationMessages.email,
  }),
  password: Joi.string().required(),
});

module.exports = {
  registerSchema,
  loginSchema,
};
