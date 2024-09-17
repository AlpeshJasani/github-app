import express from "express";
import { getLikes, getUserProfileAndRepos, likeProfile } from "../controllers/user.controller.js";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated.js";

const router = express.Router();

router.get("/profile/:username", getUserProfileAndRepos);
router.get("/likes", ensureAuthenticated, getLikes); // GET likes (who liked our profile)
router.post("/like/:username", ensureAuthenticated, likeProfile); // POST like a profile

export default router;
