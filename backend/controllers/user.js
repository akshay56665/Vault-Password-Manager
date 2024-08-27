const { createToken } = require("../middleware/tokens");
const user = require("../models/authentication");

const handleSignUp = async (req, res) => {
  const { fullname, email, password } = req.body;
  try {
    await user.create({
      fullname: fullname,
      email: email,
      password: password,
    });
    return res.status(200).send("signed");
  } catch (error) {
    return res.status(401).send("User already exists");
  }
};

const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const getUser = await user.AuthenticateUser(email, password);
    const token = createToken(getUser);
    return res.cookie("token", token, {
      httpOnly: true,
      secure:true,
      sameSite:'none'
    }).status(200).send("Login");
  }catch (error) {
    return res.status(401).send("Invalid Email or password");
  }
};
                    
const handleLogout=(req,res)=>{
  return res.clearCookie("token").status(200).send("deleted");
}
module.exports = {
  handleSignUp,
  handleLogin,
  handleLogout
};
