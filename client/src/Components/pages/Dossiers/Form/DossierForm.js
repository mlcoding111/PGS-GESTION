import React from "react";
import { Grid } from "@mui/material";
import { useForm, Form } from "../../../useForm";
import Controls from "../../../Reusable/controls/Controls";
import { FormStyle } from "../../../Reusable/Styles/FormStyle";
import { Dossiers } from "../../../../utils/Sections/Dossiers";

const { initialFValues, clientType } = Dossiers.FormFields;

export default function DossierForm() {
  const classes = FormStyle();
  const { values, setValues, handleInputChange } = useForm(initialFValues);
  return (
    <Form name="employeeForm">
      <Grid container className={classes.grid}>
        <Grid item xs={6}>
          <Controls.Input
            name="nom_client"
            label="Nom"
            value={values.nom_client}
            onChange={handleInputChange}
          />

          <Controls.DatePicker
            name="date_accepter"
            label="Date accepter"
            value={values.date_accepter}
            onChange={handleInputChange}
          />

          <Controls.Input
            name="montant"
            label="Montant de la facture"
            value={values.montant}
            onChange={handleInputChange}
          />
          <Controls.Select
            name="type_travaux"
            label="Type de travaux"
            value={values.type_travaux}
            onChange={handleInputChange}
            options={clientType}
          />
        </Grid>

        <Grid item xs={6}>
          <Controls.Input
            name="numero_client"
            label="Numéro du client"
            value={values.numero_client}
            onChange={handleInputChange}
          />
          <Controls.DatePicker
            name="date_ajouter"
            label="Date ajouter"
            value={values.date_ajouter}
            onChange={handleInputChange}
          />

          <Controls.Input
            name="numero_facture"
            label="Numéro de la facture"
            value={values.numero_facture}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={12} className={classes.submit}>
          <div>
            <Controls.Button text="Submit" type="Submit" />
            <Controls.Button text="Reset" color="error" type="Submit" />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
