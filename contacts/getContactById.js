const list=require('./listContacts')

const getContactById = async (id) => {
  const contacts = await list();
  const result = contacts.find(item => item.id === id);
  if (!result) {
    return null
  }
  return result
}
module.exports=getContactById