// This grid component will be used to showcase the data for each pages. 
// It will receive as a props the data for the Rows and Columns for the specific page

// Filter selectedItem to add object to array 

import React, { useState, useEffect } from 'react'
import { DataGrid} from "@mui/x-data-grid";

import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

import Controls from './controls/Controls';

import AddBtn from './Buttons/AddBtn';
import DeleteBtn from './Buttons/DeleteBtn';

const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.getValue(params.id, "firstName") || ""} ${
          params.getValue(params.id, "lastName") || ""
        }`,
    },
];
  
const rows = [
    { id: 1, nom_client: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 10, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function Grid({col, data, currentId, setCurrentId}) {
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedRows, setSelectedRows] = React.useState([]);

    data && data.map((data, index)=>{ // If data is not empty, assign id for each data
      data['id'] = index += 1
    })

    // console.log(col.push( { field: '', headerName: '', width: 100, renderCell: () =>{
    //   return <button>Salut</button>
    // }}))
   

    return (
        !data.length ? 
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
          <AddBtn />
        </Box> : 
        (<div style={{ height: 640, width: "100%" }}>
            <DataGrid
              rows={data} // Need to be data
              columns={col}
              pageSize={10}
              rowsPerPageOptions={[10]}
              checkboxSelection
              disableSelectionOnClick
              onRowClick={(row)=> console.log(row.row)}
              onSelectionModelChange={(ids) => {
                const selectedIDs = new Set(ids);
                const selectedRows = data.filter((row) =>
                  selectedIDs.has(row.id),
                );      
                setSelectedRows(selectedRows);
                console.log(selectedRows)
              }}
              
              />

{/* <pre style={{ fontSize: 10 }}>
        {JSON.stringify(selectedRows, null, 4)}
      </pre> */}

            <AddBtn />
            <DeleteBtn selectedRows={selectedRows}/> {/* We pass all the selected items */}
      </div>
    ))
}
