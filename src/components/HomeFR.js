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
const HomeFR = (props) => {
	const theme = useTheme()
	const matches = useMediaQuery(theme.breakpoints.up('md'))
	const classes = useStyles()

	const Veg = [
		{
			name: 'Pommes de Terre',
			desc:
				"Les pommes de terre sont l'un des produits frais que l'Égypte s'est spécialisée dans la culture, le conditionnement et l'exportation dans de nombreuses régions du monde. La Spunta est une pomme de terre très conventionnelle et bien connue, adaptée à la production sous de nombreux climats.",
			type: 'Spunta',
			Packing: 'Sac jaune 10/25 Kg',
			src: potato,
		},
		{
			name: 'Laitue Iceberg (Capucha)',
			desc:
				'Les anciens Égyptiens ont été les premiers à cultiver de la laitue à des fins de consommation La laitue fournit des quantités importantes de vitamines A et K. Elle fournit également du calcium, du potassium, de la vitamine C.',
			type: 'Laitue iceberg',
			Packing: 'Boîte carton-plastique 7/8 kg',
			src: capucha,
		},

		{
			name: 'Ails',
			desc:
				" En Egypte, l'ail est très compétitif sur le marché international par rapport aux autres pays. Il a commencé à être exporté vers les pays du monde entier, l'ail égyptien est une excellente source de vitamines C et B6 et contient également des fibres, phosphore, potassium, calcium, fer et cuivre.",
			type: 'Ail frais',
			Packing: 'Carton-sac 5Kg',
			src: garlic,
		},
		{
			name: 'Haricots Verts',
			desc:
				'Les haricots verts sont consommés dans le monde entier et vendus frais. Ils peuvent être consommés crus ou cuits à la vapeur, bouillis, sautés ou cuits au four. Nous exportons les haricots verts égyptiens pour plusieurs pays comme France, Belgique.',
			type: 'Haricots verts frais',
			Packing: 'Carton 5/8Kg',
			src: beans,
		},
		{
			name: 'Oignons',
			desc:
				"L'un des trois principaux produits exportateurs d'Égypte, pour de nombreuses régions du monde. Nous avons les oignons rouges et les oignons bruns.",
			type: 'Oignons Rouges - Oignons Bruns',
			Packing: 'Sac Rouge 10/25 Kg',
			src: onion,
		},

		{
			name: 'Artichaut',
			desc:
				"Les artichauts sont riches en fibres, vitamines, minéraux et antioxydants. Particulièrement riches en acide folique et en vitamines C et K, L'artichaut égyptien a 2 variétés célèbres: l'artichaut local et l'artichaut français.",
			type: "Artichaut local et Artichaut français",
			Packing: 'Boîte en plastique -carton 4,5 / 5 kg',
			src: artichoke,
		},
	]
	const Fruits = [
		{
			name: 'Raisins',
			desc:
				"Les raisins sont une bonne source de fibres, de potassium et d'une gamme de vitamines. Nous exportons trois célèbres variétés de raisins égyptiens: Flame, Superior et Crimson.",
			type: 'Flamme-Superior-Crimson',
			Packing: 'Boîte en plastique -carton 5 kg',
			src: grapes,
		},
		{
			name: 'Pastèques',
			desc:
				"Généralement, la pastèque a une teneur élevée en eau et l'une des plus faibles en calories. La principale variété de pastèque en Égypte est Skata.",
			type: 'Skata',
			Packing: 'Carton 20 kg',
			src: watermelons,
		},
		{
			name: 'Citron',
			desc:
				"Les citrons sont un type d'agrumes à peau jaune qui poussent sur le citronnier. Tous les types de citrons sont connus pour leur goût acide. En fait, il est le champion de Vitamine C.",
			type: 'Citron Adalia',
			Packing: 'Plastic box -carton 15 kg',
			src: lemon,
		},

		{
			name: 'Grenade',
			desc:
				'Les grenades sont parmi les fruits les plus sains au monde. C’est une source de fibres, de vitamines B, de vitamine C, de vitamine K et de potassium.',
			type: 'Wonderful',
			Packing: 'Carton 4/5 kg',
			src: pomegranate,
		},
		{
			name: 'Oranges',
			desc:
				"Les oranges Valencia sont juteuses et ont le rapport parfait de saveur sucrée-acidulée, ce qui en fait d'excellentes oranges à jus. Les navels sont des oranges délicieusement douces avec moins de piquant que les oranges de Valence. Ils sont merveilleux à mélanger dans une salade pour donner une saveur douce et rafraîchissante.",
			type: 'Valence-Navel',
			Packing: 'Carton 15 kg',
			src: orange,
		},
	]

	const content = [
		{
			title: 'AL HIKMA For Export ',
			description:
				'Al Hikma for export est une compagnie familiale d’exportation des légumes et fruits d’origine égyptienne établit en 1991. En fait, notre compagnie a pour but de fournir une bonne qualité des produits orientés aux clients précieux',
			button: 'Apprendre Encore Plus',
			image: fruits,
		},
		{
			title: 'Travailler dans plusieurs légumes et fruits',
			description:
				'En fait, notre compagnie a pour but de fournir une bonne qualité des produits orientés aux clients précieux',
			button: 'Voir nos Produits',
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
								Légumes{' '}
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
								height: '85rem',
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
													Emballage: {'  '}
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
										}}
									>
										<Card.Img
											variant='top'
											src={item.src}
											style={{
												height: '200px',
											}}
										/>
										<Card.Body style={{}}>
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
												Emballage
											</Card.Title>
											<Card.Text>{item.Packing}</Card.Text>
										</Card.Footer>
									</Card> */}
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
							height: '85rem',
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
												Emballage: {'  '}
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
											Emballage
										</Card.Title>
										<Card.Text>{item.Packing}</Card.Text>
									</Card.Footer> */}
								{/* </Card> */}
							</Grid>
						))}
					</Grid>
					<div style={{ height: '45px' }}> </div>
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
							Légumes{' '}
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
												Emballage: {'  '}
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
												Emballage: {'  '}
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

export default HomeFR
