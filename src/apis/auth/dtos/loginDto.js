import Joi from "joi";

export default Joi.object().keys({
    email: Joi.string().email().trim().required(),
    password: Joi.string().min(8).trim().required(),
});