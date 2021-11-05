import React from "react";
import Grid from '../../Reusable/Grid'
import { Paiements as PaiementData } from "../../../utils/Sections/Paiements";

export default function Paiements() {
  return (
    <>
      <Grid col={PaiementData.GridColumn}/>
    </>
  );
}
