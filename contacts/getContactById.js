const list = require('./listContacts');

const getContactById = async id => {
  const contacts = await list();
  const result = contacts.find(item => item.id === id);

  return result || null;
};
module.exports = getContactById;
