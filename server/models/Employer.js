import mongoose from 'mongoose'

const empoloyer = mongoose.Schema({
    prenom: String,
    nom: String,
    courriel: String,
    dateEmbauche:{
        type: Date,
        default: new Date()
    },
    date_naissance:{
        type: Date,
        default: new Date()
    },
    referenceNom: String,
    referenceTelephone: String,
    typeEmployer: String,
    telephone: String,
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