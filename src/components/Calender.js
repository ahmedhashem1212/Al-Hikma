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
function Calender() {
	const theme = useTheme()
	const matches = useMediaQuery(theme.breakpoints.up('md'))
	const classes = useStyles()
	return (
		<Container>
			<div>
				{matches ? (
					<h1
						style={{
							paddingLeft: '15rem',
							paddingTop: '3rem',
						}}
					>
						Calender
					</h1>
				) : (
					<h1
						style={{
							paddingLeft: '5rem',
							paddingTop: '3rem',
							fontSize: '20px',
						}}
					>
						Calender
					</h1>
				)}

				<div
					style={{
						backgroundColor: '#4ed715',
						height: '3px',
						width: '50px',
						marginLeft: '20%',
					}}
				></div>
			</div>
			{matches ? (
				<img
					src={calender}
					style={{
						marginTop: 0,
						paddingLeft: '15px',
						width: '1200px',
					}}
				/>
			) : (
				<img
					src={calender}
					style={{
						marginTop: 0,
						paddingLeft: '15%',
						width: '90%',
					}}
				/>
			)}
		</Container>
	)
}

export default Calender
