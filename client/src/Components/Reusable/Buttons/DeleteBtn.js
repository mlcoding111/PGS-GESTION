import React from 'react'
import Button from '@mui/material/Button';
import { Delete } from '@mui/icons-material'
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { deleteDossiers } from '../../../actions/dossiers'
import { useLocation } from 'react-router'
import Dispatch from '../../../utils/Functions/Dispatch/Dispatch';

    
const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1)
    },
}));

export default function DeleteBtn({selectedRows, setSelectedItems, setSelectedRows}) {
    const location = useLocation()
    let { pathname } = location
    const dispatch = useDispatch()

    const deleteItems = () => {
        const ids = selectedRows.map((item)=>{
            return item._id
        })
        dispatch(Dispatch.handleDeleteDispatch(pathname, selectedRows))
        // dispatch(deleteDossiers(selectedRows))
                
        // These 2 lines reset the grid selection
        setSelectedItems([])
        setSelectedRows([])
        // selectedRows.map(item=> console.log(`${item._id} will be deleted`))
    }

    const classes = useStyles();
    return (
        <Button
            variant="contained"
            size="large"
            color="error"
            startIcon={<Delete />}
            className={classes.button}
            onClick={deleteItems} // Onclick change the route to the pathname with /add
        >Supprimer</Button>
    )
}
