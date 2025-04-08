const registerUser = async (req, res) => {
  res.send("Register başarılı");
};

const loginUser = async (req, res) => {
  res.send("Login başarılı");
};

module.exports = {
  registerUser,
  loginUser,
};
