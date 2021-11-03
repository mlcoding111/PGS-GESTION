import mongoose from 'mongoose'

const facturation = mongoose.Schema({
    nomClient: String, 
    montant: String, 
    dateEnvoyerComptable: {
        type: Date,
        default: new Date()
    },
    dateRecu: {
        type: Date,
        default: new Date()
    },
    dateEnvoyerClient: {
        type: Date,
        default: new Date()
    },
    datePayer: {
        type: Date,
        default: new Date()
    },
    numeroFacture: String,
    payer: String,
    montantRecu: String,
    creationInfo:{
        date: {
            type: Date,
            default: new Date()
        },
        utilisateur: String
    }
})

const Facturation = mongoose.model('Facturation', facturation)

export default Facturation