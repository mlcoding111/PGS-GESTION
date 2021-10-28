// Every data required for each Forms will be stored here
export class FormFields{
    static get Employee(){

        const initialFValues = {
            id: 0,
            prenom: '',
            nom: '',
            courriel: '',
            date_embauche: new Date(),
            date_naissance: new Date(),
            reference_nom: '',
            reference_telephone: '',
            type_employer: 'a1',
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
            id: 0,
            nom_client: "",
            numero_client: "",
            type_travaux: "",
            date_accepter: new Date(),
            date_ajouter: new Date(),
            montant: "",
            numero_facture: "",
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