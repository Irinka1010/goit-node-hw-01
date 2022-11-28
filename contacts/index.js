const contactsPath = require('../db/contacts.json');
const fs = require('fs/promises');
const listContacts = require('./listContacts.js');
const getContactById = require('./getContactById');
const removeContact = require('./removeContact');
const addContact = require('./addContact');

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
