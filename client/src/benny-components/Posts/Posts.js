
import React from 'react'
import { useSelector } from 'react-redux'
import { Grid, CircularProgress } from '@material-ui/core'

import Post from './Post/Post'

import mycss from './styles'

const Posts = ({ setCurrentId }) => {
    const myposts = useSelector((globalState) => globalState.postReducer)
    const myclasses = mycss()

    console.log("MY POSTS", myposts)
    console.log("Posts Length: ", myposts.length)
    return (
        !myposts.length ? <CircularProgress />:(
            <Grid className={myclasses.container} container alignItems='stretch' spacing={3}>
                {
                    myposts.map((post) => (
                        <Grid key={post._id} item xs={12} sm={6}>
                            <Post dPost={post} setdCurrentID={setCurrentId} />
                        </Grid>
                    ))
                }
            </Grid>
        )
    )
}

export default Posts
