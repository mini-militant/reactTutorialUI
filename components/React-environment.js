import React from 'react'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    color: 'black',
    textAlign: 'center',
    fontSize: 30,
  },
  content: {
    padding: '5px 40px',
    width: '100%',
    height: 'auto',
    textAlign: 'justify',
    fontSize: 15,
  },
  subheading: {
    paddingLeft: '40px',
    width: '100%',
    height: 'auto',
    textAlign: 'justify',
    fontSize: 23,
    color: '#4f5751'
  },
  list: {
    paddingLeft:'80px',
    paddingRight:'40px',
    width: '100%',
    height: 'auto',
    textAlign: 'justify',
    fontSize: 15,
    listStyleType: 'square',
  },
});

const ReactEnvironment=(props)=>{
  const classes = useStyles();
  return(
    
    <div>
      <h2 className={classes.root}>What is React?</h2>
      <div className={classes.content}><b>ReactJS </b>tutorial provides basic and advanced concepts of ReactJS. Currently, ReactJS is one of the most popular JavaScript front-end libraries which has a strong foundation and a large community. ReactJS is a <b>declarative</b>, <b>efficient</b>, and flexible <b> JavaScript library </b> for building reusable UI components.React is a component based framework used for making <b>reusable</b> User Interface that improves the speed of the apps. It uses virtual DOM, which improves the performance of the app. The Javascript virtual DOM is faster than the regular DOM. </div>
    </div>
  )
}

export default ReactEnvironment;