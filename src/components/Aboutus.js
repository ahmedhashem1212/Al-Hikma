import React from 'react'
import {
	MDBCard,
	MDBCardBody,
	MDBCardImage,
	MDBCardTitle,
	MDBCardText,
	MDBRow,
	MDBCol,
	MDBIcon,
} from 'mdbreact'
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
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'

import calender from '../Calender.png'

import 'bootstrap/dist/css/bootstrap.min.css'
const useStyles = makeStyles((theme) => ({
	backgroundContainer: {
		background: '#14a109',
		//#80C721
		//#62A83D
		//opacity: '80%',
		padding: '10px 0px',
		zIndex: '1',
		position: 'sticky',
	},
}))
function About() {
	const theme = useTheme()
	const matches = useMediaQuery(theme.breakpoints.up('md'))
	const classes = useStyles()
	return (
		<MDBRow style={{ marginLeft: '10%', marginRight: '10%', marginTop: '2%' }}>
			<MDBCol>
				<MDBCard reverse>
					<MDBCardBody cascade className='text-center'>
						<MDBCardTitle>
							<h1>Al Hikma EG</h1>
						</MDBCardTitle>
						<h5 className='indigo-text'>
							<strong style={{ color: '#14a109' }}>Who are we?</strong>
						</h5>
						<div
							style={{
								backgroundColor: '#4ed715',
								height: '3px',
								width: '50px',
								marginTop: '1%',
								marginLeft: '48%',
								marginBottom: '1%',
							}}
						></div>
						<MDBCardText>
							<p style={{ fontSize: '20px' }}>
								Al Hikma EG for export is a family business and Egyptian company
								for exporting vegetables and fruits established in 1991. In
								fact, our company aims to provide good quality oriented to
								valuable customers. The founder is very passionate in this field
								and has an excellent expertise in exporting to Europe and Gulf
								countries since he had worked in Switzerland for more than 10
								years as well as in Qatar for several years.
							</p>{' '}
							<p style={{ fontSize: '20px' }}>
								We work in several vegetables and fruits: pomegranates, oranges
								Valencia, Green Beans, lettuce iceberg, artichoke, onions,
								potatoes Sponta, garlic, and watermelon, with respecting all the
								quality procedures. Our merchandise is well selected and
								professionally packaged to satisfy our customers. Our market is
								mainly intended for Europe for example; France Belgium Italy,
								Africa and Asia.{' '}
							</p>
							<h5 className='indigo-text'>
								<strong style={{ color: '#14a109' }}>Our Vision</strong>
							</h5>
							<div
								style={{
									backgroundColor: '#4ed715',
									height: '3px',
									width: '50px',
									marginTop: '1%',
									marginLeft: '48%',
									marginBottom: '2%',
								}}
							></div>
							<p style={{ fontSize: '20px' }}>
								{' '}
								For the future, we anticipate expanding our market and exporting
								Egyptian fruits and vegetables to the whole world and also
								attracting potential customers. Browsing our site allows you to
								know our products in full details.
							</p>
							<h1
								style={{
									fontSize: '20px',
									alignContent: 'right',
									color: 'black',
									fontWeight: 'bold',
									marginLeft: '67%',
								}}
							>
								{' '}
								CEO Osman Mansour
							</h1>
							<h1
								style={{
									fontSize: '20px',
									alignContent: 'right',
									color: 'black',
									fontWeight: 'bold',
									marginLeft: '50%',
								}}
							>
								{' '}
								Marketing Manager Yasmina Osman
							</h1>
						</MDBCardText>
						<div
							style={{
								backgroundColor: '#4ed715',
								height: '3px',
								width: '50px',
								marginTop: '1%',
								marginLeft: '48%',
							}}
						></div>

						<MDBIcon icon='envelope' size='1.5x' className='green-text mt-4'>
							<p style={{ fontSize: '15px' }}>info@alhikmaeg.com</p>
						</MDBIcon>
					</MDBCardBody>
				</MDBCard>
			</MDBCol>
		</MDBRow>
	)
}

export default About
