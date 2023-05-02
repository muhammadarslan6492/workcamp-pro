import BaseJoi from 'joi';
import JoiTimezone from 'joi-tz';
import { REGEX } from '../../utils/constant';

const Joi = BaseJoi.extend(JoiTimezone);

const schema = Joi.object({
  campName: Joi.string().min(4).max(32).required(),
  // .messages({
  //   'string.min': `Camp name '${Joi.object.campName}' is invalid`,
  //   'string.max': `Camp name '${Joi.object.campName}' is invalid`,
  //   'string.empty': `Camp name '${Joi.object.campName}' is invalid`,
  //   'string.pattern.base': `Camp name '${Joi.object.campName}' is name`,
  // }),
  orgName: Joi.string()
    .trim()
    .min(4)
    .max(32)
    .required()
    .regex(new RegExp(REGEX.ALPHA_NUMERIC_SPECIAL_CHARACTER))
    .messages({
      'string.min':
        'Invalid Organization name, Please enter minimum 4 characters',
      'string.max':
        'Invalid Organization name, Please enter maximum 22 characters',
      'string.pattern.base':
        'Invalid Organization name, Please use alphanumerics',
    }),
  email: Joi.string()
    .pattern(new RegExp(REGEX.EMAIL))
    .max(320)
    .optional()
    .messages({
      'string.max': 'Invalid Email',
      'string.pattern.base': 'Invalid Email',
    }),
  teamStrength: Joi.string().optional(),
  websiteLink: Joi.string().uri().optional(),
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
