import  express  from "express";
import { createpost, deletepost, getallpost, getpost, likepost, updatepost } from "../controllers/postcontroller.js";
import {timeline } from "../controllers/usercontroller.js";
import multer from "multer";
import singleupload from "../mallwares/multer.js";

const storage = multer.memoryStorage();

const router=express.Router();

router.post('/newpost',singleupload ,createpost);
router.put('/profileposts',getallpost)
router.get('/:id',getpost);
router.put('/:id/update',updatepost); 
router.delete('/:id/delete',deletepost); 
router.put('/like',likepost);
router.put('/timeline',timeline);

export default router;