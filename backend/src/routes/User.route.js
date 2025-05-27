import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"
import User from '../models/auth.model.js'
import express from "express"

const AuthRouter = express.Router();

AuthRouter.post("/register",async (req,res)=>{
    const {username,password,email} = req.body
    if(!username || ! password || !email) return res.status(400).json({message:"All fields are required"})
    try{
        
    } catch (error) {
        
    }
})