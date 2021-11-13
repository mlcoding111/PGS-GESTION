import mongoose from 'mongoose'

const paiement = mongoose.Schema({
    fournisseur: String, 
    montant: String,
    date: {
        type: String
    },
    faitPar: String,
    accepterPar: String,
    numeroFacture: String,
    creationInfo:{
        date: {
            type: String
        },
        utilisateur: String
    }
})

const Paiement = mongoose.model('Paiement', paiement)

export default Paiement