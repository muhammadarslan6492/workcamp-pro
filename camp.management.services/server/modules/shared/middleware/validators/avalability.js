import Joi from 'joi';
import { REGEX } from '../../utils/constant';

const schema = Joi.object({
  campName: Joi.string()
    .min(4)
    .max(22)
    .required()
    .regex(new RegExp(REGEX.ALPHA_NUMERIC_SPECIAL_CHARACTER))
    .messages({
      'string.min': 'Camp name is invalid',
      'string.max': 'Camp name is invalid',
      'string.empty': 'Camp name is invalid',
      'string.pattern.base': 'Camp name is invalid',
    }),
});

const validate = async (req, res, next) => {
  try {
    const { error } = await schema.validate(req.body);
    if (error) {
      if (error.details && error.details.length && error.details[0].message) {
        return res
          .status(400)
          .json({ error: `Camp name '${req.body.name}' is invalid` });
      }
      return res
        .status(400)
        .json({ error: `Camp name '${req.body.name}' is invalid` });
    }
    return next();
  } catch (error) {
    if (error.details && error.details.length && error.details[0].message) {
      return res
        .status(400)
        .json({ error: `Camp name '${req.body.name}' is invalid` });
    }
    return res
      .status(400)
      .json({ error: `Camp name '${req.body.name}' is invalid` });
  }
};

export default validate;
