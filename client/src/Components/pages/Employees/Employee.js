import React from "react";
import Grid from '../../Reusable/Grid'
import {Columns} from '../../../utils/gridColumns'
import AddBtn from "../../Reusable/Buttons/AddBtn";

export default function Employee() {
  return (
    <>
      <Grid col={Columns.employees}/>
    </>
  );
}
