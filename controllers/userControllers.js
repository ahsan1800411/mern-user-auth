const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// create/register a user

exports.newUser = async (req, res) => {
  const { email, password, name } = req.body;
  //   const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    email,
    // password: hashedPassword,
    password,
    name,
  });

  const token = jwt.sign({ email }, process.env.JWT_SECRET_KEY, {
    expiresIn: 360000,
  });

  await newUser.save();
  res.json({
    message: 'User created sucessfully',
    token,
  });
};

// login a user;

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Please fill the required fields' });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: 'User not found' });
  }

  //  match the password against the hashed password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Wrong Credentials' });
  }
  const token = jwt.sign({ email }, process.env.JWT_SECRET_KEY, {
    expiresIn: 360000,
  });

  return res.status(200).json({
    message: 'User successfully logged in',
    token,
  });
};
