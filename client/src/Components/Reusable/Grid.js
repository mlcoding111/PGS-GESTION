// This grid component will be used to showcase the data for each pages. 
// It will receive as a props the data for the Rows and Columns for the specific page
// https://stackoverflow.com/questions/66424752/get-row-item-on-checkbox-selection-in-react-mui-datagrid

import React, { useState} from 'react'
import { DataGrid, GridToolbar, renderActionsCell } from "@mui/x-data-grid";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import AddBtn from './Buttons/AddBtn';
import DeleteBtn from './Buttons/DeleteBtn';
import EditBtn from './Buttons/EditBtn'
import {format} from 'date-fns'
import { createStyles, makeStyles } from '@mui/styles';
import { fontSize } from '@mui/system';

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

const useStyles = makeStyles({
  root:{
    header: {
      fontWeight: 'bold',
    },  
  }, 
})

export default function Grid({col, data}) {
    const classes = useStyles();

  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [editBtnDisabled, setEditBtnDisabled] = useState(true)

    data && data.map((data, index)=>{ // If data is not empty, assign id for each data
      data['id'] = index += 1
      console.log(data.actif)
      // if(Object.keys(data.actif)){
      //  data.actif = ()=> <CircleIcon/> 
      // }
      // Object.keys(data.actif) ? data.renderCell = ()=> <CircleIcon/>:<CircleIcon/>
      // if(Object.values(data) == true){
      //   console.log('good')
      // }else{
      //   console.log('bad')
      // }
      // Object.values(data) == true ? console.log('good'): console.log('bad')
    })

    col && col.map((col)=>{
      col.cellClassName= 'MuiDataGrid-cell--textCenter' 
      // col.headerAlign ="center"
      col.headerClassName="bold"
    })
    
    return (
        !data.length ? 
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
          <AddBtn />
        </Box> : 
        (<div style={{ height: 640, width: "100%" }}>
            <DataGrid
              className={classes.root}
              rows={data} // Need to be data
              columns={col}
              components={{
                Toolbar: GridToolbar,
              }}
              ColumnResizeIcon
              pageSize={10}
              rowsPerPageOptions={[10]}
              checkboxSelection
              disableSelectionOnClick
              onRowClick={(row)=> console.log(row.row)} // Need to get this to change the state as well
              onSelectionModelChange={(ids) => {        
                setSelectedItems(ids)      
                const selectedIDs = new Set(ids);
                const selectedRows = data.filter((row) =>
                  selectedIDs.has(row.id),
                );      
                setSelectedRows(selectedRows);
                (ids.length == 1 ? setEditBtnDisabled(false) : setEditBtnDisabled(true))
                console.log(selectedRows)
              }}     
              selectionModel={selectedItems}
              />
            <AddBtn />
            <EditBtn disabled={editBtnDisabled} selectedItem={selectedRows.length && selectedRows[0]._id}/>
            <DeleteBtn selectedRows={selectedRows} setSelectedRows={setSelectedRows} setSelectedItems={setSelectedItems}/> {/* We pass all the selected items */}
      </div>
    ))
}
