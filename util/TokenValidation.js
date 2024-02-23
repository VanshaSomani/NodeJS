//payload..

const jwt = require("jsonwebtoken");
const secret = "secret";

const generateToken = (user) => {
  const token = jwt.sign(user, secret, {
    expiresIn: "1h",
  });

  return token;
};

const validateToken = (token) => {
  try {
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (err) {
    return undefined;
  }
};

//generateToken({id:101,name:"raj"})
//validateToken("eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAxLCJuYW1lIjoicmFqIiwiaWF0IjoxNzAwNDg1MjkwLCJleHAiOjE3MDA0ODUzMjB9.eksWgE0ZnqdxwMsp-O5gHUiUHMHurhT4RdnBohjpNjN_5Hk2887GjDGzoF7GqhWjiuajyW4H0eOI0LeewHOtRQ")
module.exports = {
  generateToken,
  validateToken,
};
