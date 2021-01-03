import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact'

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
function FooterFR(props) {
	const homee = () => {
		props.setHome(true)
		props.setCalender(false)
		props.setContact(false)
	}
	const classes = useStyles()
	return (
		<MDBFooter
			color='#14a109'
			className='font-medium pt-4 mt-4'
			style={{
				background: '#14a109',
				//opacity: '80%',
				 
			}}
		>
			<MDBContainer className='text-center text-md-left'>
				<MDBRow className='text-center text-md-left mt-3 pb-3' style={{height: '185px' }}>
					<MDBCol
						md='3'
						lg='2'
						xl='3'
						className='mx-auto mt-3'
						style={{ height: '230px' }}
					>
						<h6 className='text-uppercase mb-4 font-weight-bold'>Al Hikma</h6>
						<p>
						Al Hikma for export est une compagnie familiale d’exportation des légumes et fruits d’origine égyptienne établit en 1991.
						</p>
					</MDBCol>
					<hr className='w-100 clearfix d-md-none' />
					<MDBCol md='2' lg='2' xl='2' className='mx-auto mt-3'>
						<h6 className='text-uppercase mb-4 font-weight-bold'>Products</h6>
						<p>
							<a onClick={props.home ? props.executeScroll2 : homee}>Fruits</a>
						</p>
						<p>
							<a onClick={props.home ? props.executeScroll : homee}>Légumes</a>
						</p>
					</MDBCol>
					<hr className='w-100 clearfix d-md-none' />
					<MDBCol md='3' lg='2' xl='2' className='mx-auto mt-3'>
						<h6 className='text-uppercase mb-4 font-weight-bold'>
							Useful links
						</h6>
						<p>
							<a
								onClick={() => {
									props.setHome(true)
									props.setCalender(false)
									props.setContact(false)
								}}
							>
								Domicile
							</a>
						</p>
						<p>
							<a
								onClick={() => {
									props.setHome(false)
									props.setCalender(true)
									props.setContact(false)
								}}
							>
								Calendrier
							</a>
						</p>
						<p>
							<a
								onClick={() => {
									props.setHome(false)
									props.setCalender(false)
									props.setContact(true)
								}}
							>
								Contactez-nous
							</a>
						</p>
					</MDBCol>
					<hr className='w-100 clearfix d-md-none' />
					<MDBCol md='4' lg='3' xl='3' className='mx-auto mt-3'>
						<h6 className='text-uppercase mb-4 font-weight-bold'>Contactez</h6>
						<p>
							<i className='fa fa-home mr-3' /> Sheraton Heliopolis- Égypte
						</p>
						<p>
							<i className='fa fa-envelope mr-3' /> info@alhikmaeg.com
						</p>
						{/* <p>
							<i className='fa fa-phone mr-3' /> + 01 234 567 88
						</p>
						<p>
							<i className='fa fa-print mr-3' /> + 01 234 567 89
						</p> */}
					</MDBCol>
				</MDBRow>
				<hr />
				<MDBRow className='d-flex align-items-center'>
					<MDBCol md='8' lg='8'>
						<p className='text-center text-md-left black-text'>
							&copy; {new Date().getFullYear()} Copyright:{' '}
							<a
								href='https://www.alhikmaeg.com'
								className='text-center text-md-left black-text'
							>
								{' '}
								ALHIKMA.com{' '}
							</a>
						</p>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		</MDBFooter>
	)
}

export default FooterFR
