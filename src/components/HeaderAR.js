import React from 'react'

import { NavLink, Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'

import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { COLORS } from './Colors'
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme } from "@material-ui/core/styles"
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import logo from '../Logo2.png'

import 'bootstrap/dist/css/bootstrap.min.css'
const useStyles = makeStyles((theme) => ({
	backgroundContainer: {
		background: '#14a109',
		//#80C721
		//#62A83D
		opacity: '80%',
		top: '0',
		padding: '0.75rem 2rem',
  		left: '0',
		zIndex: '1',
		position: 'sticky',
		width:'100%'
	},
	backgroundContainersmall: {
		background: '#14a109',
		//#80C721
		//#62A83D
		opacity: '80%',
		top: '0',
		padding: '0.75rem 2rem',
  		left: '0',
		zIndex: '1',
		position: 'sticky',
		width:'100%'
	},
	meliorLogo: {
		width: 180,
		marginLeft: '2%',
	},
}))

function HeaderAR() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
  
	const handleClick = (event) => {
	  setAnchorEl(event.currentTarget);
	};
  
	const handleClose = () => {
	  setAnchorEl(null);
	};
  
	const classes = useStyles()
	const theme = useTheme()
	const matches = useMediaQuery(theme.breakpoints.up("md"))
	const options = [
		'Home',
		'Vegetables',
		'Fruits',
		'Calender',
		
		
	  ];
	  const ITEM_HEIGHT = 48;
	return (
		
		<Container maxWidth='xl' className={classes.backgroundContainer}>
			{matches?(<Navbar>
				<Navbar.Brand href='#home' style={{ color: 'white',width:'15%' }}>
					<img src={logo} style={{    width: 200,marginLeft: "2%", }} />
				</Navbar.Brand>

				<Nav className='justify-content-end' style={{ paddingLeft: '53%',width:'80%' }}>
					<Nav.Link id='nav-dropdown' href='#home' style={{ color: 'white'}}>
						الرئيسية
					</Nav.Link>
					<NavDropdown title={'منتاجتنا'} id='nav-dropdown' >
						<NavDropdown.Item href='#action/3.1'>الخضراوات</NavDropdown.Item>
						<NavDropdown.Item href='#action/3.2'>الفاكهة</NavDropdown.Item>
					</NavDropdown>
					<Nav.Link id='nav-dropdown' href='#home' style={{ color: 'white' }}>
						الأجندة
					</Nav.Link>
					<Nav.Link
						id='nav-dropdown'
						href='#contactus'
						style={{ color: 'white'}}
					>
						اتصل بنا
					</Nav.Link>
				</Nav>
			</Navbar>
):
(<Navbar style={{marginLeft:'-50px'}}>
	<Navbar.Brand href='#home' style={{ color: 'white',width:'15%',marginLeft:0}}>
		<img src={logo} style={{width: '150px' }} />
	</Navbar.Brand>
	<Nav  style={{paddingLeft:'80%' }}>
				
	<IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
		onClick={handleClick}
		
		style={{color:'white'}}
		
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
		id="long-menu"
		
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
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
	  </Nav>
</Navbar>
)}
					</Container>
	)
}

export default HeaderAR
