import React, { useState } from 'react';
import useStyles from './Style'
import Grid from '@material-ui/core/Grid';
import { FaQuestionCircle } from 'react-icons/fa';
import { DialogActions, DialogContent, DialogTitle, Button } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
const CreatePartition = props => {
  const classes = useStyles()
  const { hideDialog = () => { } } = props;
  const [tag, setTag] = useState('')
  const update = async () => {
    hideDialog()
  }
  return (
    <>
      <DialogTitle >{`Create Collection`}</DialogTitle>
      <DialogContent>
        <Grid container spacing={3}>
          <Grid item sm={4}>
            <div className={classes.wrapper}><span className={classes.column}>Partition Tag</span> <FaQuestionCircle /></div>
          </Grid>
          <Grid item sm={8}>
            <TextField value={tag} onChange={e => setTag(e.target.value)} />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={() => update()} color="primary">
          {`update`}
        </Button>
        <Button variant="outlined" onClick={() => hideDialog()} color="primary">
          {`cancel`}
        </Button>
      </DialogActions>
    </>)
}

export default CreatePartition