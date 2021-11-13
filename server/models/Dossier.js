import mongoose from 'mongoose'

const dossier = mongoose.Schema({
    id: Number,
    nomClient: String,
    numeroClient: String,
    courriel: String,
    typeTravaux: String,
    dateAccepter: String,
    dateAjouter: String,
    montant: Number,
    numeroFacture: String,
    creationInfo:{
        date: {
            type: String
        },
        utilisateur: String
    }
})

const Dossier = mongoose.model('Dossier', dossier)

export default Dossier