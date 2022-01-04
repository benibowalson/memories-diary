import React, {useEffect} from 'react'

import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux'

import Posts from './benny-components/Posts/Posts'
import Form from './benny-components/Form/Form'
import memories from './benny-images/memories.PNG'

import { getPosts } from './benny-actions/post-actions'

import mycss from './styles'

const App = () => {
    const myclasses = mycss()
    const myDispatch = useDispatch()

    useEffect(() => {
        myDispatch(getPosts())
    }, [myDispatch])
    return (
        <Container maxWidth="lg">
            <AppBar className={myclasses.appBar} position='static' color='inherit'>
                <Typography className={myclasses.heading} variant='h2' align='center'>Memories</Typography>
                <img className={myclasses.image} src={memories} alt="memories" height="60" />
            </AppBar>

            <Grow in>
                <Container>
                    <Grid container justifyContent='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App
