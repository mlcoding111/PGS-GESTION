import React from "react";
import Grid from '../../Reusable/Grid'
import { Employee as EmployeeData } from "../../../utils/Sections/Employee";
import { useSelector } from 'react-redux'

export default function Employee() {
  const employers = useSelector((state)=> state.employers)

  console.log('THIS employers: ', employers)
  return (
    <>
      <Grid col={EmployeeData.GridColumns} data={employers}/>      
    </>
  );
}
