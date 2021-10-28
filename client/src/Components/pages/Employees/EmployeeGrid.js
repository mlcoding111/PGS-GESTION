import React from "react";
import Grid from '../../Reusable/Grid'
import { Employee as EmployeeData } from "../../../utils/Sections/Employee";

export default function Employee() {
  return (
    <>
      <Grid col={EmployeeData.GridColumns}/>      
    </>
  );
}
