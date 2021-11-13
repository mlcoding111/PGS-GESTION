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

export const deleteFacturations = async (req, res) => {
    const { facturations } = req.body // Retrieve all the facturations with the _id we want to delete

    const result = await Facturation.deleteMany({_id: facturations.map(item => item._id)}) // Delete all the the item from dataBase that match with "facturations"
    // const result = await Facturation.deleteMany(facturations)
    res.json({ message: 'Facturation deleted successfully', ids: facturations})
    
}