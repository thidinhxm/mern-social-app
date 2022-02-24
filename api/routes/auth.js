import { Router } from "express";
import User from "../models/User";
import bcrypt from 'bcrypt'

const router = Router();

// register user
router.post('/register', async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    res.status(201).json(user);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

// login user
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(401).json('Invalid email or password');
      return;
    }
    
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
      res.status(401).json('Invalid email or password');
      return;
    }

    res.status(200).json(user);
  }
  catch (err) {
    res.status(500).json(err);
  }
})

export default router;