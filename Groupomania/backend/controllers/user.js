const bcrypt = require("bcrypt"); // password rncryption
const db = require("../models"); // models for the database
const token = require("../middleware/token"); // module qui génère le token
const fs = require("fs");
const { Op } = require("sequelize");

//signup fonction
exports.signup = async (req, res) => {
  try {
    const user = await db.User.findOne({
      where: { email: req.body.email },
    });
    if (user !== null) {
      if (user.pseudo === req.body.pseudo) { //check if the username is already been used
        return res.status(400).json({ error: "This username is used" });
      }
    } else {
      const hash = await bcrypt.hash(req.body.password, 10);
      const newUser = await db.User.create({
        pseudo: req.body.pseudo,
        email: req.body.email,
        password: hash,
        admin: false,
      });

      const tokenObject = await token.issueJWT(newUser);
      res.status(201).send({
        user: newUser,
        token: tokenObject.token,
        expires: tokenObject.expiresIn,
        message: `Your account is created, your username is : ${newUser.pseudo} !`,
      });
    }
  } catch (error) {
    return res.status(400).send({ error: "This e-mail is used" });
  }
};

//login fonction
exports.login = async (req, res) => {
  try {
    const user = await db.User.findOne({
      where: { email: req.body.email },
    }); // check if the email address is in the database
    if (user === null) {
      return res.status(403).send({ error: "Failed connection" });
    } else {
      const hash = await bcrypt.compare(req.body.password, user.password); // comparing the password
      if (!hash) {
        return res.status(401).send({ error: "Password is incorect  !" });
      } else {
        const tokenObject = await token.issueJWT(user);
        res.status(200).send({
          // if there is a match, we send the user and the token
          user: user,
          token: tokenObject.token,
          sub: tokenObject.sub,
          expires: tokenObject.expiresIn,
          message: "Hello " + user.pseudo + " !",
        });
      }
    }
  } catch (error) {
    return res.status(500).send({ error: "Server error" });
  }
};
//get one account
exports.getAccount = async (req, res) => {
  try {
    const user = await db.User.findOne({
      where: { id: req.params.id },
    });
    res.status(200).send(user);
  } catch (error) {
    return res.status(500).send({ error: "Server error" });
  }
};

// get all the users exept the admin
exports.getAllUsers = async (req, res) => {
  try {
    const users = await db.User.findAll({
      attributes: ["pseudo", "id", "photo", "bio", "email"],
      where: {
        id: {
          [Op.ne]: 1,
        },
      },
    });
    res.status(200).send(users);
  } catch (error) {
    return res.status(500).send({ error: "Server error" });
  }
};

//modify the user account
exports.updateAccount = async (req, res) => {
  const id = req.params.id;
  try {
    const userId = token.getUserId(req);
    let newPhoto;
    let user = await db.User.findOne({ where: { id: id } }); // finding the user
    if (userId === user.id) {
      if (req.file && user.photo) {
        newPhoto = `${req.protocol}://${req.get("host")}/upload/${
          req.file.filename
        }`;
        const filename = user.photo.split("/upload")[1];
        fs.unlink(`upload/${filename}`, (err) => {
          // if there is already a photom we delet it
          if (err) console.log(err);
          else {
            console.log(`Deleted file: upload/${filename}`);
          }
        });
      } else if (req.file) {
        newPhoto = `${req.protocol}://${req.get("host")}/upload/${
          req.file.filename
        }`;
      }
      if (newPhoto) {
        user.photo = newPhoto;
      }
      if (req.body.bio) {
        user.bio = req.body.bio;
      }
      if (req.body.pseudo) {
        user.pseudo = req.body.pseudo;
      }
      const newUser = await user.save({ fields: ["pseudo", "bio", "photo"] }); // saving changes to the database
      res.status(200).json({
        user: newUser,
        messageRetour: "Your profile is modified",
      });
    } else {
      res
        .status(400)
        .json({ messageRetour: "You ar not authourized" });
    }
  } catch (error) {
    return res.status(500).send({ error: "Server error" });
  }
};

//delet account fonction
exports.deleteAccount = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await db.User.findOne({ where: { id: id } });
    if (user.photo !== null) {
      const filename = user.photo.split("/upload")[1];
      fs.unlink(`upload/${filename}`, () => {
        // if there is already a photom we delet it and we delet the account
        db.User.destroy({ where: { id: id } });
        res.status(200).json({ messageRetour: "User account deleted" });
      });
    } else {
      db.User.destroy({ where: { id: id } }); // deleting the account
      res.status(200).json({ messageRetour: "User account deleted" });
    }
  } catch (error) {
    return res.status(500).send({ error: "Server error" });
  }
};
