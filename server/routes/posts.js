import { Router } from "express";
import { checkAuth } from "../utils/checkAuth.js";
import {
  createPost,
  getAll,
  getById,
  getMyPosts,
  removePost,
  updatePost,
  getPostComments,
} from "../controllers/posts.js";

const router = new Router();

// Create Post

router.post("/", checkAuth, createPost);

// Get All Posts

router.get("/", getAll);

// Get Post By Id

router.get("/:id", getById);

// Update Post

router.put("/:id", checkAuth, updatePost);

// Get My Post

router.get("/user/me", checkAuth, getMyPosts);

// Remove Post

router.delete("/:id", checkAuth, removePost);

// Get Post Comments

router.get("/comments/:id", getPostComments);

export default router;
