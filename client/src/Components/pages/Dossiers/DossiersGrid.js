import React from "react";
import Grid from '../../Reusable/Grid'
import { Dossiers as DossiersData } from "../../../utils/Sections/Dossiers";

export default function Dossiers() {
  return (
    <>
      <Grid col={DossiersData.GridColumns}/>      
    </>
  );
}
