import Employer from "../models/Employer.js"

export const getEmployers = async (req, res) => {
    try{
        const employers = await Employer.find() // Get all post from database
        res.status(200).json(employers) // return all posts
        console.log(employers)
    } catch (error) {
        res.status(404).json({message: error.message})
    }

}

export const createEmployer = async (req, res) =>{
    const post = req.body
    
    const newPost = new Employer(post)

    try{
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error){
        res.status(409).json({ message: error.message })
    }
}

export const updateEmployer = async (req, res) => {
    const { id: _id } = req.params
    const employer = req.body

    // if(!Mongoose.types.ObjectId.isValid(_id)) return res.status(404).send("No employer with that id")

    const updatedEmployer = await Employer.findByIdAndUpdate(_id,{ ...employer, _id}, { new: true })

    res.json(updatedEmployer)
}