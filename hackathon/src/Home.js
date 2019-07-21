import React from 'react'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
import './App.css';
import busy from './images/busy1.jpg'

class Home extends React.Component{
    render(){
        return(
            <div className="hero-bg" style ={ { 
                backgroundImage: `url(${busy})`,
                minHeight: '100%',
                minWidth: '100%',   
                position: 'fixed',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            } }>
                <div className="hero-text1" style={{
                    textAlign: 'center',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: 'rgb(0, 0, 0)',
                }}>
                    <h1>Minutes Of Meeting</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Morbi vulputate imperdiet eros quis interdum. Vestibulum ut lorem viverra, tincidunt ex ut,
                        iaculis dolor. Etiam dignissim lacus fermentum, finibus felis et, pretium quam. In hac 
                        habitasse platea dictumst. Sed gravida tellus eros, vel commodo elit faucibus id. Sed in 
                        sagittis erat, nec pharetra odio. Aenean in mollis arcu.</p>
                    <Button variant="outlined" color="primary" component={Link} to="Half">   
                        Proceed
                    </Button>
                </div>
            </div>
        );
    }
}
export default Home;
