const User = require('../models/User');
// const bcrypt = require('bcryptjs');

// create a user

exports.newUser = async (req, res) => {
  const { email, password, name } = req.body;
  //   const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    email,
    // password: hashedPassword,
    password,
    name,
  });
  await newUser.save();
  res.json({
    message: 'User created sucessfully',
  });
};
