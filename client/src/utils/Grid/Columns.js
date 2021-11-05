// This class contains all the information for the grid columns

export class Columns{

    static get employees(){
        const columns = [
            { field: 'id', headerName: 'ID', width: 70},
            { field: 'prenom', headerName: 'Prénom', width: 130 },
            { field: 'nom', headerName: 'Nom', width: 130 },
            { field: 'courriel', headerName: 'Courriel', width: 130 },
            { field: 'date_embauche', headerName: 'Date embauche', width: 200 },
            { field: 'date_naissance', headerName: 'Date de naissance', width: 200 },
            { field: 'reference_nom', headerName: 'Nom reference', width: 200 },
            { field: 'reference_telephone', headerName: '# Reference', width: 130 },
            { field: 'type_employer', headerName: 'Type', width: 70 },
            { field: 'actif', headerName: 'Actif', width: 70 }
        ];
        return columns
    }

    static get facturations(){
        const columns = [
            { field: 'id', headerName: 'ID', width: 70 },
            { field: 'nom_client', headerName: 'Client', width: 170 },
            { field: 'montant', headerName: 'Montant', width: 130 },
            { field: 'envoyer_comptable_date', headerName: 'Envoyer le', width: 130 },
            { field: 'recu_date', headerName: 'Date recu', width: 140 },
            { field: 'payer_date', headerName: 'Date payer', width: 140 },
            { field: 'numero_facture', headerName: 'Numéro facture', width: 180 },
            { field: 'envoyer_client_date', headerName: 'Envoyer par client', width: 180 },
            { field: 'payer', headerName: 'Status paiement', width: 150 }
        ];
        return columns
    }

    static get paiements(){
        const columns = [
            { field: 'id', headerName: 'ID', width: 70 },
            { field: 'fournisseur', headerName: 'Fournisseur', width: 120 },
            { field: 'montant', headerName: 'Montant', width: 120 },
            { field: 'date', headerName: 'Date', width: 120 },
            { field: 'fait_par', headerName: 'Fait par', width: 120 },
            { field: 'accepter_par', headerName: 'Accepté Par', width: 140 },
            { field: 'numero_facture', headerName: 'Numéro de facture', width: 180 }
        ];
        return columns
    }

    static get dossiers(){
        const columns = [
            { field: 'id', headerName: 'ID', width: 70 },
            { field: 'numero_client', headerName: '# Client', width: 150 },
            { field: 'nom_client', headerName: 'Nom', width: 130 },
            { field: 'type_travaux', headerName: 'Type de travaux', width: 160 },
            { field: 'accepter_date', headerName: 'Accepter date', width: 170 },
            { field: 'montant_travaux', headerName: 'Montant travaux', width: 160 },
            { field: 'numero_facture', headerName: '# Facture', width: 130 },
            { field: 'date_ajout', headerName: 'Date ajouté', width: 170 },
        ];
        return columns
    }
}