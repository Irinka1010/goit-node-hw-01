const { v4 } = require('uuid');

const listContacts = require('./listContacts');
const contactsPath = require('./filePath');
const updateContacts = require('./updateContacts');

const addContact = async (name, email, phone) => {
  const contacts = await listContacts();
  const newContact = { name, email, phone, id: v4() };
  if (!newContact.name || !newContact.email || !newContact.phone) {
    throw new Error(`Required fields name, email,phone`);
    return;
  }
  contacts.push(newContact);
  await updateContacts(contacts);
  return newContact;
};
module.exports = addContact;
