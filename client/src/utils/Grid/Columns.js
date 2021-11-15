// This class contains all the information for the grid columns
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export class Columns{

    static get employees(){
        const columns = [
            { field: 'id', headerName: 'ID', width: 70},
            { field: 'prenom', headerName: 'Prénom', width: 130 },
            { field: 'nom', headerName: 'Nom', width: 130 },
            { field: 'courriel', headerName: 'Courriel', width: 130 },
            { field: 'referenceNom', headerName: 'Nom reference', width: 200 },
            { field: 'referenceTelephone', headerName: 'Téléphone reference', width: 170 },
            { field: 'typeEmployer', headerName: 'Type', width: 70 },
            { field: 'actif', headerName: 'Actif', width: 70},
            { field: 'dateEmbauche', headerName: 'Date embauche', width: 170 },
            { field: 'dateNaissance', headerName: 'Date de naissance', width: 170, headerCell: () => <LocalPhoneIcon/>, headerCell: "yo"},
        ];
        return columns
    }

    static get facturations(){
        const columns = [
            { field: 'id', headerName: 'ID', width: 70 },
            { field: 'nomClient', headerName: 'Client', width: 170 },        
            { field: 'numeroFacture', headerName: 'Numéro facture', width: 180 },
            { field: 'montant', headerName: 'Montant', width: 130 },
            { field: 'montantRecu', headerName: 'Montant reçu', width: 130 },
            { field: 'dateRecu', headerName: 'Date reçu', width: 170 },
            { field: 'datePayer', headerName: 'Date payer', width: 170 },
            { field: 'dateEnvoyerClient', headerName: 'Envoyer par client', width: 170 },
            { field: 'dateEnvoyerComptable', headerName: 'Envoyer le', width: 170 },
            { field: 'payer', headerName: 'Status', width: 80 },
        ];
        return columns
    }

    static get paiements(){
        const columns = [
            { field: 'id', headerName: 'ID', width: 70 },
            { field: 'fournisseur', headerName: 'Fournisseur', width: 120 },
            { field: 'montant', headerName: 'Montant', width: 120 },
            { field: 'date', headerName: 'Date', width: 170 },
            { field: 'faitPar', headerName: 'Fait par', width: 120 },
            { field: 'accepterPar', headerName: 'Accepté Par', width: 140 },
            { field: 'numeroFacture', headerName: 'Numéro de facture', width: 180 }
        ];
        return columns
    }

    static get dossiers(){
        const columns = [
            { field: 'id', headerName: 'ID', width: 70 },
            { field: 'numeroClient', headerName: 'Téléphone client', width: 150 },
            { field: 'nomClient', headerName: 'Nom', width: 130 },
            { field: 'typeTravaux', headerName: 'Type de travaux', width: 160 },
            { field: 'numeroFacture', headerName: 'N.Facture', width: 130 },
            { field: 'dateAccepter', headerName: 'Date accepter', width: 170 },
            { field: 'dateAjouter', headerName: 'Date ajouté', width: 170 },
            { field: 'montant', headerName: 'Montant $', width: 160 },
        ];
        return columns
    }
}