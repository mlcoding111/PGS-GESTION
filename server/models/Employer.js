import mongoose from 'mongoose'

const empoloyer = mongoose.Schema({
    prenom: String,
    nom: String,
    courriel: String,
    date_embauche:{
        type: Date,
        default: new Date()
    },
    date_naissance:{
        type: Date,
        default: new Date()
    },
    reference_nom: String,
    reference_telephone: String,
    type_employer: String,
    telephone: String,
    type_employer: String,
    actif: Boolean,
    creationInfo:{
        date: {
            type: Date,
            default: new Date()
        },
        utilisateur: String
    }
})

const Employer = mongoose.model('Employer', empoloyer)

export default Employer