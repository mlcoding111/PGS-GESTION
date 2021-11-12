import Facturation from "../models/Facturation.js"

export const getFacturations = async (req, res) => {
    try{
        const facturations = await Facturation.find() // Get all post from database
        res.status(200).json(facturations) // return all posts
        console.log(facturations)
    } catch (error) {
        res.status(404).json({message: error.message})
    }

}

export const createFacturation = async (req, res) =>{
    const post = req.body
    
    const newPost = new Facturation(post)

    try{
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error){
        res.status(409).json({ message: error.message })
    }
}

export const updateFacture = async (req, res) => {
    const { id: _id } = req.params
    const facturation = req.body

    // if(!Mongoose.types.ObjectId.isValid(_id)) return res.status(404).send("No Facturation with that id")

    const updatedFacturation = await Facturation.findByIdAndUpdate(_id, { ...facturation, _id}, { new: true })

    res.json(updatedFacturation)
}