const User = require("../../models/user");

const postInvite = async (req, res) => {
  const { targetEmailAdress } = req.body;

  const { userId, email } = req.user;

  console.log(email);
  console.log(targetEmailAdress);
  //check if friend that we like to inv is not user
  if (email.toLowerCase() === targetEmailAdress.toLowerCase()) {
    return res
      .status(409)
      .send("sorry! you can not becaome friend with yourself");
  }

  const targetUser = await User.findOne({
    email: targetEmailAdress.toLowerCase(),
  });

  if (!targetUser) {
    return res
      .status(404)
      .send(
        `friend of ${targetEmailAdress} has not been found. please check email address`
      );
  }

  //check invite already sent

  return res.send("constroller is working");
};

module.exports = postInvite;
