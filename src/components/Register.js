import React, { useState, useContext, useEffect } from 'react'

import { Redirect, BrowserRouter, Route } from 'react-router-dom'
import Header from './header.js';
import { COLORS } from './Colors'

import Logo from '../Logo.png'
// import jwt from "jwt-decode"
import Container from '@material-ui/core/Container'
import './Slider.css';
import './Style.css';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	backgroundContainer: {
	  background: COLORS.brightBlack,
	  padding: "10px 0px",
	  top: "0",
	  zIndex: "1",
	  maxHeight: "90px",
	  minHeight: "70px",
	  position: "sticky",
	},
	meliorLogo: {
	  width: 180,
	  marginLeft: "2%",
	},
  }))	

const Register = () => {
	const classes = useStyles()
	const [loading, setLoading] = useState(false)

	const [username, setUsername] = useState('')
	const content = [
		{
			title: 'Vulputate Mollis Ultricies Fermentum Parturient',
			description:
			'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
			button: 'Read More',
			image: 'https://i.imgur.com/ZXBtVw7.jpg',
			user: 'Luan Gjokaj',
			userProfile: 'https://i.imgur.com/JSW6mEk.png'
		},
		{
			title: 'Tortor Dapibus Commodo Aenean Quam',
			description:
			'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
			button: 'Discover',
			image: 'https://i.imgur.com/DCdBXcq.jpg',
			user: 'Erich Behrens',
			userProfile: 'https://i.imgur.com/0Clfnu7.png'
		},
		{
			title: 'Phasellus volutpat metus',
			description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
			button: 'Buy now',
			image: 'https://i.imgur.com/DvmN8Hx.jpg',
			user: 'Bruno Vizovskyy',
			userProfile: 'https://i.imgur.com/4KeKvtH.png'
		}
	]

	const SignupPage = () => (
		<Container maxWidth='xl' style={{ minHeight: '100vh' }}>
			{/* Logo */}
			
		</Container>
	)

	return (
		<div>
		<div>
		
		<Slider className="slider-wrapper"
		 autoplay= "800">
			{content.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('${item.image}') no-repeat center center` }}
				>
					<div className="inner">
						<h1>{item.title}</h1>
						<p>{item.description}</p>
						<button>{item.button}</button>
					</div>
					<section>
						<img src={item.userProfile} alt={item.user} />
						<span>
							Posted by <strong>{item.user}</strong>
						</span>
					</section>
				</div>
			))}
		</Slider>
		</div>
		</div>
	)
}

export default Register
