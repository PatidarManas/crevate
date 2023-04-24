import express from "express";
import {  loginuser, logout, registeruser } from "../controllers/Authcontroller.js";
const router=express.Router();

router.post('/login',loginuser);
router.get('/logout',logout);
router.post('/newuser',registeruser );

export default router;
