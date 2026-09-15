const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contacts');
const { contactValidationRules, validate } = require('../middleware/validate');

router.get('/', contactsController.getAll);
router.get('/:id', contactsController.getSingle);

router.post('/', contactValidationRules(), validate, contactsController.createContact);
router.put('/:id', contactValidationRules(), validate, contactsController.updateContact);

router.delete('/:id', contactsController.deleteContact);

module.exports = router;