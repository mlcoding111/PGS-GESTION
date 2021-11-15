// Every data required for each Forms will be stored here
import { format } from "date-fns"
export class FormFields{
    static get Employee(){

        const initialFValues = {
            prenom: '',
            nom: '',
            courriel: '',
            dateEmbauche: format(new Date(), "Pp"),
            dateNaissance: format(new Date(), "P"),
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
            dateAccepter: format(new Date(), "Pp"),
            dateAjouter: format(new Date(), "Pp"),
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
            date: format(new Date(), "Pp"),
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
            dateEnvoyerComptable: format(new Date(), "Pp"),
            dateRecu: format(new Date(), "Pp"),
            dateEnvoyerClient: format(new Date(), "Pp"),
            datePayer: format(new Date(), "Pp"),
            numeroFacture: "",
            payer: "",
            montantRecu: ""
        }

        const statusPaiement = [
            { id: 'payer', title: 'Payer'},
            { id: 'non_payer', title: 'Non payer'},
        ]

        return {
            initialFValues,
            statusPaiement
        }
       
    }
}