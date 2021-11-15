import mongoose from 'mongoose'

const empoloyer = mongoose.Schema({
    prenom: String,
    nom: String,
    courriel: String,
    dateEmbauche: String,
    dateNaissance: String,
    referenceNom: String,
    referenceTelephone: String,
    typeEmployer: String,
    telephone: String,
    actif: Boolean,
    creationInfo:{
        date: {
            type: String,
        },
        utilisateur: String
    }
})

const Employer = mongoose.model('Employer', empoloyer)

export default Employer