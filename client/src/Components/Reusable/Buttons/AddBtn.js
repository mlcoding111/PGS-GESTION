import React from 'react'
import Button from '@mui/material/Button';
import {AddCircleOutline} from '@mui/icons-material'
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';

    
const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1)
    },
}));

export default function AddBtn() {
    const history = useHistory()
    const path = history.location.pathname.slice(1) // Get the path name without the '/'

    const classes = useStyles();
    return (
        <Button
            variant="contained"
            size="large"
            color="error"
            startIcon={<AddCircleOutline />}
            className={classes.button}
            onClick={()=> history.push(`${path}/ajout`)} // Onclick change the route to the pathname with /add
        >Ajouter</Button>
    )
}
