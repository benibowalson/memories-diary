import React, { useState } from "react";
import FileBase from 'react-file-base64'
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch } from 'react-redux'

import { createPost } from "../../benny-actions/post-actions";

import mycss from "./styles";

const Form = () => {

    const [postData, setPostData] = useState({
        creator: '', title: '', message: '', tags: '', selectedFile: '',
    })

 const myDispatch = useDispatch()

  const myclasses = mycss();

  const handleSubmit = (ev) => {
    ev.preventDefault()
    myDispatch(createPost(postData))
  };

  const clear = () => {}

  return (
    <Paper className={myclasses.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${myclasses.root} ${myclasses.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Creating a Memory</Typography>
        <TextField name='creator' variant="outlined" label='Creator' fullWidth value={postData.creator} onChange={(ev) => setPostData({ ...postData, creator: ev.target.value })} />
        <TextField name='title' variant="outlined" label='Title' fullWidth value={postData.title} onChange={(ev) => setPostData({ ...postData, title: ev.target.value })} />
        <TextField name='message' variant="outlined" label='Message' fullWidth value={postData.message} onChange={(ev) => setPostData({ ...postData, message: ev.target.value })} />
        <TextField name='tags' variant="outlined" label='Tags' fullWidth value={postData.tags} onChange={(ev) => setPostData({ ...postData, tags: ev.target.value })} />
        <div className={myclasses.fileInput}>
            <FileBase type='file' multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })} />
        </div>
        <Button className={myclasses.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;
