import express from "express";
import User from "../../models/User.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { googleId, email, name, image } = req.body;

  let user = await User.findOne({ email });

  if (!user) {
    user = await User.create({
      email,
      googleId,
      name,
      image
    });
  } else {
    if (!user.googleId)
      user.googleId = googleId;
    await user.save();
  }

  res.json(user);
});

export default router;
