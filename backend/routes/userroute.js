import express from "express";
import { deleteuser, followuser, getotheruser, getuser, otheruser, search, unfollowuser, updateuser } from "../controllers/usercontroller.js";

import singleupload from "../mallwares/multer.js";

const router=express.Router();


router.get('/me', getuser);
router.get('/profile/:id', getotheruser);
router.get('/:id/update',updateuser);
router.delete('/:id/delete',deleteuser);
router.put('/:id/follow',followuser);
router.put('/:id/unfollow',unfollowuser);
router.get('/search',search);
router.get('/:id',otheruser);
router.post('/update',singleupload,updateuser);

export default router;