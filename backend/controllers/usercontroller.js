import mongoose from "mongoose";
import { posts } from "../Models/postmodel.js";
import { user } from "../Models/usermodel.js";
import jwt from "jsonwebtoken";
import cloudinary from "cloudinary";
import getDataUri from "../utils/dataUri.js";

export const getuser = async (req, res) => {
  const { token } = await req.cookies;

  if (token) {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const newuser = await user.findById(decoded._id);

    res.status(200).json({
      success: true,
      newuser,
    });
  } else {
    res.status(300).json({
      success: false,
      message: "not logged in",
    });
  }
};
export const getotheruser = async (req, res) => {
  const id = req.params.id;
  try {
    const User = await user.findById(id);
    res.status(200).json({
      success: true,
      User,
    });
  } catch (error) {
    res.status(300).json({
      success: false,
      message: "error",
    });
  }
};

export const updateuser = async (req, res) => {
  const id = await req.body.id;
  const file = await req.file;
  if (file) {
    const fileUri = getDataUri(file);
    const mycloud = await cloudinary.v2.uploader.upload(fileUri.content);

    const image = {
      public_id: mycloud.public_id,
      url: mycloud.secure_url,
    };

    try {
      const newuser = await user.findByIdAndUpdate(
        id,
        {
          image: image,
          bio: req.body.bio,
          dob: req.body.dob,
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          username: req.body.username,
        },
        {
          new: true,
        }
      );
      res.status(200).json(newuser);
    } catch (error) {
      res.status(400).json(error);
    }
  } else {
    const image = {
      url: "https://res.cloudinary.com/dw2mjmbf4/image/upload/v1681453700/fqbtt3s5qtnbjh79zdjb.jpg",
    };
    try {
      const newuser = await user.findByIdAndUpdate(
        id,
        {
          image: image,
          bio: req.body.bio,
          dob: req.body.dob,
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          username: req.body.username,
        },
        {
          new: true,
        }
      );
      res.status(200).json(newuser);
    } catch (error) {
      res.status(400).json(error);
    }
  }
};

export const deleteuser = async (req, res) => {
  const id = req.params.id;
  const { userid, isAdmin } = req.body;
  try {
    if (userid === id || isAdmin) {
      await user.findOneAndDelete(id);
      res.status(200).json("deleted ");
    } else {
      res.status(403).json("request forbiden");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const followuser = async (req, res) => {
  const id = req.params.id;
  const { currentuserid } = req.body;
  if (id === currentuserid) {
    res.status(403).json("action forbidden");
  } else {
    try {
      const users = await user.findById(id);
      const followinguser = await user.findById(currentuserid);

      if (!users.followers.includes(currentuserid)) {
        await users.updateOne({ $push: { followers: currentuserid } });
        await followinguser.updateOne({ $push: { following: id } });
        res.status(200).json("followed");
      } else {
        res.status(500).json("already followed");
      }
    } catch (error) {
      res.status(400).json(error);
    }
  }
};

export const unfollowuser = async (req, res) => {
  const id = req.params.id;
  const { currentuserid } = req.body;
  if (id === currentuserid) {
    res.status(403).json("action forbidden");
  } else {
    try {
      const users = await user.findById(id);
      const followinguser = await user.findById(currentuserid);
      if (users.followers.includes(currentuserid)) {
        await users.updateOne({ $pull: { followers: currentuserid } });
        await followinguser.updateOne({ $pull: { following: id } });
        res.status(200).json("unfollowed");
      } else {
        res.status(500).json("already unfollowed");
      }
    } catch (error) {
      res.status(400).json(error);
    }
  }
};

export const gettimelinepost = async (req, res) => {
  const { id } = req.body;

  try {
    const ownpost = await posts.find({ userid: id });
    const followinguserpost = await user.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(id),
        },
      },
      {
        $lookup: {
          from: "posts",
          localField: "following",
          foreignField: "userid",
          as: "followinguserpost",
        },
      },
      {
        $project: {
          followinguserpost: 1,
          _id: 0,
        },
      },
    ]);

    res
      .status(200)
      .json(ownpost.concat(...followinguserpost[0].followinguserpost));
  } catch (error) {
    res.status(400).json(error);
  }
};

export const timeline = async (req, res) => {
  const { id } = req.body;

  const newuser = await user.findById(id);
  const ownpost = await posts.find({ userid: id });
  const allpost = [];
  ownpost
    ? ownpost.forEach((e) => {
        allpost.push(e);
      })
    : "";
  const folls = [];
  newuser.following.forEach((e) => {
    folls.push(e);
  });

  for (let index = 0; index < folls.length; index++) {
    const element = folls[index];
    const e = await posts.find({ userid: element });
    e
      ? e.forEach((element) => {
          allpost.push(element);
        })
      : {};
  }

  allpost.sort((a, b) => a.createdAt - b.createdAt);
  res.status(200).json(allpost);
};

export const search = async (req, res) => {
  let keyword = req.query.keyword;
  keyword ? (keyword = keyword.toLowerCase().replace(/ +/g, "")) : "";
  const userarr = [];
  try {
    const users = await user.find();

    users.forEach((user) => {
      let str = user.firstname + user.lastname + user.username + user.bio;
      str = str.toLowerCase();
      const check = str.includes(keyword) ? true : false;

      if (check) {
        userarr.push(user);
      }
    });
    res.status(200).json(userarr);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const otheruser = async (req, res) => {
  const id = req.params.id;
  try {
    const users = await user.findById(id);
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json(error);
  }
};
