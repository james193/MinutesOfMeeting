import React from 'react'
import ResponsiveDrawer from './miniDrawer'

class One extends React.Component{
    render(){
        const { texts } = this.props.location.state
        return(
            <ResponsiveDrawer td={texts}/>
        )
    }
}
export default One
