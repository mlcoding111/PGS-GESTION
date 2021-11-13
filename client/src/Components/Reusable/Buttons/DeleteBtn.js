import React from 'react'
import Button from '@mui/material/Button';
import { Delete } from '@mui/icons-material'
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { deleteDossier } from '../../../actions/dossiers'

    
const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1)
    },
}));

export default function DeleteBtn({selectedRows}) {
    const dispatch = useDispatch()


    const deleteItems = () => {
        const ids = selectedRows.map((item)=>{
            return item._id
        })
        console.log(ids)
        dispatch(deleteDossier(selectedRows))
        // selectedRows.map(item=> console.log(`${item._id} will be deleted`))

        // Logic to delete the selected items 

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
