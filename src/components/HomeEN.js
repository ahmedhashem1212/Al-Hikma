import React, { useState, useContext, useEffect, useRef } from 'react'

import { Redirect, BrowserRouter, Route } from 'react-router-dom'
import Header from './header.js'
import { COLORS } from './Colors'

import Logo from '../Logo.png'
// import jwt from "jwt-decode"
import Container from '@material-ui/core/Container'
import './Slider.css'
import './Style.css'
import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css'
import { makeStyles } from '@material-ui/core/styles'
import Card from 'react-bootstrap/Card'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Grid from '@material-ui/core/Grid'
import CardGroup from 'react-bootstrap/CardGroup'
import potato from '../assets/potato.jpg'
import onion from '../assets/onion2.jpg'
import garlic from '../assets/garlic3.jpg'
import beans from '../assets/beans.jpg'
import capucha from '../assets/capucha.jpg'
import artichoke from '../assets/artichoke.jpg'
import orange from '../assets/Oranges4.jpg'
import lemon from '../assets/Lemon.jpg'
import grapes from '../assets/Grapes2.jpg'
import pomegranate from '../assets/Pomegranate.jpg'
import watermelons from '../assets/Watermelons.jpg'
import fruits from '../assets/fruits.jpg'
import fruits2 from '../assets/fruits2.jpg'
import { useTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import {
	MDBBtn,
	MDBCard,
	MDBCardBody,
	MDBCardImage,
	MDBCardTitle,
	MDBCardText,
	MDBRow,
	MDBCol,
	MDBView,
	MDBIcon,
} from 'mdbreact'

const useStyles = makeStyles((theme) => ({
	backgroundContainer: {
		background: COLORS.brightBlack,
		padding: '10px 0px',
		top: '0',
		zIndex: '1',
		maxHeight: '90px',
		minHeight: '70px',
		position: 'sticky',
	},
	footer: {
		backgroundColor: '#839184',
		// marginTop: theme.spacing(8),
		padding: theme.spacing(6, 0),
		height: '20px',
	},
	meliorLogo: {
		width: 180,
		marginLeft: '2%',
	},
}))

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

const HomeEN = (props) => {
	const theme = useTheme()
	const matches = useMediaQuery(theme.breakpoints.up('md'))
	const classes = useStyles()
	const Veg = [
		{
			name: 'Potatoes',
			desc:
				'Potatoes is one of fresh products that Egypt specialized to grow, packing and export for many regions in the world.\n Spunta is a very conventional and well-known potato, suitable for production in many climates.\n Spunta potatoes are yellow fleshed, and make fantastic potato salads.',
			type: 'Spunta',
			Packing: 'Yellow Bag 10 /25 Kg',
			src: potato,
		},
		{
			name: 'Iceberg lettuce (Capucha)',
			desc:
				'Iceberg lettuce provides significant amounts of vitamins A and K. It also has small amounts of many other healthy nutrients. Although it’s low in fiber, it has a high water content, making it a refreshing choice during hot weather. It also provides calcium, potassium, vitamin C, and folate.',
			type: 'Iceberg lettuce ',
			Packing: 'Carton-plastic box 7/8 kg',
			src: capucha,
		},

		{
			name: 'Garlic',
			desc:
				' In Egypt, garlic is strong competitive in the international market in compare with other countries.it has begun to be exported to countries worldwide, the Egyptian garlic is an excellent source of vitamins C and B6, and manganese, and also contains some fiber, phosphorus, potassium, calcium and iron.',
			type: 'Fresh Garlic',
			Packing: 'Carton-bag 5Kg',
			src: garlic,
		},
		{
			name: 'Green beans',
			desc:
				'Green beans can be eaten raw or steamed, boiled, stir-fried, or baked. We export the Egyptian green beans for several country such as France and Belgium with good quality and packing. ',
			type: 'Fresh Green Beans',
			Packing: 'Carton 5/8Kg',
			src: beans,
		},
		{
			name: 'Onions',
			desc:
				'One of top three exporting products from Egypt, for many regions in the world. We export two types of onions.',
			type: 'Red Onions - Brown Onions',
			Packing: 'Red bag 10 /25 Kg',
			src: onion,
		},

		{
			name: 'Artichoke',
			desc:
				'Artichokes are rich in fiber, vitamins, minerals, and antioxidants. Particularly high in folate and vitamins C and K, they also supply important minerals, such as magnesium, phosphorus, potassium, and iron. The Egyptian artichoke has two famous types are Local artichoke and the French artichoke.',
			type: 'Local artichoke and the French artichoke ',
			Packing: 'Plastic Box-carton 4.5/ 5 kg',
			src: artichoke,
		},
	]
	const Fruits = [
		{
			name: 'Grapes',
			desc:
				'Grapes are a good source of fiber, potassium, and a range of vitamins and other minerals. We export three famous varieties of the Egyptian grapes.',
			type: 'Flame-Superior-Crimson',
			Packing: 'Plastic Box-carton 5 kg',
			src: grapes,
		},
		{
			name: 'Lemons',
			desc:
				'Lemons are a type of yellow-skinned citrus fruits that grow on the lemon tree. All types of lemons are known for their acidic. Lemon is the champion fruit in Vitamin C.',
			type: 'Adalia Lemon',
			Packing: 'Plastic Box-carton 15 kg',
			src: lemon,
		},

		{
			name: 'Pomegranate',
			desc:
				'Pomegranates are among the healthiest fruits on Earth. They contain a range of beneficial plant. Pomegranates are a source of Fiber, Vitamin B, Vitamin C, Vitamin K and Potassium.',
			type: 'Wonderful',
			Packing: 'Carton 4/5 kg',
			src: pomegranate,
		},
		{
			name: 'Watermelons',
			desc:
				'Generally, watermelon has a high water content.  As far as fruits go, watermelon is one of the lowest in calories. The main exporting type for the watermelon in Egypt is Skata.',
			type: 'Skata',
			Packing: 'carton 20 kg',
			src: watermelons,
		},
		{
			name: 'Oranges',
			desc:
				'There are many orange varieties in the market but there are two cultivars that top all the charts: the sweet snacking Navel Orange and the refreshingly juicy Valencia Orange. Valencia oranges are juicy and have the perfect ratio of sweet-tart flavor making them great juicing oranges. Navels are deliciously sweet oranges with less tang than Valencia oranges.',
			type: 'Valencia-Navel',
			Packing: 'Carton 15 kg',
			src: orange,
		},
	]

	const content = [
		{
			title: 'AL HIKMA For Export ',
			description:
				'Al Hikma for export is an Egyptian company established in 1991 for exporting quality vegetables and fruits. At Al Hikma, you will find a team of highly skilled professionals in the field of fruits and vegetables supply and logistics.',
			button: 'Learn more',
			image: fruits,
		},
		{
			title: 'Work In Several Vegetables and Fruits',
			description:
				'Our company aims to provide good quality oriented to valued customers',
			button: 'See our Products',
			image: fruits2,
		},
	]

	const SignupPage = () => (
		<Container
			maxWidth='xl'
			style={{ minHeight: '100vh', paddingTop: '100px' }}
		>
			{/* Logo */}
		</Container>
	)

	return (
		<div>
			<Slider className='slider-wrapper' autoplay='800'>
				{content.map((item, index) => (
					<div
						key={index}
						className='slider-content'
						// style={{ background: `url('${item.image}') no-repeat center center` }}
					>
						{/* <Card.Img variant="top" src={item.image}  /> */}
						<img
							src={item.image}
							style={{ height: '500px', width: '1000px' }}
						/>
						<div className='inner'>
							<h1>{item.title}</h1>
							<p>{item.description}</p>
							<button onClick={props.executeScroll}>{item.button}</button>
						</div>
					</div>
				))}
			</Slider>
			{matches ? (
				<div ref={props.myRef}>
					<div>
						<div>
							<h1 style={{ paddingLeft: '15rem', paddingTop: '5rem' }}>
								Vegetables
							</h1>

							<div
								style={{
									backgroundColor: '#4ed715',
									height: '3px',
									width: '50px',
									marginLeft: '15rem',
								}}
							></div>
						</div>
						<Grid
							container
							justify='flex-start'
							direction='row'
							alignItems='flex-start'
							style={{
								paddingTop: '5rem',
								paddingLeft: '15rem',
								paddingRight: '10rem',

								width: '100%',
							}}
						>
							{Veg.map((item) => (
								<Grid item xs={4}>
									<MDBCard
										style={{
											width: '95%',
											padding: '0px 0px 0px 0px',
											marginBottom: '2%',
										}}
									>
										<MDBCardImage
											top
											src={item.src}
											overlay='white-slight'
											hover
											waves
											alt='MDBCard image cap'
											style={{
												height: '200px',
											}}
										/>
										<MDBCardBody>
											<a
												href='#!'
												className='activator waves-effect waves-light mr-4'
											></a>
											<MDBCardTitle>{item.name}</MDBCardTitle>
											<hr />
											<MDBCardText>{item.desc}</MDBCardText>
											<hr />
											<h5 className='indigo-text'>
												<medium
													style={{ fontSize: '17.5px', color: '#14a109' }}
												>
													Type: {'  '}
												</medium>
												<h7 style={{ fontSize: '17.5px', color: '#000000' }}>
													{item.type}
												</h7>
											</h5>
											<h5 className='indigo-text'>
												<medium
													style={{ fontSize: '17.5px', color: '#14a109' }}
												>
													Packing: {'  '}
												</medium>
												<h7 style={{ fontSize: '17.5px', color: '#000000' }}>
													{item.Packing}
												</h7>
											</h5>
										</MDBCardBody>
									</MDBCard>

									{/* 		
									// <Card
									// 	style={{
									// 		width: '95%',
									// 		padding: '0px 0px 0px 0px',
									// 	}}
									// >
									// 	<Card.Img
									// 		variant='top'
									// 		src={item.src}
									// 		style={{
									// 			height: '200px',
									// 		}}
									// 	/>
									// 	<Card.Body style={{}}>
									// 		<Card.Title
									// 			style={{
									// 				color: 'black',
									// 				fontWeight: 'bold',
									// 				fontFamily: 'Trebuchet-MS',
									// 			}}
									// 		>
									// 			{item.name}
									// 		</Card.Title>
									// 		<Card.Text
									// 			style={{ color: 'black', fontFamily: 'Trebuchet-MS' }}
									// 		>
									// 			{item.desc}
									// 		</Card.Text>
									// 	</Card.Body>
									// 	<Card.Footer>
									// 		<Card.Title
									// 			style={{
									// 				fontSize: '20px',
									// 				color: 'green',
									// 				fontFamily: 'Trebuchet-MS',
									// 			}}
									// 		>
									// 			Type
									// 		</Card.Title>
									// 		<Card.Text>{item.type}</Card.Text>
									// 		<Card.Title
									// 			style={{
									// 				fontSize: '20px',
									// 				color: 'green',
									// 				fontFamily: 'Raleway',
									// 			}}
									// 		>
									// 			Packing
									// 		</Card.Title>
									// 		<Card.Text>{item.Packing}</Card.Text>
									// 	</Card.Footer>
									// </Card> */}
								</Grid>
							))}
						</Grid>
					</div>

					<div ref={props.myRef2}>
						<h1 style={{ paddingLeft: '230px', paddingTop: '5rem' }}>Fruits</h1>

						<div
							style={{
								backgroundColor: '#4ed715',
								height: '3px',
								width: '50px',
								marginLeft: '230px',
							}}
						></div>
					</div>
					<Grid
						container
						justify='flex-start'
						direction='row'
						alignItems='flex-start'
						style={{
							paddingTop: '5rem',
							paddingLeft: '15rem',
							paddingRight: '10rem',

							width: '100%',
						}}
					>
						{Fruits.map((item) => (
							<Grid item xs={4} spacing={5}>
								<MDBCard
									style={{
										width: '95%',
										padding: '0px 0px 0px 0px',
										marginBottom: '2%',
									}}
								>
									<MDBCardImage
										top
										src={item.src}
										overlay='white-slight'
										hover
										waves
										alt='MDBCard image cap'
										style={{
											height: '200px',
										}}
									/>
									<MDBCardBody>
										<a
											href='#!'
											className='activator waves-effect waves-light mr-4'
										></a>
										<MDBCardTitle>{item.name}</MDBCardTitle>
										<hr />
										<MDBCardText>{item.desc}</MDBCardText>
										<hr />
										<h5 className='indigo-text'>
											<medium style={{ fontSize: '17.5px', color: '#14a109' }}>
												Type: {'  '}
											</medium>
											<h7 style={{ fontSize: '17.5px', color: '#000000' }}>
												{item.type}
											</h7>
										</h5>
										<h5 className='indigo-text'>
											<medium style={{ fontSize: '17.5px', color: '#14a109' }}>
												Packing: {'  '}
											</medium>
											<h7 style={{ fontSize: '17.5px', color: '#000000' }}>
												{item.Packing}
											</h7>
										</h5>
									</MDBCardBody>
								</MDBCard>
								{/* <Card
									style={{
										width: '95%',
										padding: '0px 0px 0px 0px',
										paddingBottom: '10px',
									}}
								>
									<Card.Img
										variant='top'
										src={item.src}
										style={{
											height: '200px',
										}}
									/>
									<Card.Body>
										<Card.Title
											style={{
												color: 'black',
												fontWeight: 'bold',
												fontFamily: 'Trebuchet-MS',
											}}
										>
											{item.name}
										</Card.Title>
										<Card.Text
											style={{ color: 'black', fontFamily: 'Trebuchet-MS' }}
										>
											{item.desc}
										</Card.Text>
									</Card.Body>
									<Card.Footer>
										<Card.Title
											style={{
												fontSize: '20px',
												color: 'green',
												fontFamily: 'Trebuchet-MS',
											}}
										>
											Type
										</Card.Title>
										<Card.Text>{item.type}</Card.Text>
										<Card.Title
											style={{
												fontSize: '20px',
												color: 'green',
												fontFamily: 'Raleway',
											}}
										>
											Packing
										</Card.Title>
										<Card.Text>{item.Packing}</Card.Text>
									</Card.Footer>
								</Card> */}
							</Grid>
						))}
					</Grid>
				</div>
			) : (
				<div>
					<div>
						<h1
							style={{
								paddingLeft: '2rem',
								paddingTop: '5rem',
								fontSize: '25px',
							}}
						>
							Vegetables
						</h1>

						<div
							style={{
								backgroundColor: '#4ed715',
								height: '3px',
								width: '50px',
								marginLeft: '2.5rem',
							}}
						></div>
					</div>
					<Grid
						container
						justify='flex-start'
						direction='column'
						alignItems='flex-start'
						style={{ paddingTop: '2rem', paddingLeft: '3rem', width: '90%' }}
					>
						{Veg.map((item) => (
							<Grid item xs={100}>
								<MDBCard
									style={{
										width: '95%',
										padding: '0px 0px 0px 0px',
										marginBottom: '2%',
									}}
								>
									<MDBCardImage
										top
										src={item.src}
										overlay='white-slight'
										hover
										waves
										alt='MDBCard image cap'
										style={{
											height: '200px',
										}}
									/>
									<MDBCardBody>
										<a
											href='#!'
											className='activator waves-effect waves-light mr-4'
										></a>
										<MDBCardTitle>{item.name}</MDBCardTitle>
										<hr />
										<MDBCardText>{item.desc}</MDBCardText>
										<hr />
										<h5 className='indigo-text'>
											<medium style={{ fontSize: '17.5px', color: '#14a109' }}>
												Type: {'  '}
											</medium>
											<h7 style={{ fontSize: '17.5px', color: '#000000' }}>
												{item.type}
											</h7>
										</h5>
										<h5 className='indigo-text'>
											<medium style={{ fontSize: '17.5px', color: '#14a109' }}>
												Packing: {'  '}
											</medium>
											<h7 style={{ fontSize: '17.5px', color: '#000000' }}>
												{item.Packing}
											</h7>
										</h5>
									</MDBCardBody>
								</MDBCard>
							</Grid>
						))}
					</Grid>

					<div>
						<h1
							style={{
								paddingLeft: '2rem',
								paddingTop: '5rem',
								fontSize: '25px',
							}}
						>
							Fruits
						</h1>

						<div
							style={{
								backgroundColor: '#4ed715',
								height: '3px',
								width: '50px',
								marginLeft: '2.5rem',
							}}
						></div>
					</div>
					<Grid
						container
						justify='flex-start'
						direction='column'
						alignItems='flex-start'
						style={{ paddingTop: '2rem', paddingLeft: '3rem', width: '90%' }}
					>
						{Fruits.map((item) => (
							<Grid item xs={100}>
								<MDBCard
									style={{
										width: '95%',
										padding: '0px 0px 0px 0px',
										marginBottom: '2%',
									}}
								>
									<MDBCardImage
										top
										src={item.src}
										overlay='white-slight'
										hover
										waves
										alt='MDBCard image cap'
										style={{
											height: '200px',
										}}
									/>
									<MDBCardBody>
										<a
											href='#!'
											className='activator waves-effect waves-light mr-4'
										></a>
										<MDBCardTitle>{item.name}</MDBCardTitle>
										<hr />
										<MDBCardText>{item.desc}</MDBCardText>
										<hr />
										<h5 className='indigo-text'>
											<medium style={{ fontSize: '17.5px', color: '#14a109' }}>
												Type: {'  '}
											</medium>
											<h7 style={{ fontSize: '17.5px', color: '#000000' }}>
												{item.type}
											</h7>
										</h5>
										<h5 className='indigo-text'>
											<medium style={{ fontSize: '17.5px', color: '#14a109' }}>
												Packing: {'  '}
											</medium>
											<h7 style={{ fontSize: '17.5px', color: '#000000' }}>
												{item.Packing}
											</h7>
										</h5>
									</MDBCardBody>
								</MDBCard>
							</Grid>
						))}
					</Grid>
				</div>
			)}
		</div>
	)
}

export default HomeEN
