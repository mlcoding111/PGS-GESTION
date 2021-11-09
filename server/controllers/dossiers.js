import Mongoose from 'Mongoose'
import Dossier from "../models/Dossier.js"

export const getDossiers = async (req, res) => {
    try{
        const dossiers = await Dossier.find() // Get all post from database
        res.status(200).json(dossiers) // return all posts
        console.log(dossiers)
    } catch (error) {
        res.status(404).json({message: error.message})
    }

}

export const createDossier = async (req, res) =>{
    const post = req.body
    
    const newPost = new Dossier(post)

    try{
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error){
        res.status(409).json({ message: error.message })
    }
}

export const updateDossier = async (req, res) => {
    const { id: _id } = req.params
    const dossier = req.body

    if(!Mongoose.types.ObjectId.isValid(_id)) return res.status(404).send("No dossier with that id")

    const updatedDossier = await Dossier.findByIdAndUpdate(_id, dossier, { new: true })

    res.json(updatedDossier)
}