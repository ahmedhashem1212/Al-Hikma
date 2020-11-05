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
		opacity: '80%',
		padding: '10px 0px',
		zIndex: '1',
		position: 'sticky',
	},
}))
function Footer() {
	const classes = useStyles()
	return (
		<MDBFooter
			color='indigo'
			style={{
				marginTop: '10px',
				background: '#14a109',
				opacity: '80%',
			}}
		>
			<MDBContainer>
				<MDBRow className='pt-5 mb-3 text-center d-flex justify-content-center'>
					<MDBCol md='2' className='b-3'>
						<h6 className='title font-weight-bold'>
							<a href='#!'>About us</a>
						</h6>
					</MDBCol>
					<MDBCol md='2' className='b-3'>
						<h6 className='title font-weight-bold'>
							<a href='#!'>Products</a>
						</h6>
					</MDBCol>
					<MDBCol md='2' className='b-3'>
						<h6 className='title font-weight-bold'>
							<a href='#!'>Awards</a>
						</h6>
					</MDBCol>
					<MDBCol md='2' className='b-3'>
						<h6 className='title font-weight-bold'>
							<a href='#!'>Help</a>
						</h6>
					</MDBCol>
					<MDBCol md='2' className='b-3'>
						<h6 className='title font-weight-bold'>
							<a href='#!'>Contact</a>
						</h6>
					</MDBCol>
				</MDBRow>
				<hr className='rgba-white-light' style={{ margin: '0 15%' }} />
				<MDBRow className='d-flex text-center justify-content-center mb-md-0 mb-4'>
					<MDBCol md='8' sm='12' className='mt-5'>
						<p style={{ lineHeight: '1.7rem' }}>
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
							quae ab illo inventore veritatis et quasi architecto beatae vitae
							dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
							aspernatur aut odit aut fugit, sed quia consequuntur.
						</p>
					</MDBCol>
				</MDBRow>
				<hr
					className='clearfix d-md-none rgba-white-light'
					style={{ margin: '10% 15% 5%' }}
				/>
				<MDBRow className='pb-3'>
					<MDBCol md='12'>
						<div className='mb-5 flex-center'>
							<a className='fb-ic'>
								<i className='fab fa-facebook-f fa-lg white-text mr-md-4'> </i>
							</a>
							<a className='tw-ic'>
								<i className='fab fa-twitter fa-lg white-text mr-md-4'> </i>
							</a>
							<a className='gplus-ic'>
								<i className='fab fa-google-plus-g fa-lg white-text mr-md-4'></i>
							</a>
							<a className='li-ic'>
								<i className='fab fa-linkedin-in fa-lg white-text mr-md-4'> </i>
							</a>
							<a className='ins-ic'>
								<i className='fab fa-instagram fa-lg white-text mr-md-4'> </i>
							</a>
							<a className='pin-ic'>
								<i className='fab fa-pinterest fa-lg white-text'> </i>
							</a>
						</div>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
			<div className='footer-copyright text-center py-3'>
				<MDBContainer fluid>
					&copy; {new Date().getFullYear()} Copyright:
					<a href='https://www.MDBootstrap.com'> MDBootstrap.com </a>
				</MDBContainer>
			</div>
		</MDBFooter>
	)
}

export default Footer
