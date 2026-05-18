import mongoose from 'mongoose';
import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import productModel from '../models/productModel.js';

//fuction for add product
const addProduct = async(req,res)=>{
    try{
        const {name,description,price,category,subCategory,sizes,bestseller}= req.body;
        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 && req.files.image4[0]
        const images = [image1,image2,image3,image4].filter((item)=> item !== undefined)
        const priceValue = Number(price)

        if (!name || !description || !category || !subCategory || Number.isNaN(priceValue)) {
            return res.status(400).json({success:false,message:'Missing or invalid required fields'})
        }

        let imagesUrl = await Promise.all(
            images.map(async(item)=>{
                let result = await cloudinary.uploader.upload(item.path,{resource_type:'auto'});
                 return result.secure_url 
            })
        )
        const product = new productModel({
            name,
            description,
            price: Number(price),
            category,
            subCategory,
            sizes: sizes ? JSON.parse(sizes) : [],
            bestseller: bestseller === 'true' ? true : false,
            images: imagesUrl,
            date: Date.now()
        });

        await product.save();

        res.json({success:true,message:'Product added successfully',product})
    } catch (error){
        console.log(error)
        res.json({success:false,message:error.message})
    } 
}

//function for  list product
const listProducts = async(req,res)=>{
    try{
    }catch (error){
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

//function for single product
const singleProduct = async(req,res)=>{
    try{
    }catch (error){
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

//function for remove product
const removeProduct = async(req,res)=>{
    try{
    } catch (error){
        console.log(error);
        res.json({success:false,message:error.message})
    }
}
export {addProduct,
    listProducts,
    removeProduct,
     singleProduct}
