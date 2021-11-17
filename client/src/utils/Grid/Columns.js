// This class contains all the information for the grid columns
// https://stackoverflow.com/questions/69292542/render-a-datagrid-cell-with-a-colored-oval-with-text--in-it

import {
  Today,
  Receipt,
  AttachMoney,
  AlternateEmail,
  Circle,
  Phone,
  Person,
  Work,
  MonetizationOn,
} from "@mui/icons-material";

function getStatus(params) {
  return params.row.actif || params.row.payer ? (
    <Circle color="success" />
  ) : (
    <Circle color="error" />
  );
}

export class Columns {
  static get employees() {
    const columns = [
      { field: "id", headerName: "ID", width: 70 },
      {
        field: "prenom",
        renderHeader: () => (
          <>
            <Person fontSize={"small"} sx={{ mr: 0.5 }} />
            {"Prénom"}
          </>
        ),
        width: 130,
      },
      {
        field: "nom",
        renderHeader: () => (
          <>
            <Person fontSize={"small"} sx={{ mr: 0.5 }} />
            {"Nom"}
          </>
        ),
        width: 130,
      },
      {
        field: "courriel",
        renderHeader: () => (
          <>
            <AlternateEmail fontSize={"small"} sx={{ mr: 0.5 }} />
            {"Courriel"}
          </>
        ),
        width: 180,
      },
      {
        field: "referenceNom",
        renderHeader: () => (
          <>
            <Person fontSize={"small"} sx={{ mr: 0.5 }} />
            {"Nom référence"}
          </>
        ),
        width: 180,
      },
      {
        field: "referenceTelephone",
        renderHeader: () => (
          <>
            <Phone fontSize={"small"} sx={{ mr: 0.5 }} />
            {"Téléphone référence"}
          </>
        ),
        width: 190,
      },
      { field: "typeEmployer", headerName: "Type", width: 70 },
      {
        field: "dateEmbauche",
        renderHeader: () => (
          <>
            <Today fontSize={"small"} sx={{ mr: 0.5 }} />
            {"Date embauche"}
          </>
        ),
        width: 180,
        type: "date",
        valueGetter: ({ value }) =>
          value && new Date(value).toLocaleDateString("fr-FR"),
      },
      {
        field: "dateNaissance",
        renderHeader: () => (
          <>
            <Today fontSize={"small"} sx={{ mr: 0.5 }} />
            {"Date naissance"}
          </>
        ),
        width: 190,
        type: "date",
        valueGetter: ({ value }) =>
          value && new Date(value).toLocaleDateString("fr-FR"),
      },
      {
        field: "actif",
        headerName: "Actif",
        width: 70,
        renderCell: (params) => getStatus(params),
      },
    ];
    return columns;
  }

  static get facturations() {
    const columns = [
      { field: "id", headerName: "ID", width: 70 },
      {
        field: "nomClient",
        renderHeader: () => (
          <>
            <Person fontSize={"small"} sx={{ mr: 0.5 }} />
            {"Client"}
          </>
        ),
        width: 160,
      },
      {
        field: "numeroFacture",
        renderHeader: () => (
          <>
            <Receipt fontSize={"small"} sx={{ mr: 0.5 }} />
            {"Numéro facture"}
          </>
        ),
        width: 180,
      },
      {
        field: "montant",
        renderHeader: () => (
          <>
            <AttachMoney fontSize={"small"} sx={{ mr: 0.5 }} />
            {"Montant"}
          </>
        ),
        width: 130,
      },
      {
        field: "montantRecu",
        renderHeader: () => (
          <>
            <MonetizationOn fontSize={"small"} sx={{ mr: 0.5 }} />
            {"Montant reçu"}
          </>
        ),
        width: 140,
      },
      {
        field: "dateRecu",
        renderHeader: () => (
          <>
            <Today fontSize={"small"} sx={{ mr: 0.5 }} />
            {"Date reçu"}
          </>
        ),
        width: 170,
        type: "date",
        valueGetter: ({ value }) =>
          value && new Date(value).toLocaleDateString("fr-FR"),
      },
      {
        field: "datePayer",
        renderHeader: () => (
          <>
            <Today fontSize={"small"} sx={{ mr: 0.5 }} />
            {"Date payer"}
          </>
        ),
        width: 170,
        type: "date",
        valueGetter: ({ value }) =>
          value && new Date(value).toLocaleDateString("fr-FR"),
      },
      {
        field: "dateEnvoyerClient",
        renderHeader: () => (
          <>
            <Today fontSize={"small"} sx={{ mr: 0.5 }} />
            {"Envoyer par client"}
          </>
        ),
        width: 170,
        type: "date",
        valueGetter: ({ value }) =>
          value && new Date(value).toLocaleDateString("fr-FR"),
      },
      {
        field: "dateEnvoyerComptable",
        renderHeader: () => (
          <>
            <Today fontSize={"small"} sx={{ mr: 0.5 }} />
            {"Envoyer le"}
          </>
        ),
        width: 170,
        type: "date",
        valueGetter: ({ value }) =>
          value && new Date(value).toLocaleDateString("fr-FR"),
      },
      {
        field: "payer",
        headerName: "Status",
        width: 80,
        renderCell: (params) => getStatus(params),
      },
    ];
    return columns;
  }

  static get paiements() {
    const columns = [
      { field: "id", headerName: "ID", width: 70 },
      {
        field: "fournisseur",
        renderHeader: () => (
          <>
            <Person fontSize={"small"} sx={{ mr: 0.5 }} />
            {"Fournisseur"}
          </>
        ),
        width: 130,
      },
      {
        field: "montant",
        renderHeader: () => (
          <>
            <AttachMoney fontSize={"small"} sx={{ mr: 0.5 }} />
            {"Montant"}
          </>
        ),
        width: 130,
      },
      {
        field: "faitPar",
        renderHeader: () => (
          <>
            <Person fontSize={"small"} sx={{ mr: 0.5 }} />
            {"Fait par"}
          </>
        ),
        width: 120,
      },
      {
        field: "accepterPar",
        renderHeader: () => (
          <>
            <Person fontSize={"small"} sx={{ mr: 0.5 }} />
            {"Accepter par"}
          </>
        ),
        width: 140,
      },
      {
        field: "numeroFacture",
        renderHeader: () => (
          <>
            <Receipt fontSize={"small"} sx={{ mr: 0.5 }} />
            {"Numéro facture"}
          </>
        ),
        width: 180,
      },
      {
        field: "date",
        renderHeader: () => (
          <>
            <Today fontSize={"small"} sx={{ mr: 0.5 }} />
            {"Date"}
          </>
        ),
        width: 170,
        type: "date",
        valueGetter: ({ value }) =>
          value && new Date(value).toLocaleDateString("fr-FR"),
      },
    ];
    return columns;
  }

  static get dossiers() {
    const columns = [
      { field: "id", headerName: "ID", width: 70 },
      {
        field: "prenomClient",
        renderHeader: () => (
          <>
            <Person fontSize={"small"} sx={{ mr: 0.5 }} />
            {"Prénom"}
          </>
        ),
        width: 130,
      },
      {
        field: "nomClient",
        renderHeader: () => (
          <>
            <Person fontSize={"small"} sx={{ mr: 0.5 }} />
            {"Nom"}
          </>
        ),
        width: 130,
      },
      {
        field: "numeroClient",
        renderHeader: () => (
          <>
            <Phone fontSize={"small"} sx={{ mr: 0.5 }} />
            {"Téléphone"}
          </>
        ),
        width: 150,
      },
      {
        field: "typeTravaux",
        renderHeader: () => (
          <>
            <Work fontSize={"small"} sx={{ mr: 0.5 }} />
            {"Type travaux"}
          </>
        ),
        width: 150,
      },
      {
        field: "numeroFacture",
        renderHeader: () => (
          <>
            <Receipt fontSize={"small"} sx={{ mr: 0.5 }} />
            {"Numéro facture"}
          </>
        ),
        width: 160,
      },
      {
        field: "dateAccepter",
        renderHeader: () => (
          <>
            <Today fontSize={"small"} sx={{ mr: 0.5 }} />
            {"Date accepter"}
          </>
        ),
        width: 170,
        type: "date",
        valueGetter: ({ value }) =>
          value && new Date(value).toLocaleDateString("fr-FR"),
      },
      {
        field: "dateAjouter",
        renderHeader: () => (
          <>
            <Today fontSize={"small"} sx={{ mr: 0.5 }} />
            {"Date ajouter"}
          </>
        ),
        width: 170,
        type: "date",
        valueGetter: ({ value }) =>
          value && new Date(value).toLocaleDateString("fr-FR"),
      },
      {
        field: "montant",
        renderHeader: () => (
          <>
            <AttachMoney fontSize={"small"} sx={{ mr: 0.5 }} />
            {"Montant"}
          </>
        ),
        width: 160,
      },
    ];
    return columns;
  }

  // static get dossiers(){
  //     const columns = [
  //         { field: 'id', headerName: 'ID', width: 70 },
  //         { field: 'numeroClient', headerName: 'Téléphone client', width: 150 },
  //         { field: 'nomClient', headerName: 'Nom', width: 130 },
  //         { field: 'typeTravaux', headerName: 'Type de travaux', width: 160 },
  //         { field: 'numeroFacture', headerName: 'N.Facture', width: 130 },
  //         { field: 'dateAccepter', headerName: 'Date accepter', width: 170 },
  //         { field: 'dateAjouter', headerName: 'Date ajouté', width: 170 },
  //         { field: 'montant', headerName: 'Montant $', width: 160 },
  //     ];
  //     return columns
  // }
}
