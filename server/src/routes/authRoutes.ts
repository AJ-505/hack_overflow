import express, { Router, Request, Response, NextFunction } from "express";
import { register } from "../controllers/authController";

const router: Router = express.Router();

// Added a wrapper (asyncHandler) that ensures the async function's error is passed to next()
// This wrapper converts your async function into a proper RequestHandler.
const asyncHandler = (
  fn: (req: Request, res: Response, next: NextFunction) => Promise<Response>
) => (req: Request, res: Response, next: NextFunction) => {
  fn(req, res, next).catch(next); // Pass error to next()
};

router.post("/register", asyncHandler(register)); // Use the asyncHandler wrapper here

export default router;