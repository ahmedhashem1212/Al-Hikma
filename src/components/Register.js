import React, { useState, useContext, useEffect } from 'react'

import { Redirect, BrowserRouter, Route } from 'react-router-dom'

import { COLORS } from './Colors'
import { NavLink, Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Logo from '../Logo.png'
// import jwt from "jwt-decode"
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { CircularProgress } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'
import axios from 'axios'
import { grey } from '@material-ui/core/colors'
import MenuItem from '@material-ui/core/MenuItem'

const useStyles = makeStyles((theme) => ({
	backgroundContainer: {
		backgroundColor: COLORS.white,
	},
	loginButton: {
		margin: '18px 0px 15px 0px',
		fontSize: '20px',
		background: '#da1f27',
		fontFamily: 'Avenir-Heavy',
		color: COLORS.white,
		width: '35%',
		textTransform: 'none',
		borderRadius: '10px',
		height: '30%',
		'&:disabled': {
			backgroundColor: '#da1f27',
			color: COLORS.greyDisabled,
		},
		'&:hover': {
			background: '#da1f27',
			color: COLORS.white,
		},
	},
	addButton: {
		margin: '18px 0px 15px 0px',
		fontSize: '15px',
		background: '#da1f27',
		fontFamily: 'Avenir-Heavy',
		color: COLORS.white,
		width: '15%',
		textTransform: 'none',
		borderRadius: '10px',
		height: '10%',
		'&:disabled': {
			backgroundColor: '#da1f27',
			color: COLORS.greyDisabled,
		},
		'&:hover': {
			background: '#da1f27',
			color: COLORS.white,
		},
	},
	addButton2: {
		margin: '18px 0px 15px 0px',
		fontSize: '15px',
		background: '#da1f27',
		fontFamily: 'Avenir-Heavy',
		color: COLORS.white,
		width: '17%',
		textTransform: 'none',
		borderRadius: '10px',
		height: '10%',
		'&:disabled': {
			backgroundColor: '#da1f27',
			color: COLORS.greyDisabled,
		},
		'&:hover': {
			background: '#da1f27',
			color: COLORS.white,
		},
	},

	textField: {
		backgroundColor: COLORS.white,
		marginTop: '18px',
		fontSize: 20,
		width: '90%',
		height: '35px',

		borderRadius: '10px',
		'& .MuiOutlinedInput-root': {
			'&.Mui-focused fieldset': {
				borderColor: '#da1f27',
				borderWidth: '2.5px',
				borderRadius: '10px',
			},
		},
	},
	textField1: {
		backgroundColor: COLORS.white,
		marginTop: '18px',
		fontSize: 20,
		width: '50%',
		height: '35px',

		borderRadius: '10px',
		'& .MuiOutlinedInput-root': {
			'&.Mui-focused fieldset': {
				borderColor: '#da1f27',
				borderWidth: '2.5px',
				borderRadius: '10px',
			},
		},
	},

	textFieldPassword: {
		height: '35px',
		backgroundColor: COLORS.white,
		fontSize: 20,
		width: '75%',
		marginLeft: '5%',
		borderRadius: '10px',
		'& .MuiOutlinedInput-root': {
			'&.Mui-focused fieldset': {
				borderColor: '#da1f27',
				borderWidth: '2.5px',
				borderRadius: '10px',
			},
		},
	},
	textFieldPassword2: {
		height: '35px',
		backgroundColor: COLORS.white,
		fontSize: 20,
		width: '72%',
		marginLeft: '5%',
		borderRadius: '10px',
		'& .MuiOutlinedInput-root': {
			'&.Mui-focused fieldset': {
				borderColor: '#da1f27',
				borderWidth: '2.5px',
				borderRadius: '10px',
			},
		},
	},
	resizeFont: {
		fontFamily: 'Avenir-Medium',

		fontSize: '14px',
		padding: '10px',
	},

	headers: {
		color: COLORS.black,
		marginBottom: '0px',
		paddingBottom: '0px',
		fontFamily: 'Avenir-Heavy',
		fontWeight: 'heavy',
		marginLeft: '5%',
		fontSize: '22px',
	},
	headers1: {
		color: COLORS.black,
		marginBottom: '0px',
		paddingBottom: '0px',
		fontFamily: 'Avenir-Heavy',
		fontWeight: 'heavy',
		marginLeft: '0%',
		fontSize: '22px',
	},
	meliorLogo: {
		width: '90%',
		height: '80px',
		margin: '25px 0px',
	},
	circularProgress: {
		color: COLORS.white,
		width: '20px',
		maxWidth: '20px',
		maxHeight: '20px',
		height: '20px',
	},
	uploadLogo: {
		fontSize: '16px',
		background: '#da1f27',
		fontWeight: 'normal',
		color: COLORS.black,
		textTransform: 'none',
		borderRadius: '10px',
		marginTop: '10px',
		textAlign: 'center',
	},
	input: {
		display: 'none',
	},
	note: {
		fontSize: '12px',
		fontWeight: 'normal',
		color: COLORS.white,
		textTransform: 'none',
	},
}))

const Register = () => {
	const classes = useStyles()
	const [facilityName, setFacilityName] = useState('')
	const [loading, setLoading] = useState(false)
	const [loadingSecond, setLoadingSecond] = useState(false)
	const [signupError, setSignupError] = useState({
		error: false,
		message: '',
	})

	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [address, setAddress] = useState('')
	const [phoneNumber, setPhoneNumber] = useState('')
	const [fatherNumber, setFatherNumber] = useState('')
	const [token, setToken] = useState('')

	const [inputList, setInputList] = useState([
		{ material: '', teacherName: '' },
	])

	const materials = [
		{
			subject: 'لغة انجليزية',
			teachers: ['حسن الجبالي', 'اشرف حلمى ', 'نبيل بكير', 'خالد علي'],
		},
		{
			subject: 'لغة فرنسية',
			teachers: ['حسين ابو العنين', 'يعقوب'],
		},
		{
			subject: 'كمياء',
			teachers: ['رمضان غلاب'],
		},
		{
			subject: 'فلسفة وعلم نفس',
			teachers: ['سيد العراقي', 'علي صلاح', 'مجدي لوقا', 'ايهاب السعدني'],
		},
		{
			subject: 'لغة عربية',
			teachers: ['احمد نور السكندري', 'طارق أدريس', 'مصطفي فريد'],
		},
		{
			subject: 'رياضيات',
			teachers: ['وائل بدوي', 'محمد الدميني'],
		},
		{
			subject: 'جيولوجيا',
			teachers: ['منال وديع'],
		},
		{
			subject: 'تاريخ',
			teachers: ['محمد السيد', 'علاء العراقي'],
		},
		{
			subject: 'جغرافيا',
			teachers: ['محمد ابو رية', 'ايمن ماضي'],
		},
		{
			subject: 'لغة المانية',
			teachers: ['عبد المعز', 'احمد غيث', 'خالد الفقي'],
		},
		{
			subject: 'احياء',
			teachers: ['حسن محرم'],
		},
		{
			subject: 'Physics',
			teachers: ['محمد سمير مجلي', 'احمد سمير مجلي', 'احمد سمير'],
		},
		{
			subject: 'Maths',
			teachers: ['محمد رياض', 'علاء الفقي'],
		},
		{
			subject: 'Chemistry',
			teachers: ['خالد نصر', 'خالد سعد'],
		},
		{
			subject: 'Biology',
			teachers: ['مينا حنا'],
		},
	]
	const handleSubmit = async (s) => {
		// e.preventDefault()
		const teachers = []
		const subjects = []
		inputList.filter((x) => {
			teachers.push(x.teacherName)
			subjects.push(x.material)
		})
		axios({
			method: 'post',
			url: `https://backend1245.herokuapp.com/api/users/createUser`,
			data: {
				email: email,
				name: username,
				mobileNumber: phoneNumber,
				parentNumber: fatherNumber,
				residence: address,
				subjects: subjects,
				teacherNames: teachers,
			},
		})
			.then(async (res) => {
				setEmail('')
				setUsername('')
				setPhoneNumber('')
				setFatherNumber('')
				setAddress('')
				for (let j = 0; j < teachers.length; j++) handleRemoveClick()
				setInputList([{ material: '', teacherName: '' }])
				alert('تم التسجيل بنجاح')
			})

			.catch((e) => {
				alert(e.response.data.msg)
			})
	}

	const handleInputChange = (e, index) => {
		const { name, value } = e.target
		const list = [...inputList]
		list[index][name] = value
		setInputList(list)
	}

	// handle click event of the Remove button
	const handleRemoveClick = (index) => {
		const list = [...inputList]
		// list.splice(index, 1);
		list.pop()
		setInputList(list)
	}

	// handle click event of the Add button
	const handleAddClick = () => {
		setInputList([...inputList, { firstName: '', lastName: '' }])
	}

	const SignupPage = () => (
		<Container maxWidth='xl' style={{ minHeight: '100vh' }}>
			{/* Logo */}
			<Grid
				container
				justify='center'
				direction='column'
				alignItems='flex-start'
				style={{ minHeight: '100vh' }}
			>
				<Grid container direction='column' justify='center' alignItems='center'>
					<img
						className={classes.Logo}
						src={Logo}
						alt='Logo'
						style={{ marginLeft: '-90px' }}
					/>
				</Grid>

				{/* Form */}

				<Grid container justify='space-around' direction='row'>
					{/* Username Label */}

					<Grid
						container
						direction='column'
						justify='flex-start'
						alignItems='center'
					>
						<h2 className={classes.headers1}>اسم الطالب</h2>

						{/* Username TextField */}

						<TextField
							autoFocus
							className={classes.textField1}
							InputProps={{ classes: { input: classes.resizeFont } }}
							id='username'
							type='username'
							variant='outlined'
							placeholder='اسم الطالب'
							fullWidth
							onChange={(e) => {
								setUsername(e.target.value)
							}}
							value={username}
						/>
					</Grid>
					<Grid
						style={{ display: 'block' }}
						item
						xs={11}
						md={5}
						lg={5}
						container
						justify='flex-start'
						direction='column'
						alignItems='flex-start'
					>
						<h2 className={classes.headers}>محل الاقامة</h2>

						<Grid
							container
							direction='column'
							justify='flex-start'
							alignItems='center'
						>
							<TextField
								className={classes.textField}
								InputProps={{ classes: { input: classes.resizeFont } }}
								id='address'
								type='text'
								variant='outlined'
								placeholder='محل الاقامة '
								fullWidth
								onChange={(e) => {
									setAddress(e.target.value)
								}}
								value={address}
							/>
						</Grid>

						<h2 className={classes.headers}>تليفون ولى الامر</h2>
						<Grid
							container
							direction='column'
							justify='flex-start'
							alignItems='center'
						>
							<TextField
								className={classes.textField}
								InputProps={{ classes: { input: classes.resizeFont } }}
								id='fatherNumber'
								type='tel'
								variant='outlined'
								placeholder='تليفون ولي الامر '
								fullWidth
								onChange={(e) => {
									setFatherNumber(e.target.value)
								}}
								value={fatherNumber}
							/>
						</Grid>

						<h2 className={classes.headers}> اسماء المدرسين </h2>

						<Grid
							container
							direction='row'
							justify='flex-start'
							alignItems='center'
							style={{
								marginTop: -5,
								marginBottom: -18,
							}}
						>
							{inputList.map((x, i) => {
								return (
									<Grid
										container
										direction='row'
										justify='flex-start'
										alignItems='center'
										style={{
											marginTop: '10px',
											marginBottom: '10px',
										}}
									>
										<TextField
											className={classes.textFieldPassword2}
											disabled={
												x.material === '' || x.material === undefined
													? true
													: false
											}
											select
											InputProps={{ classes: { input: classes.resizeFont } }}
											id='teacherName'
											variant='outlined'
											name='teacherName'
											placeholder='اسم مدرس لمادة واحده فقط'
											fullWidth
											value={x.teacherName}
											onChange={(e) => handleInputChange(e, i)}
										>
											{console.log(inputList[i].material)}
											{materials.map((option) =>
												option.subject === x.material
													? option.teachers.map((teacher) => (
															<MenuItem key={teacher} value={teacher}>
																{teacher}
															</MenuItem>
													  ))
													: null
											)}
										</TextField>
										{i === 0 && (
											<Button
												style={{
													margin: '10px',
													marginTop: '10px',
												}}
												aria-label='toggle password visibility'
												onClick={() => {
													handleAddClick()
												}}
												variant='contained'
												className={classes.addButton2}
											>
												اضافة مدرس
											</Button>
										)}
										{i !== 0 && i === inputList.length - 1 && (
											<Button
												style={{
													margin: '10px',
													marginTop: '10px',
												}}
												aria-label='toggle password visibility'
												onClick={() => {
													handleRemoveClick()
												}}
												variant='contained'
												className={classes.addButton2}
											>
												ازالة مدرس
											</Button>
										)}
									</Grid>
								)
							})}
							<h6
								style={{
									marginTop: '-2%',
									marginLeft: '25%',
									fontSize: '12px',
									color: COLORS.grey,
								}}
							>
								{'   '} لاضافة مدرس لمادة جديدة الرجاء الضغط على زر
								<span
									style={{
										color: COLORS.failRed,
										fontSize: '12px',
									}}
								>
									{'   '}اضافة مدرس{'   '}
								</span>
								<span
									style={{
										color: COLORS.failRed,
										fontSize: '15px',
									}}
								>
									*
								</span>
							</h6>
						</Grid>
					</Grid>

					<Grid
						style={{ display: 'block' }}
						item
						xs={11}
						md={5}
						lg={5}
						container
						justify='flex-start'
						direction='column'
						alignItems='flex-start'
					>
						<h2 className={classes.headers}>Email</h2>
						<Grid
							container
							direction='column'
							justify='flex-start'
							alignItems='center'
						>
							<TextField
								className={classes.textField}
								InputProps={{ classes: { input: classes.resizeFont } }}
								id='email'
								type='email'
								placeholder='البريد الالكتروني '
								variant='outlined'
								fullWidth
								onChange={(e) => {
									setEmail(e.target.value)
								}}
								value={email}
							/>
						</Grid>

						{/* Retype Password   */}
						<h2 className={classes.headers}> تليفون الطالب </h2>
						<Grid
							container
							direction='column'
							justify='flex-start'
							alignItems='center'
						>
							<TextField
								className={classes.textField}
								InputProps={{ classes: { input: classes.resizeFont } }}
								id='number'
								type='tel'
								variant='outlined'
								placeholder='تليفون الطالب '
								fullWidth
								onChange={(e) => {
									setPhoneNumber(e.target.value)
								}}
								value={phoneNumber}
							/>
						</Grid>
						<h2 className={classes.headers}> المواد المراد حجزها </h2>

						<Grid
							container
							direction='row'
							justify='flex-start'
							alignItems='center'
							style={{
								marginTop: -5,
								marginBottom: -18,
							}}
						>
							{inputList.map((x, i) => {
								return (
									<Grid
										container
										direction='row'
										justify='flex-start'
										alignItems='center'
										style={{
											marginTop: '10px',
											marginBottom: '10px',
										}}
									>
										<TextField
											className={classes.textFieldPassword}
											select
											InputProps={{ classes: { input: classes.resizeFont } }}
											id='material'
											type='text'
											variant='outlined'
											name='material'
											placeholder='اسم مادة واحده فقط'
											fullWidth
											value={x.material}
											onChange={(e) => handleInputChange(e, i)}
										>
											{materials.map((option) => (
												<MenuItem key={option.subject} value={option.subject}>
													{option.subject}
												</MenuItem>
											))}
										</TextField>
										{i === 0 && (
											<Button
												style={{
													margin: '10px',
													marginTop: '10px',
												}}
												aria-label='toggle password visibility'
												onClick={() => {
													handleAddClick()
												}}
												variant='contained'
												className={classes.addButton}
											>
												اضافة مادة
											</Button>
										)}
										{i !== 0 && i === inputList.length - 1 && (
											<Button
												style={{
													margin: '10px',
													marginTop: '10px',
												}}
												aria-label='toggle password visibility'
												onClick={() => {
													handleRemoveClick()
												}}
												variant='contained'
												className={classes.addButton}
											>
												ازالة مادة
											</Button>
										)}
									</Grid>
								)
							})}
							<h6
								style={{
									marginTop: '-2%',
									marginLeft: '36%',
									fontSize: '12px',
									color: COLORS.grey,
								}}
							>
								{'   '} لاضافة مادة جديدة الرجاء الضغط على زر
								<span
									style={{
										color: COLORS.failRed,
										fontSize: '12px',
									}}
								>
									{'   '}اضافة مادة{'   '}
								</span>
								<span
									style={{
										color: COLORS.failRed,
										fontSize: '15px',
									}}
								>
									*
								</span>
							</h6>
						</Grid>
					</Grid>

					<Button
						disabled={!username.trim() | !email.trim() ? true : false}
						type='submit'
						variant='contained'
						className={classes.loginButton}
						onClick={() => {
							handleSubmit()
						}}
					>
						{loadingSecond ? (
							<CircularProgress className={classes.circularProgress} />
						) : (
							'تسجيل'
						)}
					</Button>
				</Grid>
				<h6
					style={{
						marginTop: '0%',
						marginLeft: '37%',
						fontSize: '12px',
						color: COLORS.grey,
					}}
				>
					{'   '} للأسئلة اتصل بنا على
					<span
						style={{
							color: COLORS.failRed,
							fontSize: '12px',
						}}
					>
						{'   '} 01553805112{'   '} - {'   '} 01556492099 {'   '}
					</span>
					<span
						style={{
							color: COLORS.failRed,
							fontSize: '15px',
						}}
					>
						*
					</span>
				</h6>
			</Grid>
		</Container>
	)

	return (
		<Container maxWidth='xl' className={classes.backgroundContainer}>
			{SignupPage()}
		</Container>
	)
}

export default Register
