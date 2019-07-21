import React from 'react';
import Container from '@material-ui/core/Container'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './Half.css'

const styles = theme => ({
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
      },
  });

class Half extends React.Component{
    constructor(props){
        super(props);
        this.state={
            repos : null,
        }
        this.myref1 = React.createRef();
        this.myref2 = React.createRef();
    }
    
    changeView1(){
        var image = this.myref1.current;
        if (image.classList && image) {
            image.classList.add('giffy');
            /*Code to start recording*/
            var config = {
                headers: {'Access-Control-Allow-Origin': 'http://localhost:3000'}
            };
            axios.get('http://localhost:5000/record')
            .then((res)=>{
                const repository = res.data.content;
                console.log(repository);
                this.setState({repos : repository});
            })
            /*Code to start recording*/
        }     
    }
    changeView2(){
        var image = this.myref1.current;
        if (image.classList && image) {
            image.classList.remove('giffy');
        } 
        /*Code to stop recording*/
        
        /*Code to stop recording*/
    }
    render(){
        return(
            <div>
                <Container className="Container1" maxWidth="lg">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div id="likes" className="like" ref={this.myref1}></div>
                    <br/>
                    <br/>
                    <br/>
                    <Button variant="outlined" color="primary" onClick={this.changeView1.bind(this)}>
                        Start recording
                    </Button>
                    <Button variant="outlined" color="primary" onClick={this.changeView2.bind(this)}>
                        Stop recording
                    </Button>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <Button variant="outlined" color="primary" >
                        <Link to={{pathname:'/One', state:{texts : this.state.repos}}}>Next</Link>
                    </Button>
                </Container>
            </div>
        );
    }
}
Half.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  
export default withStyles(styles)(Half);
  