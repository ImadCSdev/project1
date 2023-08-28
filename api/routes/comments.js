 import express from "express";
 import {getComments,addComments } from "../controllers/comment.js";

 const router = express.Router()

//   router.get("/find/:userId", getUser)
// // router.put("/", updateUser)

 router.get("/", getComments)
 router.post("/", addComments)
 

export default router
// export default router