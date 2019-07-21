import React from 'react'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent:'space-between',
  },
  mainForm:{
      display: 'flex',
      flexDirection:'column',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  resize:{
      height:250,
      width:700,
      wordwrap:'break-word',
    },
    subject:{
      width:700,
    },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
});
class InputFileReader extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const { classes} = this.props;
    const handleChange = (e)=>{
    
    }
   const handleClick = (e) =>{
      alert("Changes saved successfully");
      {this.props.handleClick1()}
   }
    return(
                <div>
                    <Container className="Container1" maxWidth="lg">
                        <form className={classes.container} noValidate autoComplete="off">
                           <div className="myForm1">
                            <TextField
                                    id="outlined-uncontrolled"
                                    label="From"
                                    name="from"
                                    value={this.props.stateVar.from}
                                    className={classes.textField}
                                    margin="normal"
                                    variant="outlined"
                                    onChange={(this.props.stateVar.flip)?this.props.handleStateChange:null}
                                />
                                <TextField
                                    id="outlined-uncontrolled"
                                    label="To"
                                    name="to"
                                    value={this.props.stateVar.to}
                                    className={classes.textField}
                                    margin="normal"
                                    variant="outlined"
                                    onChange={(this.props.stateVar.flip)?this.props.handleStateChange:null}
                                />
                                <TextField
                                    id="outlined-uncontrolled"
                                    label="CC"
                                    name="cc"
                                    value={this.props.stateVar.cc}
                                    className={classes.textField}
                                    margin="normal"
                                    variant="outlined"
                                    onChange={(this.props.stateVar.flip)?this.props.handleStateChange:null}
                                />
                           </div>
                           <div className="mainForm">
                                  <TextField
                                      id="outlined-uncontrolled"
                                      label="Subject"
                                      name="subject"
                                      value={this.props.stateVar.subject}
                                      className={classes.textField}
                                      margin="normal"
                                      variant="outlined"
                                      onChange={(this.props.stateVar.flip)?this.props.handleStateChange:null}
                                      InputProps={{
                                          classes: {
                                            input: classes.subject,
                                          },
                                        }}
                                  />
                                  <TextField
                                      id="outlined-uncontrolled"
                                      label="Description"
                                      name="message"
                                      value={this.props.stateVar.message}
                                      className={classes.textField}
                                      onChange={(this.props.stateVar.flip)?this.props.handleStateChange:null}
                                      margin="normal"
                                      wordwrap="hard"
                                      variant="outlined"
                                      InputProps={{
                                          classes: {
                                            input: classes.resize,
                                          },
                                        }}
                                  />
                           </div>
                        </form>
                        {this.props.stateVar.flip ? (<Button variant="contained" color="secondary" onClick={handleClick}>
                                              Save
                                          </Button>):(<div></div>)
                        }
                    </Container>
              </div>
    );
  }
}
InputFileReader.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(InputFileReader);