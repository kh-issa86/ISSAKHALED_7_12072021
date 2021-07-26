const emailValidator = require("email-validator");
const passwordValidator = require("password-validator");

exports.valid = (req, res, next) => {
  // verifying the email and password
  const passwordSchema = new passwordValidator();
  passwordSchema
    .is()
    .min(8) // Minimum length 8
    .is()
    .max(20) // Maximum length 20
    .has()
    .uppercase() // Must have uppercase letters
    .has()
    .lowercase() // Must have lowercase letters
    .has()
    .not()
    .symbols(); // Has no symbols
  

  if (
    !emailValidator.validate(req.body.email) ||
    !passwordSchema.validate(req.body.password)
  ) {
    return res.status(400).send({
      error:
        "Merci de vérifier ton adresse mail, ton mot de passe doit contenir au minum 8 lettres avec des minuscules et majuscules  ",
    });
  } else if (
    emailValidator.validate(req.body.email) ||
    passwordSchema.validate(req.body.password)
  ) {
    next();
  }
};

  // checking the user name
exports.checkPseudo = (req, res, next) => {
  const regex = /^[a-zA-Z0-9_]{3,30}$/; // Lettres, no space and has to be between 4 et 30 caractères
  const pseudo = req.body.pseudo;
  if (regex.test(pseudo) === true) {
    next();
  } else {
    return res.status(400).send({
      error:
        "Votre pseudo doit être de 3 caractères minimum et 30 maximum, sont acceptées les lettres, chiffres et underscore (_)  ",
    });
  }
};
