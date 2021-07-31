const db = require("../models");
const bcrypt = require("bcrypt");

// Function which creates the admin account in the database on 1st connection if it does not exist
function setAdmin(req, res) {
  db.User.findOne({ where: { email: "admin@groupomania.com" } || { pseudo: "admin" } })
    .then((user) => {
      if (!user) {
        bcrypt
          .hash("Admin", 10)
          .then((hash) => {
            const admin = db.User.create({
              pseudo: "admin",
              email: "admin@groupomania.com",
              password: hash,
              admin: true,
            })
              .then((admin) => {
                console.log({
                  admin,
                  message: `An admin account has been created, Usernam : ${admin.pseudo} !`,
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
        console.log({ message: "An admin account is already been created !!" });
      }
    })
    .catch((error) => {
      console.log({ error });
    });
}
module.exports = setAdmin();
