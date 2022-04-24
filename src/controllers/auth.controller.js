const { Users } = require("../database/models/index.js");
const uuid = require("uuid");
const bcrypt = require("bcryptjs");
const { generateAccessToken } = require("../helpers/auth.helper");

const postAuthLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Users.findOne({ where: { email: email } });
    const isPasswordCorrect =
      user !== null ? await bcrypt.compare(password, user.password) : false;

    if (!(user && isPasswordCorrect)) {
      return res.status(401).json({
        error: "invalid user or password",
      });
    }

    const accessToken = await generateAccessToken(user);

    res.header("authorization", accessToken).json({
      name: user.name,
      token: accessToken,
      role: user.role,
      messagge: "User authenticate",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error,
    });
  }
};
const postAuthRegister = async (req, res) => {
  const { name, email, password } = req.body;

  const id = uuid.v4();
  const saltRounds = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(password, saltRounds);

  try {
    const userCreated = await Users.create({
      id: id,
      name: name,
      email: email,
      password: hash,
      status: 1,
    });

    const token = await generateAccessToken(userCreated);

    res.status(201).json({
      name: userCreated.name,
      email: userCreated.email,
      token: token,
      msg: "Created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error,
    });
  }
};

module.exports = {
  postAuthLogin,
  postAuthRegister,
};
