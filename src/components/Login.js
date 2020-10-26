import React, { useState, useContext, useEffect } from 'react'

import { COLORS } from './Colors'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import Logo from '../Logo.png'
// import { askForPermissioToReceiveNotifications } from "../firebase"
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
// import { AuthenticationContext } from "../contexts/AuthenticationContext"
// import LoadingPage from "./LoadingPage"
import { Modal, Backdrop, Fade, CircularProgress } from '@material-ui/core'
// import DataManipulation from "../helpers/DataManipulation"
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
// import UserErrorSuccessFormDisplay from "./UserErrorSuccessFormDisplay"
import { Redirect } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
	backgroundContainer: {
		backgroundColor: 'white',
		minHeight: '100vh',
		minWidth: '100vw',
	},
	loginButton: {
		margin: '30px 0px 15px 0px',
		fontSize: '25px',
		background: '#da1f27',
		fontFamily: 'Avenir-Heavy',
		color: COLORS.white,
		width: '60%',
		textTransform: 'none',
		borderRadius: '10px',
		height: '50px',
		'&:disabled': {
			backgroundColor: '#da1f27',
			color: COLORS.greyDisabled,
		},
		'&:hover': {
			background: '#da1f27',
			color: COLORS.white,
		},
	},
	forgetPassword: {
		color: '#da1f27',
		textTransform: 'none',
		textDecoration: 'underline',

		fontSize: '20px',
	},
	reset: {
		background: '#da1f27',
		textTransform: 'none',
		color: COLORS.white,
		'&:hover': {
			background: '#da1f27',
		},
	},
	textField: {
		overflow: 'hidden',
		backgroundColor: COLORS.white,
		fontSize: 20,
		width: '90%',
		borderRadius: '10px',
		'& .MuiOutlinedInput-root': {
			'&.Mui-focused fieldset': {
				borderColor: '#da1f27',
				borderWidth: '2px',
				borderRadius: '10px',
			},
		},
	},
	resizeFont: {
		fontFamily: 'Avenir-Medium',
		fontSize: 20,
	},
	smallerFont: {
		fontFamily: 'Avenir-Medium',
		fontSize: '16px',
	},
	headers: {
		color: COLORS.black,
		marginBottom: '0px',
		paddingBottom: '0px',
		fontFamily: 'Avenir-Heavy',

		fontWeight: 'bold',
		// marginLeft: "%",
	},
	logo: {
		width: '10%',
		height: '60px',
		marginLeft: '-100px',
		left: '-100px',
	},
	errorMsg: {
		fontWeight: 'normal',
		textTransform: 'none',
		color: COLORS.failRed,
		fontSize: '16px',
	},
	modalBody: {
		backgroundColor: COLORS.silver,
		height: '100%',
		width: '100%',
		padding: '10px',
		borderRadius: '20px',
		outline: 'none',
	},
	modal: {
		width: '420px',
		height: '320px',
		margin: 'auto',
		textAlign: 'center',
		borderRadius: '20px',
		fontFamily: 'Avenir-Medium',
	},
	circularProgress: {
		color: COLORS.white,
		width: '20px',
		maxWidth: '20px',
		maxHeight: '20px',
		height: '20px',
	},
}))

const Login = () => {
	const classes = useStyles()

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [token, setToken] = useState('')
	const [redirect, setRedirect] = useState(false)
	const handleSubmit = async (e) => {
		e.preventDefault()
		axios({
			method: 'post',
			url: `https://backend1245.herokuapp.com/api/super/login`,
			data: {
				username: username,
				password: password,
			},
		})
			.then(async (res) => {
				// console.log(res)
				setToken(res.data.data.token)
				exportCSV()
			})
			.catch((e) => {
				// console.log(e.response)
				alert(e.response.data.msg)
			})
	}

	const exportCSV = async (e) => {
		//const FileDownload = require("js-file-download");
		axios({
			method: 'get',
			url: `https://backend1245.herokuapp.com/api/super/CSV`,
			headers: {
				Authorization: 'Bearer ' + token,
			},
		})
			.then(async (res) => {
				// console.log(res)
				window.location.replace(
					'https://backend1245.herokuapp.com/api/super/CSV'
				)
				alert('يتم تنزيل الملف')
			})
			.catch((e) => {
				// console.log(e.response)
				// alert(e.response)

				alert(e.response.data.msg)
			})
	}
	const authenticationView = () => (
		/* Centering */
		<Container maxWidth='sm' style={{ minHeight: '100vh' }}>
			<Grid
				container
				justify='center'
				direction='column'
				alignItems='flex-start'
				style={{ minHeight: '100vh' }}
			>
				<img
					className={classes.Logo}
					src={Logo}
					alt='Logo'
					style={{ marginLeft: '-90px' }}
				/>
				{/* Logo */}
				{/* <Logo></Logo> */}
				{/* Form */}
				<form style={{ width: '100%' }} onSubmit={handleSubmit}>
					{/* Username Label */}
					<h2 className={classes.headers}>اسم المستخدم</h2>

					{/* Username TextField */}
					<Grid
						container
						direction='column'
						justify='flex-start'
						alignItems='center'
					>
						<TextField
							autoFocus
							className={classes.textField}
							InputProps={{ classes: { input: classes.resizeFont } }}
							id='username'
							margin='normal'
							variant='outlined'
							fullWidth
							onChange={(e) => {
								setUsername(e.target.value)
							}}
							value={username}
						/>
					</Grid>

					{/* Password Label */}
					<h2 className={classes.headers}>كلمة المرور</h2>

					{/* Password TextField */}
					<Grid
						container
						direction='column'
						justify='flex-start'
						alignItems='center'
					>
						<TextField
							className={classes.textField}
							InputProps={{ classes: { input: classes.resizeFont } }}
							id='password'
							fullWidth
							type='password'
							margin='normal'
							variant='outlined'
							onChange={(e) => {
								setPassword(e.target.value)
							}}
							value={password}
						/>
					</Grid>

					{/* Login Button */}
					<Grid
						container
						direction='column'
						justify='flex-start'
						alignItems='center'
					>
						<Button
							disabled={!username.trim() | !password.trim() ? true : false}
							type='submit'
							variant='contained'
							className={classes.loginButton}
						>
							دخول
						</Button>
						<Button
							onClick={() => {
								setRedirect(true)
							}}
							className={classes.forgetPassword}
						>
							تسجيل كطالب
						</Button>
					</Grid>
				</form>
			</Grid>
		</Container>
	)

	return (
		<Container maxWidth='xl' className={classes.backgroundContainer}>
		</Container>
	)
}

export default Login
