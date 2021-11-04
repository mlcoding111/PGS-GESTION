import React from 'react'
import Posts from '../Posts/Posts'
import Form from '../Form/Form'
import { Container, Grow, Grid, Typography} from '@mui/material'

export default function Dev() {

    return (
        <Container maxwidth="lg">
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts/>
                        </Grid>
                        <Grid item xs={12} sm={7}>
                            <Form/>
                        </Grid>
                    </Grid>
                </Container>

            </Grow>
        </Container>
    )
}
