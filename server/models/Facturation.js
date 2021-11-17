import mongoose from 'mongoose'

const facturation = mongoose.Schema({
    nomClient: String, 
    montant: String, 
    dateEnvoyerComptable: Date,
    dateRecu: Date,
    dateEnvoyerClient: Date,
    datePayer: Date,
    numeroFacture: String,
    payer: Boolean,
    montantRecu: String,
    creationInfo:{
        date: {
            type: Date
        },
        utilisateur: String
    }
})

const Facturation = mongoose.model('Facturation', facturation)

export default Facturation