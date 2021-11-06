import React from "react";
import Grid from '../../Reusable/Grid'
import { Paiements as PaiementData } from "../../../utils/Sections/Paiements";
import { useSelector } from 'react-redux'

export default function Paiements() {
  const paiements = useSelector((state)=> state.paiements)

  console.log('Paiements : ', paiements)
  return (
    <>
      <Grid col={PaiementData.GridColumns} data={paiements}/>     
    </>
  );
}

