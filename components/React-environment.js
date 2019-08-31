import React from 'react'
import { makeStyles } from '@material-ui/styles';
import Divider from '@material-ui/core/Divider';
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
    paddingLeft: '80px',
    paddingRight: '40px',
    width: '100%',
    height: 'auto',
    textAlign: 'justify',
    fontSize: 15,
    listStyleType: 'square',
  },
});

const ReactEnvironment = (props) => {
  const classes = useStyles();
  return (

    <div>
      <h2 className={classes.root}>React - Environment Setup</h2>
      <Divider />
      <div className={classes.content}>
        <section>
          In this section we will see the setup for successful React development. There are a few prerequisites for setting up the react pojects. We will need NodeJS, so if you have not installed click on the below link.
      </section>
        <section>
          <h3><a href="https://nodejs.org/en/">NodeJS Environment Setup</a></h3>
        </section>
        <section>
          <p>Installing the easy way : Using create-react-app command</p>
          <h4>Step 1:</h4>
        </section>

      </div>
    </div>
  )
}

export default ReactEnvironment;