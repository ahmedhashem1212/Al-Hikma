import React from 'react'

import { NavLink, Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'

import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { COLORS } from './Colors'

import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

import logo from '../Logo2.png'
import logo1 from '../Eng.png'
import logo2 from '../FR.png'
import logo3 from '../EG.png'

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

function Header() {
	const classes = useStyles()
	return (
		<Container maxWidth='xl' className={classes.backgroundContainer}>
			<Navbar>
				<Navbar.Brand href='#home' style={{ color: 'white' }}>
					<img src={logo} style={{ width: 220, marginTop: 0, padding: 0 }} />
				</Navbar.Brand>

				<Nav className='justify-content-end' style={{ paddingLeft: '42.5%' }}>
					<Nav.Link id='nav-dropdown' href='#home' style={{ color: 'white' }}>
						Home
					</Nav.Link>
					<NavDropdown title={'Products'} id='nav-dropdown'>
						<NavDropdown.Item href='#action/3.1'>Vegetables</NavDropdown.Item>
						<NavDropdown.Item href='#action/3.2'>Fruits</NavDropdown.Item>
					</NavDropdown>
					<Nav.Link id='nav-dropdown' href='#home' style={{ color: 'white' }}>
						Calender
					</Nav.Link>
					<Nav.Link
						id='nav-dropdown'
						href='#contactus'
						style={{ color: 'white' }}
					>
						Contact Us
					</Nav.Link>
					<Nav.Link id='nav-dropdown' href='ENG' style={{ color: 'white' }}>
						{' '}
						<img
							src={logo1}
							style={{
								width: '25px',
								height: '26px',
								marginTop: 0,
								padding: 0,
							}}
						/>
					</Nav.Link>
					<Nav.Link id='nav-dropdown' href='FR' style={{ color: 'white' }}>
						{' '}
						<img
							src={logo2}
							style={{
								width: '30px',
								height: '27.5px',
								marginTop: 0,
								padding: 0,
							}}
						/>
					</Nav.Link>
					<Nav.Link id='nav-dropdown' href='AR' style={{ color: 'white' }}>
						{' '}
						<img
							src={logo3}
							style={{
								width: '26px',
								height: '27px',
								marginTop: 0,
								padding: 0,
							}}
						/>
					</Nav.Link>
				</Nav>
			</Navbar>
		</Container>
	)
}

export default Header
