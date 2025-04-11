import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import pool from "../config/database";
import { UserInput } from '../types/User';

// Changed function signature to include next parameter
export const register = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  try {
    const { username, email, password }: UserInput = req.body;

    if (!email.toLowerCase().endsWith("@pau.edu.ng")) {
      return res.status(400).json({ message: "Please use a PAU email" });
    }

    // Check if the user already exists
    const userExists = await pool.query(
      'SELECT * FROM users WHERE email = $1 OR username = $2', [email, username]
    );
    if (userExists.rows.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const encrypted_password = await bcrypt.hash(password, salt);

    // Insert the new user into the database
    const newUser = await pool.query(
      'INSERT INTO users (username, email, encrypted_password) VALUES ($1, $2, $3) RETURNING *',
      [username, email, encrypted_password]
    );

    return res.status(201).json({
      message: "User registered successfully",
      user: newUser.rows[0],
    });
  } catch (error) {
    console.error("Error during registration:", error);
    return res.status(500).json({ message: "Server error during registration" });
  }
};