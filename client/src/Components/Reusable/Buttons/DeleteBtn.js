import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { Delete } from '@mui/icons-material'
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { deleteDossiers } from '../../../actions/dossiers'
import { useLocation } from 'react-router'
import { useAlert } from "react-alert";
import returnCurrentSection from '../../../utils/UtilityFunctions';
import Dispatch from '../../../utils/Functions/Dispatch/Dispatch.js'
    
const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1)
    },
}));

export default function DeleteBtn({selectedRows, setSelectedItems, setSelectedRows, disabled}) {
    const alert = useAlert();
    const [confirmed, setConfirmed] = useState(false)
    const location = useLocation()
    let { pathname } = location
    let section = returnCurrentSection(pathname)
    const dispatch = useDispatch()

    const deleteItems = () => {
        const ids = selectedRows.map((item)=>{
            return item._id
        })

        alert.show("Les fichiers vont être définitevement supprimer", {
            title: `Êtes vous sur de vouloir supprimer ${selectedRows.length} ${selectedRows.length === 1 ? section.slice(0, -1) : section}? `,
            closeCopy: "Annuler",
            actions: [
              {
                copy: "Confirmer",
                onClick: () => {
                    dispatch(Dispatch.handleDeleteDispatch(pathname, selectedRows))
                    setSelectedItems([])
                    setSelectedRows([])    
                }
              }
            ]
        })          

        // selectedRows.map(item=> console.log(`${item._id} will be deleted`))
    }

    const classes = useStyles();
    return (
        <>
        <Button
            disabled={disabled}
            variant="contained"
            size="large"
            color="error"
            sx={{m: 1}}
            startIcon={<Delete />}
            className={classes.button}
            onClick={deleteItems} // Onclick change the route to the pathname with /add
        >Supprimer</Button>
        
        </>
    )
}


