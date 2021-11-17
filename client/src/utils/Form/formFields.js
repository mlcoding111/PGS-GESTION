// Every data required for each Forms will be stored here
import { format } from "date-fns"
export class FormFields{
    static get Employee(){

        const initialFValues = {
            prenom: '',
            nom: '',
            courriel: '',
            dateEmbauche: new Date(),
            dateNaissance: new Date(),
            referenceNom: '',
            referenceTelephone: '',
            typeEmployer: 'a1',
            telephone: '',
            departementId: '',
            actif: false
        }

        const employeeTypes = [
            { id: 'a1', title: 'A1'},
            { id: 'a2', title: 'A2'},
            { id: 'a3', title: 'A3'},
            { id: 'c', title: 'C'}
        ]

        const departementdata = [
            {id: '1', title: 'Apprenti 1'},
            {id: '2', title: 'Apprenti 2'},
            {id: '3', title: 'Apprenti 3'},
            {id: '4', title: 'Compagnon'},
        ]   

        return {
            initialFValues,
            employeeTypes,
            departementdata
        }        
    }

    static get Dossiers(){
        const initialFValues = {
            nomClient: "",
            numeroClient: "",
            typeTravaux: "",
            dateAccepter: new Date(),
            dateAjouter: new Date(),
            montant: 0,
            numeroFacture: "",
        }

        const clientType = [
            { id: 'direct', title: 'Client direct'},
            { id: 'assurance', title: 'Assurance'},
        ]

        return {
            clientType,
            initialFValues
        }
       
    }

    static get Paiements(){
        const initialFValues = {
            fournisseur: "",
            montant: "",
            date: new Date(),
            faitPar: "",
            accepterPar: "",
            numeroFacture: ""
        }

        return {
            initialFValues
        }
       
    }

    static get Facturations(){
        const initialFValues = {
            nomClient: "",
            montant: "",
            dateEnvoyerComptable: new Date(),
            dateRecu: new Date(),
            dateEnvoyerClient: new Date(),
            datePayer: new Date(), 
            numeroFacture: "",
            payer: false,
            montantRecu: ""
        }

        const statusPaiement = [
            { id: true, title: 'Payer'},
            { id: false, title: 'Non payer'},
        ]

        return {
            initialFValues,
            statusPaiement
        }
       
    }
}