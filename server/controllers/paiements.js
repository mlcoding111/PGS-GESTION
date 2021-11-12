import Paiement from "../models/Paiement.js"

export const getPaiements = async (req, res) => {
    try{
        const paiements = await Paiement.find() // Get all post from database
        res.status(200).json(paiements) // return all posts
        console.log(paiements)
    } catch (error) {
        res.status(404).json({message: error.message})
    }

}

export const createPaiement = async (req, res) =>{
    const post = req.body
    
    const newPost = new Paiement(post)

    try{
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error){
        res.status(409).json({ message: error.message })
    }
}

export const updatePaiement = async (req, res) => {
    const { id: _id } = req.params
    const paiement = req.body

    // if(!Mongoose.types.ObjectId.isValid(_id)) return res.status(404).send("No Paiement with that id")

    const updatedPaiement = await Paiement.findByIdAndUpdate(_id, { ...paiement, _id}, { new: true })

    res.json(updatedPaiement)
}