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
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns'
import Grid from '@material-ui/core/Grid'
import CardGroup from 'react-bootstrap/CardGroup'
import potato from '../assets/potato.jpg';
import onion from '../assets/onion2.jpg'
import garlic from '../assets/garlic3.jpg'
import beans from '../assets/beans.jpg'
import capucha from '../assets/capucha.jpg'
import artichoke from '../assets/artichoke.jpg'

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
	const Veg = [

		{
			name:"Potatoes",
			desc:"Potatoes is one of fresh products that Egypt specialized to grow, packing and export for many regions in the world. Spunta is a very conventional and well-known potato, suitable for production in many climates. Spunta potatoes are yellow fleshed, and make fantastic potato salads. They are also great steamed or boiled.",
			type:"Spunta",
			Packing:"yellow bag 10 /25 Kg",
			src:potato
		},
		{
			name:"Onions",
			desc:"One of top three exporting products from Egypt, for many regions in the world. We have the red onions and brown onions.",
				type:"red onions-brown onions",
			Packing:"red bag 10 /25 Kg",
			src:onion
		},
		{
			name:"Garlic",
			desc:"In Egypt, garlic is strong competitive in the international market in compare with other countries.it has begun to be exported to countries worldwide, the Egyptian garlic is an excellent source of vitamins C and B6, selenium, and manganese, and also contains some fiber, phosphorus, potassium, calcium, iron, and copper. ",
			type:"fresh garlic",
			Packing:"carton-bag 5Kg",
			src:garlic
		},
		{
			name:"Green beans",
			desc:"Green beans are eaten around the world, and are sold fresh and frozen. They can be eaten raw or steamed, boiled, stir-fried, or baked. We export the Egyptian green beans for several country with good quality and packing.",
			type:"Fresh green beans",
			Packing:"carton 5/8Kg",
			src:beans
		},
		{
			name:"Iceberg lettuce (Capucha)",
			desc:"Iceberg lettuce provides significant amounts of vitamins A and K. It also has small amounts of many other healthy nutrients. Although it’s low in fiber, it has a high water content, making it a refreshing choice during hot weather. It also provides calcium, potassium, vitamin C, and folate.",
			type:"Iceberg lettuce ",
			Packing:"carton-plastic box 7/8 kg",
			src:capucha
		},
		{
			name:"Artichoke",
			desc:"Artichokes are rich in fiber, vitamins, minerals, and antioxidants. Particularly high in folate and vitamins C and K, they also supply important minerals, such as magnesium, phosphorus, potassium, and iron. The Egyptian artichoke has 2 famous varieties: the local artichoke and the French artichoke",
			type:"Local artichoke and the French artichoke ",
			Packing:"plastic box -carton 4.5/ 5 kg",
			src:artichoke
		},
		
		
	]
	
	
	
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
		<Container maxWidth='xl' style={{ minHeight: '100vh', paddingTop:"100px" }}>
			{/* Logo */}
			
		</Container>
	)

	return (
		<div >
		
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
		<div>
			<div>
				<h1 style={{paddingLeft:'230px', paddingTop:'50px'}}>Vegetables</h1>
				
				<div style={{
					backgroundColor:'#4ed715', height:'3px', width:'50px',marginLeft:'230px'
				}}></div>
			</div>
		<Grid
				container
				direction='column'
				alignItems='flex-start'
				style={{ paddingTop:'50px', paddingRight:"230px", paddingLeft:"230px"
				,height:"2000px" }}
				spacing={5}
				
			>
				
		{/* <CardDeck> */}
			{Veg.map((item)=>(

<Grid item xs={4} spacing={5}> 
<Card style={{
	width:"350px",
}}>
  <Card.Img variant="top" src={item.src} style={{
	  height:"200px"
  }} />
  <Card.Body style={{
	//   opacity:'80%',
	// backgroundColor:'#4ed715'
  }}>
	<Card.Title style={{ color:'black', fontWeight:'bold', fontFamily:'Trebuchet-MS' }}>{item.name}</Card.Title>
	<Card.Text style={{ color:'black', fontFamily:'Trebuchet-MS'}}>
	 {item.desc}
	 </Card.Text>
  </Card.Body>
  <Card.Footer>
  <Card.Title style={{fontSize:"20px", color:'green',fontFamily:'Trebuchet-MS'}}>Type</Card.Title>
	<Card.Text>
	 {item.type}
	 </Card.Text>
	 <Card.Title style={{fontSize:"20px", color:'green',fontFamily:'Raleway'}}>Packing</Card.Title>
	<Card.Text>
	 {item.Packing}
	 </Card.Text>

  </Card.Footer>
</Card>
</Grid>
			))}


</Grid>
</div>
		</div>
	)
}

export default Register
