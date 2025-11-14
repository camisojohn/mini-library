import express from "express";
import { addBook, getBooks } from "../controllers/bookController.js";
import { protect } from "../middleware/authMiddleware.js";
import { adminOnly } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.get("/", protect, getBooks);
router.post("/", protect, adminOnly, addBook);

export default router;
