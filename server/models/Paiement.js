import mongoose from 'mongoose'

const paiement = mongoose.Schema({
    fournisseur: String, 
    montant: String,
    date: {
        type: Date
    },
    faitPar: String,
    accepterPar: String,
    numeroFacture: String,
    creationInfo:{
        date: {
            type: Date
        },
        utilisateur: String
    }
})

const Paiement = mongoose.model('Paiement', paiement)

export default Paiement