import mongoose from "mongoose";
import { posts } from "../Models/postmodel.js";
import cloudinary from "cloudinary";
import getDataUri from "../utils/dataUri.js";

export const createpost = async (req, res) => {
  const file = req.file;
  const fileUri = getDataUri(file);
  const mycloud = await cloudinary.v2.uploader.upload(fileUri.content);
  const { userid, caption, username, userurl } = req.body;
  const image = {
    public_id: mycloud.public_id,
    url: mycloud.secure_url,
  };
  try {
    const newpost = posts.create({
      userid,
      caption,
      image,
      username,
      userurl,
    });
    res.status(200).json(newpost);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getpost = async (req, res) => {
  const postid = req.params.id;

  try {
    const post = await postmodel.findById(postid);
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json(error);
  }
};
export const getallpost = async (req, res) => {
  const { userid } = req.body;
  try {
    const post = await posts.find({ userid: userid });
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const updatepost = async (req, res) => {
  const postid = req.params.id;

  const { userid, isAdmin } = req.body;

  const post = await postmodel.findById(postid);

  if (post) {
    try {
      if (post.userid === userid || isAdmin) {
        const updatedpost = await postmodel.findByIdAndUpdate(
          postid,
          req.body,
          { new: true }
        );
        res.status(200).json(updatedpost);
      } else {
        res.status(300).json("action forbidden");
      }
    } catch (error) {
      res.status(400).json(error);
    }
  } else {
    res.status(500).json("post dont exist");
  }
};

export const deletepost = async (req, res) => {
  const postid = req.params.id;
  const { userid, isAdmin } = req.body;

  const post = await postmodel.findById(postid);
  try {
    if (post.userid === userid || isAdmin) {
      await postmodel.findByIdAndDelete(postid);
      res.status(200).json("deleted");
    } else {
      res.status(300).json("action forbidden");
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

export const likepost = async (req, res) => {
  const { userid, id } = req.body;

  const post = await posts.findById(id);
  if (post) {
    try {
      if (!post.likes.includes(userid)) {
        await post.updateOne({ $push: { likes: userid } });
        await post.save();
        res.status(200).json();
      } else {
        await post.updateOne({ $pull: { likes: userid } });
        await post.save();
        res.status(200).json();
      }
    } catch (error) {
      res.status(400).json("error" );
    }
  } else {
    res.status(500).json("post dont exist");
  }
};
