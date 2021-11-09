import React from "react";
import { Grid } from "@mui/material";
import { useForm, Form } from "../../../useForm";
import Controls from "../../../Reusable/controls/Controls";
import { FormStyle } from "../../../Reusable/Styles/FormStyle";
import { Dossier } from "../../../../utils/Sections/Dossier";

import { createPost } from "../../../../actions/posts";

const { initialFValues, clientType } = Dossier.FormFields;

export default function DossierForm() {
  const classes = FormStyle();
  const { values, setValues, handleInputChange } = useForm(initialFValues);

  return (
    <Form name="dossierForm" values={values}>
      <Grid container className={classes.grid}>
        <Grid item xs={6}>
          <Controls.Input
            name="nomClient"
            label="Nom"
            value={values.nomClient}
            onChange={handleInputChange}
          />

          <Controls.DatePicker
            name="dateAccepter"
            label="Date accepter"
            value={values.dateAccepter}
            onChange={handleInputChange}
          />

          <Controls.Input
            name="montant"
            label="Montant de la facture"
            value={values.montant}
            onChange={handleInputChange}
          />
          <Controls.Select
            name="typeTravaux"
            label="Type de travaux"
            value={values.typeTravaux}
            onChange={handleInputChange}
            options={clientType}
          />
        </Grid>

        <Grid item xs={6}>
          <Controls.Input
            name="numeroClient"
            label="Numéro du client"
            value={values.numeroClient}
            onChange={handleInputChange}
          />
          <Controls.DatePicker
            name="dateAjouter"
            label="Date ajouter"
            value={values.dateAjouter}
            onChange={handleInputChange}
          />

          <Controls.Input
            name="numeroFacture"
            label="Numéro de la facture"
            value={values.numeroFacture}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={12} className={classes.submit}>
          <div>
            <Controls.Button text="Submit" type="Submit"  dispatchType={"add"} values={values}/>
            <Controls.Button text="Reset" color="error" type="Submit" />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
