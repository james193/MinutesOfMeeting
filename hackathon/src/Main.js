import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Home from './Home'
import One from'./One'
import Half from './Half'

const Main = ()=>(
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/One' component={One}/>
            <Route path='/Half' component={Half}/>
        </Switch>
    </main>
)

export default Main;