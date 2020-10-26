import React from 'react';

import { NavLink, Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';

import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

import { COLORS } from './Colors'

import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

import "bootstrap/dist/css/bootstrap.min.css"
const useStyles = makeStyles((theme) => ({
	backgroundContainer: {
	  background: "#4ed715",
	  padding: "10px 0px",
	  top: "0",
	  zIndex: "1",
	  maxHeight: "90px",
	  minHeight: "70px",
      position: "sticky",
      opacity:'85%'

	},
	meliorLogo: {
	  width: 180,
	  marginLeft: "2%",
	},
  }))	


function Header() {
    const classes = useStyles()
  return(
    <Container maxWidth="xl" className={classes.backgroundContainer}>
    <Navbar  >
       <Navbar.Brand href="#home" style={{color:'green'}}>Navbar</Navbar.Brand>
       <Nav className="mr-auto">
         <Nav.Link href="#home" style={{color:'green'}}>Home</Nav.Link>
         <Nav.Link href="#features" style={{color:'green'}}>Features</Nav.Link>
         <Nav.Link href="#pricing" style={{color:'green'}}>Pricing</Nav.Link>
       </Nav>
       <Form inline>
         <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{borderBlockColor:'green'}} />
         <Button variant="outline-info" style={{color:'green',borderColor:'green'} }>Search</Button>
       </Form>
     </Navbar>
           </Container>
  )
}

export default Header;