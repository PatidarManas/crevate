
import { user } from "../Models/usermodel.js";
import jwt from "jsonwebtoken";
export const registeruser = async (req, res, next) => {
  const { username, firstname, lastname, password } = req.body;
  const exuser = await user.find({ username: username });
  if (exuser) {
    res.status(300).json("username already exists try using another ");
  } else {
    const newuser = await user.create({
      username: username,
      firstname: firstname,
      lastname: lastname,
      password: password,
      bio: "Welcome",
      dob: new Date(),
      image: {
        url: "https://res.cloudinary.com/dw2mjmbf4/image/upload/v1681453700/fqbtt3s5qtnbjh79zdjb.jpg",
      },
    });
    const token = jwt.sign({ _id: newuser._id }, process.env.JWT_SECRET, {
      expiresIn: "15d",
    });
    const options = {
      expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
      httpOnly: true,
      secure: true,
      sameSite: "none",
    };

    res.cookie("token", token, options).status(200).json({
      success: true,
      message: "sjnjs",
      newuser,
    });
  }
};
export const loginuser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const User = await user.findOne({ username: username });
    if (User) {
      if (password === User.password) {
        const token = jwt.sign({ _id: User._id }, process.env.JWT_SECRET, {
          expiresIn: "15d",
        });
        const options = {
          expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
          httpOnly: true,
          secure: true,
          sameSite: "none",
        };

        res.cookie("token", token, options).status(200).json({
          success: true,
          message: "login successful",
          User,
        });
      } else {
        res.status(500).json("wrong password");
      }
    } else {
      res.status(300).json("user not found");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const logout = async (req, res) => {
  res
    .status(200)
    .cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
      secure: true,
      sameSite: "none",
    })
    .json({
      success: true,
      message: "Logged Out Successfully",
    });
};
