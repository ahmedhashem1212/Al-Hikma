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
			Packing: 'sac jaune 10/25 Kg',
			src: potato,
		},
		{
			name: 'Laitue Iceberg (Capucha)',
			desc:
				'La laitue iceberg fournit des quantités importantes de vitamines A et K. Elle contient également de petites quantités de nombreux autres nutriments sains. Il fournit également du calcium, du potassium, de la vitamine C et du folate.',
			type: 'laitue iceberg',
			Packing: 'boîte carton-plastique 7/8 kg',
			src: capucha,
		},

		{
			name: 'Ail',
			desc:
				"En Egypte, l'ail est très compétitif sur le marché international par rapport aux autres pays. Il a commencé à être exporté vers les pays du monde entier, l'ail égyptien est une excellente source de vitamines C et B6, de sélénium et de manganèse, et contient également des fibres, phosphore, potassium, calcium, fer et cuivre.",
			type: 'ail frais',
			Packing: 'carton-sac 5Kg',
			src: garlic,
		},
		{
			name: 'Haricots Verts',
			desc:
				'Les haricots verts sont consommés dans le monde entier et vendus frais. Ils peuvent être consommés crus ou cuits à la vapeur, bouillis, sautés ou cuits au four. Nous exportons les haricots verts égyptiens pour plusieurs pays avec une bonne qualité et emballage.',
			type: 'Haricots verts frais',
			Packing: 'carton 5/8Kg',
			src: beans,
		},
		{
			name: 'Oignons',
			desc:
				"L'un des trois principaux produits exportateurs d'Égypte, pour de nombreuses régions du monde. Nous avons les oignons rouges et les oignons bruns.",
			type: 'oignons rouges-oignons bruns',
			Packing: 'sac rouge 10/25 Kg',
			src: onion,
		},

		{
			name: 'Artichaut: local / français 4,5 / 5 kg',
			desc:
				"Les artichauts sont riches en fibres, vitamines, minéraux et antioxydants. Particulièrement riches en acide folique et en vitamines C et K, ils fournissent également des minéraux importants, tels que le magnésium, le phosphore, le potassium et le fer. L'artichaut égyptien a 2 variétés célèbres: l'artichaut local et l'artichaut français",
			type: "l'artichaut local et l'artichaut français",
			Packing: 'boîte en plastique -carton 4,5 / 5 kg',
			src: artichoke,
		},
	]
	const Fruits = [
		{
			name: 'Raisins',
			desc:
				"Les raisins sont une bonne source de fibres, de potassium et d'une gamme de vitamines et d'autres minéraux. Nous exportons 3 célèbres variétés de raisins égyptiens: Flame, Superior et Crimson.",
			type: 'Flamme-Superior-Crimson',
			Packing: 'Boîte en plastique -carton 5 kg',
			src: grapes,
		},
		{
			name: 'Pastèques',
			desc:
				"Généralement, la pastèque a une teneur élevée en eau et est l'une des plus faibles en calories. La principale variété de pastèque en Égypte est Skata.",
			type: 'Skata',
			Packing: 'carton 20 kg',
			src: watermelons,
		},
		{
			name: 'Citron',
			desc:
				"Les citrons sont un type d'agrumes à peau jaune qui poussent sur le citronnier. Tous les types de citrons sont connus pour leur goût acide et acidulé, certaines variétés étant plus sucrées que d'autres. En fait, nous exportons actuellement le citron égyptien pour de nombreux pays.",
			type: 'Citron Adalia',
			Packing: 'plastic box -carton 15 kg',
			src: lemon,
		},

		{
			name: 'Grenade',
			desc:
				'Les grenades sont parmi les fruits les plus sains au monde. Les grenades sont une source de fibres, de vitamines B, de vitamine C, de vitamine K et de potassium.',
			type: 'Wonderful',
			Packing: 'carton 4/5 kg',
			src: pomegranate,
		},
		{
			name: 'Oranges',
			desc:
				"Il existe de nombreuses variétés d'oranges sur le marché .Les oranges Valencia sont juteuses et ont le rapport parfait de saveur sucrée-acidulée, ce qui en fait d'excellentes oranges à jus. Les navels sont des oranges délicieusement douces avec moins de piquant que les oranges de Valence. Ils sont merveilleux à mélanger dans une salade pour donner une saveur douce et rafraîchissante.",
			type: 'Valence-Navel',
			Packing: 'carton 15 kg',
			src: orange,
		},
	]

	const content = [
		{
			title: 'AL HIKMA For Export ',
			description:
				'Al Hikma EG for export est une compagnie familiale d’exportation des légumes et fruits d’origine égyptienne établit en 1991',
			button: 'Apprendre Encore Plus',
			image: fruits,
		},
		{
			title: 'Travailler dans plusieurs légumes et fruits',
			description:
				'En fait, notre compagnie a pour but de fournir une bonne qualité des produits orientés aux clients précieux',
			button: 'Voir nos Produits',
			image: fruits2,
			user: 'Erich Behrens',
			userProfile: 'https://i.imgur.com/0Clfnu7.png',
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
									<Card
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
									</Card>
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
								<Card
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
									</Card.Footer>
								</Card>
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
								<Card
									style={{
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
											Packing
										</Card.Title>
										<Card.Text>{item.Packing}</Card.Text>
									</Card.Footer>
								</Card>
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
								<Card
									style={{
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
											Packing
										</Card.Title>
										<Card.Text>{item.Packing}</Card.Text>
									</Card.Footer>
								</Card>
							</Grid>
						))}
					</Grid>
				</div>
			)}
		</div>
	)
}

export default HomeFR
