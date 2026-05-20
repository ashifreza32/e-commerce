import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

//route for user
const loginUser =async (req,res)=>{
    try{
        const {email,password}= req.body;
        if (!email || !password){
            return res.json({success:false, message:"Please enter all fields"})
        }
        const user = await userModel.findOne({email});
        if(!user){
            return res.json({success:false, message:"User not found"})
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.json({success:false, message:"Invalid password"})
        }
        else{
            const token = createToken(user._id)
            res.json({success:true, token})
        }
}catch(error){
    console.log(error)
    res.json({success:false,message:error.message})
    }
}
//route for user register
const registerUser = async (req,res)=>{
    try{
        const {name,email,password}= req.body;
        

        if (!name || !email || !password){
            return res.json({success:false, message:"Please enter all fields"})
        }
        //user already exists or not 
        const exists= await userModel.findOne({email});
        if(exists){
            return res.json({success:false, message:"User already exists"})
        }
        //validating email format & strong password
        if(!validator.isEmail(email)){
            return res.json({success:false, message:"Please enter a valid email"})
        }

      if(password.length <8  ){
        return res.json({success:false, message:"Please enter a strong password with minimum 8 characters"})
       }

         //hashing user password 
         const salt =await bcrypt.genSalt(10);
         const hashedPassword= await bcrypt.hash(password,salt)

        //creating new user
        const newUser= new userModel({
            name,
            email,
            password:hashedPassword
        })
        const user = await newUser.save()

       const token = createToken(user._id)

        res.json({success:true, token}) 
        
    }catch(error){
        console.log(error)
        res.json({success:false,message:error.message})
    }
}
//Route for admin login 
const adminLogin = async (req,res)=>{
    res.json({msg:"Admin Login API Working"})
    
}


export { loginUser, registerUser, adminLogin}