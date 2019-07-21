import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

class AlertDialogSlide extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open : false,
    }
  }

  handleClickOpen=()=> {
    this.setState({
      open : true,
    })
  }

  handleClose=()=> {
    this.setState({
      open : false,
    })
  }
  render(){
    return (
      <div>
        <Button variant="outlined" color="secondary" onClick={this.handleClickOpen}>
          Proceed
        </Button>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">{"Attention"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
            "Please put on our headphone and speak into microphone in a clear and loud voice."
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" component={Link} to="Half">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
AlertDialogSlide.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default AlertDialogSlide;