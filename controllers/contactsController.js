const {Contacts} = require('../models');

const addContacts =  async (name, email) => {
     const newContact = await Contacts.create({
        name,
        email,
      });

      return newContact

}

module.exports = {
    addContacts,
  };