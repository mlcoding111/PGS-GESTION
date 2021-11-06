import React from "react";
import Grid from '../../Reusable/Grid'
import { Facturations as FacturationData } from "../../../utils/Sections/Facturations";
import { useSelector } from 'react-redux'

export default function Facturation() {
  const facturations = useSelector((state)=> state.facturations)
  console.log('Facturations : ', facturations)
  return (
    <>
      <Grid col={FacturationData.GridColumns} data={facturations}/>      
    </>
  );
}
