import mongoose from 'mongoose'

const dossier = mongoose.Schema({
    id: Number,
    nomClient: String,
    numeroClient: String,
    courriel: String,
    typeTravaux: String,
    dateAccepter:{
        type: Date,
        default: new Date()
    },
    dateAjouter:{
        type: Date,
        default: new Date()
    },
    montant: Number,
    numeroFacture: String,
    creationInfo:{
        date: {
            type: Date,
            default: new Date()
        },
        utilisateur: String
    }
})

const Dossier = mongoose.model('Dossier', dossier)

export default Dossier