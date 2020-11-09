import React from 'react'

import { NavLink, Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'

import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { COLORS } from './Colors'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MoreVertIcon from '@material-ui/icons/MoreVert'
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
		// opacity: '80%',
		top: '0',
		left: '0',
		zIndex: '1',
		position: 'sticky',
		width: '100%',
	},
	backgroundContainersmall: {
		background: '#14a109',
		//#80C721
		//#62A83D
		// opacity: '80%',
		top: '0',
		left: '0',
		zIndex: '1',
		position: 'sticky',
		width: '100%',
	},
	meliorLogo: {
		width: 180,
		marginLeft: '2%',
	},
}))

function HeaderAR(props) {
	const [anchorEl, setAnchorEl] = React.useState(null)
	const open = Boolean(anchorEl)

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const classes = useStyles()
	const theme = useTheme()
	const matches = useMediaQuery(theme.breakpoints.up('md'))
	const options = ['Home', 'Vegetables', 'Fruits', 'Calender']
	const ITEM_HEIGHT = 48
	const homee = () => {
		props.setHome(true)
		props.setCalender(false)
		props.setContact(false)
	}
	return (
		<div
			style={{
				background: '#14a109',
				//#80C721
				//#62A83D
				//opacity: '80%',
				top: '0',
				left: '0',
				zIndex: '1',
				position: 'sticky',
				width: '100%',
			}}
		>
			{matches ? (
				<Navbar>
					<Navbar.Brand
						onClick={() => {
							props.setHome(true)
							props.setCalender(false)
							props.setContact(false)
							props.setAbout(false)
						}}
						style={{ color: 'white', width: '15%', height: '60px' }}
					>
						<img src={logo} style={{ width: 200, marginLeft: '2%' }} />
					</Navbar.Brand>

					<Nav
						className='justify-content-end'
						style={{ paddingLeft: '40%', width: '80%' }}
					>
						<Nav.Link
							id='nav-dropdown'
							onClick={() => {
								props.setHome(true)
								props.setCalender(false)
								props.setContact(false)
								props.setAbout(false)
							}}
							style={{ color: 'white' }}
						>
							الرئيسية
						</Nav.Link>
						<NavDropdown title={'منتاجتنا'} id='nav-dropdown'>
							<NavDropdown.Item
								onClick={props.home ? props.executeScroll : homee}
							>
								الخضراوات
							</NavDropdown.Item>
							<NavDropdown.Item
								onClick={props.home ? props.executeScroll2 : homee}
							>
								الفاكهة
							</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link
							id='nav-dropdown'
							onClick={() => {
								props.setHome(false)
								props.setCalender(true)
								props.setContact(false)
								props.setAbout(false)
							}}
							style={{ color: 'white' }}
						>
							الأجندة
						</Nav.Link>
						<Nav.Link
							id='nav-dropdown'
							onClick={() => {
								props.setHome(false)
								props.setCalender(false)
								props.setContact(true)
								props.setAbout(false)
							}}
							style={{ color: 'white' }}
						>
							اتصل بنا
						</Nav.Link>
						<Nav.Link id='nav-dropdown' href='en' style={{ color: 'white' }}>
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
						<Nav.Link id='nav-dropdown' href='fr' style={{ color: 'white' }}>
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
						<Nav.Link
							id='nav-dropdown'
							onClick={() => {
								props.setHome(false)
								props.setCalender(false)
								props.setContact(false)
								props.setAbout(true)
							}}
							style={{ color: 'white' }}
						>
							<i class='fas fa-question' style={{ transform: 'scaleX(-1)' }} />
						</Nav.Link>
					</Nav>
				</Navbar>
			) : (
				<Navbar style={{ marginLeft: '-50px' }}>
					<Navbar.Brand
						href='#home'
						style={{ color: 'white', width: '15%', marginLeft: 0 }}
					>
						<img src={logo} style={{ width: '150px' }} />
					</Navbar.Brand>
					<Nav style={{ paddingLeft: '80%' }}>
						<IconButton
							aria-label='more'
							aria-controls='long-menu'
							aria-haspopup='true'
							onClick={handleClick}
							style={{ color: 'white' }}
						>
							<MoreVertIcon />
						</IconButton>
						<Menu
							id='long-menu'
							anchorEl={anchorEl}
							keepMounted
							open={open}
							onClose={handleClose}
							PaperProps={{
								style: {
									maxHeight: ITEM_HEIGHT * 4.5,
									width: '20ch',
								},
							}}
						>
							{options.map((option) => (
								<MenuItem
									key={option}
									selected={option === 'Pyxis'}
									onClick={handleClose}
								>
									{option}
								</MenuItem>
							))}
						</Menu>
					</Nav>
				</Navbar>
			)}
		</div>
	)
}

export default HeaderAR
