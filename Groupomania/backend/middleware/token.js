const JWT = require("jsonwebtoken");
const config = require("../config/config");
require("dotenv").config();
function issueJWT(user) {
  // generating the token
  const id = user.id;
  const expiresIn = "24H";
  const payload = {
    sub: id,
    iat: Date.now(),
  };
  const signedToken = JWT.sign(payload, process.env.TOKEN_KEY, {
    expiresIn: expiresIn,
  });
  return {
    token: "Bearer " + signedToken,
    expires: expiresIn,
  };
}
function getUserId(req) {
  // check the user id of the token
  const token = req.headers.authorization.split(" ")[1]; // get the token from the request's header
  const decodedToken = JWT.verify(token, process.env.TOKEN_KEY); // verify the token
  const userId = decodedToken.sub;
  return userId; // get the id of the token
}

module.exports.issueJWT = issueJWT;
module.exports.getUserId = getUserId;
