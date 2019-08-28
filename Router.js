import React from 'react'
import {Switch,Route} from 'react-router-dom'
import HomePage from './components/Home'
import CartPage from './components/Cart'
import Layout from './Layout'

const Router=()=>{
  return(
    <Layout >
     <Switch>
    <Route exact path='/' component={HomePage}/>
    <Route  path='/cart' component={CartPage}/>
  </Switch>
  </Layout>
  )
 
}

export default Router;