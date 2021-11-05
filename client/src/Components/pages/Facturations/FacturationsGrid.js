import React from "react";
import Grid from '../../Reusable/Grid'
import { Facturations as FacturationData } from "../../../utils/Sections/Facturations";

export default function Facturation() {
  return (
    <>
      <Grid col={FacturationData.GridColumns}/>      
    </>
  );
}
