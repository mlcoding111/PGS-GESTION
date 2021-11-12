import React from 'react'
import Button from '@mui/material/Button';
import { Delete } from '@mui/icons-material'
import { makeStyles } from '@material-ui/core/styles';

    
const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1)
    },
}));

export default function AddBtn({selectedRows}) {

    const deleteItems = () => {
        // Logic to delete the selected items 
        selectedRows.map(item=> console.log(`${item._id} will be deleted`))
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
