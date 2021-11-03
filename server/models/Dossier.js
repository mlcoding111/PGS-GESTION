import mongoose from 'mongoose'

const dossier = mongoose.Schema({
    nom_client: String,
    numero_client: String,
    courriel: String,
    type_travaux: String,
    date_accepter:{
        type: Date,
        default: new Date()
    },
    date_ajouter:{
        type: Date,
        default: new Date()
    },
    montant: Number,
    numero_facture: String,
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