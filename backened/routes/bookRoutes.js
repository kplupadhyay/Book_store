import express from "express";
import { Book } from "../models/Bookmodels.js";
const router = express.Router();

router.post("/" , async(req,res)=>{
    try{
        if(!req.body.title||
            !req.body.author||
            !req.body.publishyear){
                return res.status(400).send({message:"All the field are required"})
            }
            const newBook = {
                title:req.body.title,
                author:req.body.author,
                publishyear:req.body.publishyear
            }
            const book = await Book.create(newBook);
            return res.status(201).send(book)
    }catch(e){
        console.log(e.message);
        res.status(500).send({message:e.message})
    }
})

router.get("/",async (req,res)=>{
    try{
        const books = await Book.find({});
        return res.status(200).json({
            count:books.length,
            data:books
        })
    }catch(e){
        return res.status(500).send({message:e.message})
    }
})

// to find a book by id

router.get("/:id",async (req,res)=>{
    
    try{
        const {id} = req.params;
        const book = await Book.findById(id);
        return res.status(200).json(book)
    }catch(e){
        return res.status(500).send({message:e.message})
    }
});

// update a book 


router.put("/:id" , async (req,res)=>{
    try{
        if(!req.body.title||
            !req.body.author||
            !req.body.publishyear){
                return res.status(400).send({message:"All the field are required"})
            }
            const {id} = req.params;
            const result = await Book.findByIdAndUpdate(id , req.body);
            if(!result){
                return res.status(404).send({message:"Book not found"})
            }
            return res.status(200).send({message:"Book updated successfully"})
    }catch(e){
        // console(e.message)
        return res.status(500).send({message:e.message})
    }
});

// deleting a data 

router.delete("/:id" ,  async (req,res)=>{
    try{
        const {id} = req.params;

        const result = await Book.findByIdAndDelete(id);

        if(!result){
            return res.status(201).send("no book found");
        }
        return res.status(200).send("book deleted successfully")

    }catch(e){
        return res.status(500).send(e.message)
    }
});

export default router