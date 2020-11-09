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
function AboutFR() {
	const theme = useTheme()
	const matches = useMediaQuery(theme.breakpoints.up('md'))
	const classes = useStyles()
	return (
		<MDBRow style={{ marginLeft: '17.5%', marginTop: '2%' }}>
			<MDBCol style={{ maxWidth: '80%' }}>
				<MDBCard reverse>
					<MDBCardBody cascade className='text-center'>
						<MDBCardTitle>
							<h1>Al Hikma EG</h1>
						</MDBCardTitle>
						<h5 className='indigo-text'>
							<strong style={{ color: '#14a109' }}>Qui sommes nous?</strong>
						</h5>
						<div
							style={{
								backgroundColor: '#4ed715',
								height: '3px',
								width: '50px',
								marginTop: '1%',
								marginLeft: '46%',
								marginBottom: '1%',
							}}
						></div>
						<MDBCardText>
							<p style={{ fontSize: '20px' }}>
								Al Hikma EG for export est une compagnie familiale d’exportation
								des légumes et fruits d’origine égyptienne établit en 1991. En
								fait, notre compagnie a pour but de fournir une bonne qualité
								des produits orientés aux clients précieux. Le fondateur est
								très passionné dans ce domaine et a une bonne expertise
								d’exportation à L’Europe et les pays du Golf puisqu’il avait
								travaillé en Suisse pour plus que 10 ans ainsi à Qatar pour
								plusieurs année.
							</p>{' '}
							<p style={{ fontSize: '20px' }}>
								Nous travaillons dans plusieurs légumes et fruits : grenades,
								oranges Valencia, Green Beans, laitue iceberg, artichaut,
								oignons, pomme de terre Sponta, garlic, pastèque, en respectant
								toutes les démarches qualités. Notre marchandise est bien
								sélectionnée et emballée d‘une manière professionnelle pour
								satisfaire nos clients. Notre marche est destinés principalement
								à L’Europe par exemple ; France Belgique Italie, Afrique et
								L’Asie.{' '}
							</p>
							<h5 className='indigo-text'>
								<strong style={{ color: '#14a109' }}>Notre vision</strong>
							</h5>
							<div
								style={{
									backgroundColor: '#4ed715',
									height: '3px',
									width: '50px',
									marginTop: '1%',
									marginLeft: '46%',
									marginBottom: '2%',
								}}
							></div>
							<p style={{ fontSize: '20px' }}>
								{' '}
								Pour le future, nous anticipons d’étendre notre marché et
								diffuser les fruits et les légumes égyptiens aux monde entier et
								attirant aussi les clients potentiels. La navigation sur notre
								site vous permet de savoir nos produits avec tous détails.
							</p>
							<p
								style={{
									fontSize: '20px',
									alignContent: 'right',
									color: 'black',
									fontWeight: 'bold',
									marginLeft: '70%',
								}}
							>
								{' '}
								CEO Osman Mansour
							</p>
							<p
								style={{
									fontSize: '20px',
									alignContent: 'right',
									color: 'black',
									fontWeight: 'bold',
									marginLeft: '45%',
								}}
							>
								{' '}
								Responsable Marketing Yasmina Osman
							</p>
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

export default AboutFR
