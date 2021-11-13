import React from 'react'
import Button from '@mui/material/Button';
import {PersonPinCircle} from '@mui/icons-material'
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';

    
const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1)
    },
}));

export default function EditBtn({disabled, selectedItem}) {
    const history = useHistory()
    const path = history.location.pathname.slice(1) // Get the path name without the '/'
    const classes = useStyles();
    console.log({selectedItem})
    return (
        <Button
            variant="contained"
            size="large"
            color="primary"
            disabled={disabled}
            startIcon={<PersonPinCircle />}
            className={classes.button}
            onClick={()=> history.push({
                pathname: `${path}/${selectedItem}`,
                state: { id: selectedItem }
            })} // Onclick change the route to the pathname with /add
        >Modifier</Button>
    )
}
