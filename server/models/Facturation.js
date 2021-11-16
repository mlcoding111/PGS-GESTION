import mongoose from 'mongoose'

const facturation = mongoose.Schema({
    nomClient: String, 
    montant: String, 
    dateEnvoyerComptable: String,
    dateRecu: String,
    dateEnvoyerClient: String,
    datePayer: String,
    numeroFacture: String,
    payer: Boolean,
    montantRecu: String,
    creationInfo:{
        date: {
            type: String
        },
        utilisateur: String
    }
})

const Facturation = mongoose.model('Facturation', facturation)

export default Facturation