import React, { useState } from "react";
import Grid from '../../Reusable/Grid'
import { Dossier as DossiersData } from "../../../utils/Sections/Dossier";
import { useSelector } from 'react-redux'

export default function Dossiers() {

  const dossiers = useSelector((state)=> state.dossiers)
  const [currentId, setCurrentId] = useState(null)

  console.log('THIS DOSSIER: ', dossiers)

  return (    
    <>
      <Grid col={DossiersData.GridColumns} data={dossiers} currentId={currentId} setCurrentId={setCurrentId}/>      
    </>
  );
}
