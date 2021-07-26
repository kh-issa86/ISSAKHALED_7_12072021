require('dotenv').config();

module.exports = {
  authentication: {
    jwtSecret: process.env.TOKEN_KEY|| 'secret',
  },
};
