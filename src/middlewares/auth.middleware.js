const { Users } = require("../database/models/index.js");
const { validateToken } = require("../helpers/auth.helper");

const checkAuth = async (req, res, next) => {
  try {
    const accessToken = req.headers.authorization;

    if (!accessToken) return res.status(401).json({ msg: "Access denied" });

    const token = accessToken.split(" ").pop();
    const tokenData = await validateToken(token);

    if (!tokenData || !tokenData.id) {
      res
        .status(401)
        .json({ msg: "Access denied, token expired or incorrect" });
      return;
    }

    //Para uso interno de trazabilidad
    const user = await Users.findByPk(tokenData.id);
    req.user = user;

    next();
  } catch (error) {
    console.log(error);
    res.status(403).json({
      msg: "Access denied, you dont have permission to access",
    });
  }
};

const checkRoleAuth = (roles) => async (req, res, next) => {
  try {
    const { user } = req;
    const roleUser = user.role;

    const checkValueRol = roles.some((rol) => rol == roleUser);

    if (!checkValueRol)
      return res.status(403).json({ msg: "You don't have permissions" });

    next();
  } catch (error) {
    console.log(error);
    res.status(403).json({
      msg: "You don't have permissions",
    });
  }
};

module.exports = {
  checkAuth,
  checkRoleAuth,
};
