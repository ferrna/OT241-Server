const {Contacts} = require('../models');

const addContacts =  async (name, email, message) => {
     const newContact = await Contacts.create({
        name,
        email,
        message
      });

      return newContact

}

const getContacts = async () => {
  const allContacts = await Contacts.findAll();
  return allContacts
}

module.exports = {
    addContacts,
    getContacts
  };