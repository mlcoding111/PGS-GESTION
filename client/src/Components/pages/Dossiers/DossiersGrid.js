import React from "react";
import Grid from '../../Reusable/Grid'
import { Dossier as DossiersData } from "../../../utils/Sections/Dossier";

export default function Dossiers() {
  return (
    <>
      <Grid col={DossiersData.GridColumns}/>      
    </>
  );
}
