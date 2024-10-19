const { verifyToken } = require("../middleware/tokens");
const UserData = require("../models/userData");

const handleCreation = async (req, res) => {
  const token = req.cookies.token;
  const data = verifyToken(token);

  const { service, id, password } = req.body;
  if (!service || !id || !password) {
    return res.status(402).send("fill complete form");
  } 
  try {
    await UserData.create({
      service,
      id,
      password,
      user: data.userid,
    });
    return res.status(200).send("created");
  } catch (error) {
    return res.status(401).send("Unknown error")
  }
}; 

const handleGiveData = async (req, res) => {
  const { userId } = req.body;
  const data = await UserData.findOne({ id: userId });
  return res.json(data);
};

const handleEdit = async (req, res) => {
  const { userId, service, id, password } = req.body;
  
  if (!service || !id || !password) {
    return res.status(402).send("All fields are mandatory");
  }
  try {
    const data = await UserData.findOneAndUpdate(
      { id: userId },
      { service: service, id: id, password: password }
    )
    return res.status(200).send("edited");
  } catch (error) {
    return res.status(401).send("Unknown error");
  }
};

const handleDelete = async (req, res) => {
  const { id } = req.body;
  try {
    const record = await UserData.findOneAndDelete({ id: id });
    const del = [record.service, record.id, record.password];
    return res.json({ arr: del });
  } catch (error) {
    res.status(401).send("Unknown error occured while deleting record");
  }
};

module.exports = {
  handleCreation,
  handleDelete,
  handleEdit,
  handleGiveData,
};