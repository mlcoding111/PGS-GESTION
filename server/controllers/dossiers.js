import Mongoose from 'Mongoose'
import Dossier from "../models/Dossier.js"

export const getDossiers = async (req, res) => {
    try{
        const dossiers = await Dossier.find() // Get all post from database
        res.status(200).json(dossiers) // return all posts
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
    // if(!Mongoose.types.ObjectId.isValid(_id)) return res.status(404).send("No dossier with that id")  
    const updatedDossier = await Dossier.findByIdAndUpdate(_id,  { ...dossier, _id}, { new: true })

    res.json(updatedDossier)
}

export const deleteDossier = async (req, res) => {
    const { dossiers } = req.body // Retrieve all the dossiers with the _id we want to delete

    const result = await Dossier.deleteMany({_id: dossiers.map(item => item._id)}) // Delete all the the item from dataBase that match with "dossiers"
    // const result = await Dossier.deleteMany(dossiers)
    res.json({ message: 'Dossier deleted successfully', ids: dossiers})
    
}