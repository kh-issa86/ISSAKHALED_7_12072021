// import packages
const express = require("express");
const router = express.Router(); //using the router function
const postsCtrl = require("../controllers/posts"); // homefeed controller
const auth = require("../middleware/auth"); //authentication middleware
const multer = require("../middleware/multer-config"); //images middleware

//difine the routes
router.get("/", auth, postsCtrl.getAllPosts);
router.get("/hot", auth, postsCtrl.getHotPosts);
router.post("/add", auth, multer, postsCtrl.createPost);
router.get("/:id", auth, postsCtrl.getOnePost);
router.put("/:id", auth, multer, postsCtrl.updatePost);
router.delete("/:id", auth, multer, postsCtrl.deletePost);
router.post("/:id/like", auth, postsCtrl.likePost);
router.post("/:id/comments", auth, postsCtrl.addComment);
router.delete("/comments/:id", auth, postsCtrl.deleteComment);

module.exports = router;
