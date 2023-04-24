import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import AuthRouter from "./routes/Authroute.js";
import userRouter from "./routes/userroute.js";
import PostRouter from "./routes/Postroute.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";
import cloudinary from "cloudinary"

const app = express();

cloudinary.v2.config({
  cloud_name:process.env.CLOUD_NAME,
  api_key:process.env.API_KEY,
  api_secret:process.env.API_SECRET,
})
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
const corsOptions ={
  origin:process.env.FRONTEND, 
  optionSuccessStatus:200,
}
app.use(cookieParser())
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
}))
dotenv.config();
app.use(cookieParser())

app.use(
  express.urlencoded({ extended: true })
);
  
app.use(express.json());

mongoose.set('strictQuery', false);
mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(process.env.PORT, () => console.log("listening")))
  .catch((error) => console.log(error));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", "http://localhost:3000")
  // req.headers.origin);
  res.header(
    "Access-Control-Allow-Methods",
    "GET,PUT,POST,DELETE,UPDATE,OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
  );
  next();
});

app.use("/auth", AuthRouter);
app.use("/user", userRouter);
app.use("/post", PostRouter);
