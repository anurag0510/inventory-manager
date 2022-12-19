const Joi = require("@hapi/joi");

const userParamKeys = {
  user_name: Joi.string().min(5).max(30),
  first_name: Joi.string().min(3).max(128),
  last_name: Joi.string().min(3).max(128),
  roles: Joi.array().items(
    Joi.string().valid("ADMIN", "TECH_SUPPORT", "LEAD", "CUSTOMER", "SELLER")
  ),
  key: Joi.string().valid("user_name", "id"),
};

class UserValidation {
  async validateCreateUserData(payload) {
    const schema = Joi.object({
      user_name: userParamKeys.user_name.required(),
      first_name: userParamKeys.first_name.required(),
      last_name: userParamKeys.last_name.required(),
      roles: userParamKeys.roles,
    }).options({ abortEarly: false });
    let result = await schema.validate(payload);
    return result;
  }

  async validateUpdateUserData(payload) {
    const schema = Joi.object({
      first_name: userParamKeys.first_name,
      last_name: userParamKeys.last_name,
      roles: userParamKeys.roles,
      key: userParamKeys.key.required(),
    }).options({ abortEarly: false });
    let result = await schema.validate(payload);
    return result;
  }
}

module.exports = new UserValidation();
