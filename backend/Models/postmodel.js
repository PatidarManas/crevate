import mongoose from "mongoose";

const postschema = new mongoose.Schema(
  {
    username:{
      type:String,
      required:true,
    },

    userurl: {
      type: String,
      required: true,
    },
    userid: {
      type: String,
      required: true,
    },
    caption: String,
    likes: [],
    image: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  },

  {
    timestamps: true,
  }
);

export const posts = mongoose.model("posts", postschema);


