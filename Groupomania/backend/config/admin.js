const db = require("../models");
const bcrypt = require("bcrypt");
require("dotenv").config();

// Fonction qui crée le compte admin dans la base de données à la connexion s'il n'existe pas
function setAdmin(req, res) {
  db.User.findOne({
    where: { email: process.env.ADMIN_MAIL } || { pseudo: "admin" },
  })
    .then((user) => {
      if (!user) {
        bcrypt
          .hash(process.env.ADMIN_PASSWORD, 10)
          .then((hash) => {
            // hashing the password
            const admin = db.User.create({
              pseudo: "admin",
              email: process.env.ADMIN_MAIL,
              password: hash,
              admin: true,
            })
              .then((admin) => {
                console.log({
                  admin,
                  message: `Your admin account has been created ${admin.email} !`,
                });
              })
              .catch((error) => {
                res.status(400).json({ error });
              });
          })
          .catch((error) => {
            res.status(500).send({ error });
          });
      } else {
        console.log({ message: "Admin is already created" });
      }
    })
    .catch((error) => {
      console.log({ error });
    });
}
module.exports = setAdmin(); //exporting the fonction that creats the admin account
