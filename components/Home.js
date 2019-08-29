import React from 'react'
import data from '../data/products.json'
import ProductListing from '../features/productListing/index'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    color: 'black',
    textAlign:'center',
    fontSize:30,
  },
  content:{  
  padding: '10px 40px',
  width: '100%',
  height: 'auto',
  textAlign: 'justify',
  }
});


const HomePage=(props)=>{
  const classes = useStyles();
  return(
    <div>
      <h2 className={classes.root}>What is React?</h2>
      <div className={classes.content}>ReactJS tutorial provides basic and advanced concepts of ReactJS. Currently, ReactJS is one of the most popular JavaScript front-end libraries which has a strong foundation and a large community.ReactJS is a declarative, efficient, and flexible JavaScript library for building reusable UI components.</div>

      <div className={classes.content}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</div>

      <div className={classes.content}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</div>
      
    </div>
  ) 
 }

export default HomePage