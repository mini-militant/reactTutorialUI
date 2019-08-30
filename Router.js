import React from 'react'
import {Switch,Route} from 'react-router-dom'
import ReactHome from './components/React-Home'
import ReactEnvironment from './components/React-environment'
import Layout from './Layout'

const Router=()=>{
  return(
    <Layout >
     <Switch>
    <Route exact path='/' component={ReactHome}/>
    <Route  path='/cart' component={ReactEnvironment}/>
  </Switch>
  </Layout>
  )
 
}

export default Router;