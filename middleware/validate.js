const { check, validationResult } = require('express-validator');

const contactValidationRules = () => {
  return [
    check('firstName', 'El nombre es obligatorio').not().isEmpty(),
    check('lastName', 'El apellido es obligatorio').not().isEmpty(),
    check('email', 'Por favor ingresa un correo electrónico válido').isEmail(),
    check('favoriteColor', 'El color favorito es obligatorio').not().isEmpty(),
    check('birthday', 'La fecha de nacimiento es obligatoria').not().isEmpty()
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next(); 
  }
  
  const extractedErrors = [];
  errors.array().map(err => extractedErrors.push({ [err.path]: err.msg }));

  return res.status(400).json({
    errors: extractedErrors,
  });
};

module.exports = {
  contactValidationRules,
  validate,
};