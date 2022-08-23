const { Public } = require("../models");
const { Social } = require("../models");

const updateOrganization = async (id, body) => {
  let {
    name,
    image,
    phone,
    address,
    email,
    welcomeTitle,
    welcomeText,
    welcomeImage,
  } = body;
  
  const myOrganization = await Public.update(
    {
      name,
      image,
      phone,
      address,
      email,
      welcomeTitle,
      welcomeText,
      welcomeImage,
    },
    {
      where: {
        id
      }
    }
  );
  return myOrganization
};

const getOrganizationPublic = async (id) => {
  const publicOrganization = await Public.findAll({
    where: {
      id: id,
    },
  });

  return publicOrganization;
};

const getSocials = async () => {
  const socials = await Social.findAll();
  return socials;
};

module.exports = {
  getOrganizationPublic,
  getSocials,
  updateOrganization,
};
