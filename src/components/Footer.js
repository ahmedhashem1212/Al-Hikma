import React from 'react'

import { NavLink, Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'

import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { COLORS } from './Colors'
import fruits2 from '../assets/fruits2.jpg'

import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

import logo from '../Logo2.png'

import 'bootstrap/dist/css/bootstrap.min.css'
const useStyles = makeStyles((theme) => ({
	backgroundContainer: {
		background: '#14a109',
		//#80C721
		//#62A83D
		opacity: '80%',
		padding: '10px 0px',
		top: '0',
		zIndex: '1',
		maxHeight: '90px',
		minHeight: '70px',
		position: 'sticky',
	},
	meliorLogo: {
		width: 180,
		marginLeft: '2%',
	},
}))
const image ='https://www.just-juice.ca/images/footer.gif'
function Footer() {
	const classes = useStyles()
	return (
		<Container maxWidth='xl' >
			<Navbar fixed="bottom"style={{backgroundImage:`url(${image})`}} >
		
			</Navbar>
		</Container>
	)
}

export default Footer
