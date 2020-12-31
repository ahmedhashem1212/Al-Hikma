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
		<MDBRow style={{ marginLeft: '10%', marginRight: '10%', marginTop: '2%' }}>
			<MDBCol>
				<MDBCard reverse>
					<MDBCardBody cascade className='text-center'>
						<MDBCardTitle>
							<h1>Al Hikma</h1>
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
								marginLeft: '48%',
								marginBottom: '1%',
							}}
						></div>
						<MDBCardText>
							<p style={{ fontSize: '20px' }}>
							Al Hikma for export est une compagnie familiale d’exportation des légumes et fruits d’origine égyptienne établit en 1991. En fait, notre compagnie a pour but de fournir une bonne qualité des produits orientés aux clients précieux.
							</p>{' '}
							<p style={{ fontSize: '20px' }}>
							Le fondateur est très passionné dans ce domaine et a une bonne expertise d’exportation à L’Europe et les pays du Golf  puisqu’il avait travaillé en Suisse pour plus que 10 ans ainsi à Qatar pour plusieurs année.{' '}
							</p>
							<p style={{ fontSize: '20px' }}>
							Nous travaillons dans plusieurs légumes et fruits : grenades, oranges Valencia,  haricots verts, laitues iceberg, artichauts, oignons, pommes de terre Spunta, ailes et d’autres produits en respectant toutes les démarches qualités. Notre marchandise est bien sélectionnée et emballée d‘une manière professionnelle pour satisfaire nos clients.{' '}	
							</p>
							<p style={{ fontSize: '20px' }}>
							Notre marché est  destiné principalement à L’Europe par exemple ; France Belgique, Italie, Afrique et L’Asie.
							</p>
							<h5 className='indigo-text'>
								<strong style={{ color: '#14a109' }}>Notre Mission</strong>
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
								Pour atteindre l'excellence durable et les retours de nos services, tout en assurant le commerce mondial des produits frais selon les normes et procédures internationales de manière rentable.
							</p>
							<h5 className='indigo-text'>
								<strong style={{ color: '#14a109' }}>Notre Vision</strong>
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
								Nous anticipons d’étendre notre marché et diffuser les fruits et les légumes égyptiens aux monde entier et attirant aussi les clients potentiels.
							</p>
							<p style={{ fontSize: '20px' }}>
								{' '}
								La navigation sur notre site vous permet de savoir nos produits avec tous détails.
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
