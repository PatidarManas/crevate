import mongoose from "mongoose";

const userschema = mongoose.Schema(
    {
        username:{
            type: String,
            required : true
        },
        firstname:{
            type: String,
            required : true
        },
        lastname:{
            type: String,
            required : true
        },
        dob:{
            type: String,
            required : false
        },
        password:{
            type: String,
            required : true,
        },
        isAdmin:{
            type: Boolean,
            default: false
        },
        bio:String,
        image: {
            public_id: {
              type: String,
              required: false,
            },
            url: {
              type: String,
              required: false,
            },
          },
        followers: [],
        following: [],


        token: String,
    },
    {
        timestamps: true
    }
)



export const user = mongoose.model("user", userschema);