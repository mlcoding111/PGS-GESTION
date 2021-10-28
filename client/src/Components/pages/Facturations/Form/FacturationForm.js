import React from "react";
import { Grid } from "@mui/material";
import { useForm, Form } from "../../../useForm";
import Controls from "../../../Reusable/controls/Controls";
import { FormStyle } from "../../../Reusable/Styles/FormStyle";
import { Facturations } from "../../../../utils/Sections/Facturations";

const { initialFValues, statusPaiement } = Facturations.FormFields;

export default function FacturationForm() {
  const classes = FormStyle();
  const { values, setValues, handleInputChange } = useForm(initialFValues);

  return (
    <Form name="facturationForm">
      <Grid container className={classes.grid}>
        <Grid item xs={6}>
          <Controls.Input
            name="nomClient"
            label="Nom du client"
            value={values.nomClient}
            onChange={handleInputChange}
          />

          <Controls.DatePicker
            name="dateEnvoyerComptable"
            label="Date envoyer au comtable"
            value={values.dateEnvoyerComptable}
            onChange={handleInputChange}
          />

          <Controls.DatePicker
            name="dateEnvoyerClient"
            label="Date envoyer au client"
            value={values.dateEnvoyerClient}
            onChange={handleInputChange}
          />
          <Controls.Input
            name="montant"
            label="Montant de la facture"
            value={values.montant}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={6}>
          <Controls.Input
            name="numeroFacture"
            label="Numéro de la facture"
            value={values.numeroFacture}
            onChange={handleInputChange}
          />
          <Controls.DatePicker
            name="dateRecu"
            label="Date recu"
            value={values.dateRecu}
            onChange={handleInputChange}
          />

          <Controls.DatePicker
            name="datePayer"
            label="Date Payer"
            value={values.datePayer}
            onChange={handleInputChange}
          />
          <Controls.Input
            name="montantRecu"
            label="Montant recu"
            value={values.montantRecu}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={12}>
          <div>
            <Controls.RadioGroup
              name="payer"
              label="Status du paiement"
              value={values.payer}
              onChange={handleInputChange}
              items={statusPaiement}
            />
          </div>
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