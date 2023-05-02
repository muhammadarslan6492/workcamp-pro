import Joi from 'joi';
import { REGEX } from '../../utils/constant';

const schema = Joi.object({
  fullName: Joi.string()
    .min(4)
    .max(32)
    .pattern(REGEX.FULL_NAME)
    .required()
    .messages({
      'string.min': 'Invalid full name entered',
      'string.max': 'Invalid full name entered',
      'string.empty': 'name is empty',
      'string.pattern.base': 'Invalid full name entered',
    }),
  email: Joi.string()
    .pattern(new RegExp(REGEX.EMAIL))
    .max(320)
    .required()
    .messages({
      'string.max': 'Invalid Email',
      'string.pattern.base': 'Invalid Email',
    }),
  password: Joi.string().required(),
  phoneNumber: Joi.string().optional(),
  campId: Joi.string().required(),
  invitationId: Joi.string().optional(),
});

const validate = async (req, res, next) => {
  try {
    const { error } = await schema.validate(req.body);
    if (error) {
      if (error.details && error.details.length && error.details[0].message) {
        return res.status(400).json({ error: error.details[0].message });
      }
      return res.status(400).json({ error: error.message });
    }
    return next();
  } catch (error) {
    if (error.details && error.details.length && error.details[0].message) {
      return res.status(400).json({ error: error.details[0].message });
    }
    return res.status(400).json({ error: error.message });
  }
};

export default validate;
