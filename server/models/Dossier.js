import mongoose from 'mongoose'

const dossier = mongoose.Schema({
    id: Number,
    nomClient: String,
    prenomClient: String,
    numeroClient: String,
    courriel: String,
    typeTravaux: String,
    dateAccepter: Date,
    dateAjouter: Date,
    montant: String,
    numeroFacture: String,
    creationInfo:{
        date: {
            type: Date
        },
        utilisateur: String
    }
})

const Dossier = mongoose.model('Dossier', dossier)

export default Dossier