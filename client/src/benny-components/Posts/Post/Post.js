import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { deletePost, likePost } from '../../../benny-actions/post-actions'

import mycss from './styles'

const Post = ({ dPost, setdCurrentID }) => {
    const myclasses = mycss()
    const dispatch = useDispatch()
    return (
        <Card className={myclasses.card}>
            <CardMedia className={myclasses.media} image={dPost.selectedFile} title={dPost.title} />
            <div className={myclasses.overlay}>
                <Typography variant='h6'>{dPost.creator}</Typography>
                <Typography variant='body2'>{moment(dPost.createdAt).fromNow()}</Typography>
            </div>
            <div className={myclasses.overlay2}>
                <Button style={{ color: 'white' }} size='small' onClick={() => { setdCurrentID(dPost._id) }}>
                    <MoreHorizIcon fontSize='medium' />
                </Button>
            </div>
            <div className={myclasses.details}>
                <Typography variant='body2' color='textSecondary'>{dPost.tags.map((tag) => `#${tag} `)}</Typography>
            </div>            
            <Typography className={myclasses.title} variant='h5' gutterBottom>{dPost.title}</Typography>

            <CardContent>
                <Typography variant='body2' color='textSecondary' component="p">{dPost.message}</Typography>
            </CardContent>
            <CardActions className={myclasses.cardActions}>
                <Button size='small' color='primary' onClick={() => dispatch(likePost(dPost._id))}>
                    <ThumbUpAltIcon fontSize='small' />
                    &nbsp;Like&nbsp;
                    {dPost.likeCount}
                </Button>
                <Button size='small' color='primary' onClick={() => dispatch(deletePost(dPost._id))}>
                    <DeleteIcon fontSize='small' />
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}

export default Post
