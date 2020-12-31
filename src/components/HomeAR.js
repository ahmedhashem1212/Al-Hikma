import React, { useState, useContext, useEffect } from 'react'

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

const HomeAR = (props) => {
	const theme = useTheme()
	const matches = useMediaQuery(theme.breakpoints.up('md'))
	const classes = useStyles()
	const Veg = [
		{
			name: 'البطاطس',
			desc:
				'البطاطس من المنتجات الطازجة التي تخصصت مصر في زراعتها وتعبئتها وتصديرها للعديد من المناطق في العالم ومناسبة للإنتاج في العديد من المناخات',
			type: 'سبونتا',
			Packing: 'كيس أصفر 10/25 كجم',
			src: potato,
		},
		{
			name: 'خس كابوتشا',
			desc:
				'يحتوي الخس على نسبة عالية من الماء ، مما يجعله خيارًا منعشًا أثناء الطقس الحار. يوفر الخس كميات كبيرة من الفيتامينات كما أنه يوفر الكالسيوم والبوتاسيوم وفيتامين ج وحمض الفوليك',
			type: 'كابوتشا ',
			Packing: 'علبة كرتون - بلاستيك 7/8 كيلو',
			src: capucha,
		},

		{
			name: 'الثوم',
			desc:
			'يعتبر الثوم في مصر منافسًا قويًا في السوق العالمية مقارنة بالدول الأخرى ، وقد بدأ تصديره إلى دول العالم ، كما يحتوي على بعض الألياف والفوسفور والبوتاسيوم والكالسيوم والحديد',
			type: 'ثوم طازج',
			Packing: 'كيس كرتون 5 كجم',
			src: garlic,
		},
		{
			name: 'الفاصوليا الخضراء',
			desc:
				'تؤكل الفاصوليا الخضراء حول العالم وتباع طازجة ومجمدة. يمكن أن تؤكل نيئة أو مطبوخة على البخار أو مسلوقة أو مقلية بجودة وتعبئة جيدة أو مخبوزة. نقوم بتصدير الفاصوليا الخضراء المصرية لعدة دول مثل فرنسا و بلجيكا',
			type: 'فاصوليا خضراء طازجة',
			Packing: 'كرتون 5/8 كجم',
			src: beans,
		},
		{
			name: 'البصل',
			desc:
				'أحد أكبر ثلاث منتجات مصدرة من مصر للعديد من المناطق في العالم. لدينا البصل الأحمر والبصل البني',
			type: 'بصل أحمر - بصل بني',
			Packing: 'كيس أحمر 10/25 كجم',
			src: onion,
		},

		{
			name: 'الخرشوف',
			desc:
				'حمض الفوليك والفيتامينات C و K يعتبر الأرضي شوكي منخفض الدهون وغني بالألياف والفيتامينات والمعادن ومضادات الأكسدة. تحتوي على نسبة عالية من المعادن المهمة ، مثل المغنيسيوم والفوسفور والبوتاسيوم والحديد',
			type: 'الخرشوف المحلي والخرشوف الفرنسي',
			Packing: 'علبة بلاستيك - كرتون 4.5 / 5 كجم',
			src: artichoke,
		},
	]
	const Fruits = [
		{
			name: 'العنب',
			desc:
				'العنب مصدر جيد للألياف والبوتاسيوم ومجموعة من الفيتامينات والمعادن الأخرى. نقوم بتصدير ثلاث أصناف شهيرة من العنب المصري',
			type: 'كريمسون- سوبريور- فليم ',
			Packing: 'علبة بلاستيك - كرتون 5 كيلو',
			src: grapes,
		},
		{
			name: 'البطيخ',
			desc:
				'يحتوي البطيخ على نسبة عالية من الماء و يعد من أقل السعرات الحرارية. الصنف الرئيسي للبطيخ في مصر هو سكاتا',
			type: 'سكاتا',
			Packing: 'كرتون 20 كيلو',
			src: watermelons,
		},
		{
			name: 'الليمون',
			desc:
				'الليمون هو نوع من ثمار الحمضيات صفراء القشرة التي تنمو على شجرة الليمون. و من اهم الفاكهة الغانية بفيتامين سى',
			type: 'ليمون اضاليا',
			Packing: 'علبة بلاستيك - كرتون 15 كيلو',
			src: lemon,
		},

		{
			name: 'الرمان',
			desc:
				'الرمان من أكثر الفواكه صحة على وجه الأرض. أنها تحتوي على مجموعة من المركبات النباتية المفيدة. الرمان مصدر للألياف وفيتامين ب وفيتامين ج وفيتامين ك والبوتاسيوم',
			type: 'واندورفل',
			Packing: 'كرتون 4/5 كيلو',
			src: pomegranate,
		},
		{
			name: 'البرتقال',
			desc:
				'هناك العديد من أصناف البرتقال في السوق ولكن هناك صنفان يتصدران	برتقال فالنسيا كثير العصير وله نسبة مثالية من النكهة الحلوة مما يجعله عصير البرتقال الرائع- السرة هو برتقال حلو ولذيذ وله نكهة أقل من برتقال فالنسيا. من الرائع تناول وجبة خفيفة ووضعها في سلطة لإضفاء نكهة حلوة ومنعشة',
			type: 'فالنسيا-السرة',
			Packing: 'كرتون 15 كيلو',
			src: orange,
		},
	]

	const content = [
		{
			title: 'الحكمة للتصدير',
			description:
				'لحكمة للتصدير هي شركة عائلية لتصدير الخضار والفاكهة من أصل مصري تأسست في عام 1991,	تهدف شركتنا إلى تقديم منتجات عالية الجودة موجهة لعملائنا المتميزين',
			button: 'تفاصيل أكثر',
			image: fruits,
		},
		{
			title: 'نعمل في العديد من انواع الخضراوات و الفاكهة',
			description:
				' في الواقع تهدف شركتنا إلى تقديم منتجات عالية الجودة موجهة للعمللائنا المتميزين',
			button: 'شاهد منتجاتنا',
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
				<div>
					<div>
						<div ref={props.myRef}>
							<h1
								style={{
									paddingRight: '15rem',
									paddingTop: '5rem',
									textAlign: 'right',
								}}
							>
								الخضراوات
							</h1>

							<div
								style={{
									backgroundColor: '#4ed715',
									height: '3px',
									width: '50px',
									marginRight: '15rem',
									float: 'right',
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
											<MDBCardTitle style={{ textAlign: 'right' }}>
												{item.name}
											</MDBCardTitle>
											<hr />
											<MDBCardText style={{ textAlign: 'right' }}>
												{item.desc}
											</MDBCardText>
											<hr />
											<h5
												className='indigo-text'
												style={{
													textAlign: 'right',
												}}
											>
												<medium
													style={{
														textAlign: 'right',
														fontSize: '17.5px',
														color: '#14a109',
													}}
												>
													النوع :{'  '}
												</medium>
												<h7
													style={{
														textAlign: 'right',
														fontSize: '17.5px',
														color: '#000000',
													}}
												>
													{item.type}
												</h7>
											</h5>
											<h5
												className='indigo-text'
												style={{
													textAlign: 'right',
												}}
											>
												<medium
													style={{
														textAlign: 'right',
														fontSize: '17.5px',
														color: '#14a109',
													}}
												>
													التعبئة :{'  '}
												</medium>
												<h7
													style={{
														textAlign: 'right',
														fontSize: '17.5px',
														color: '#000000',
													}}
												>
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
													textAlign: 'right',
												}}
											>
												{item.name}
											</Card.Title>
											<Card.Text
												style={{
													color: 'black',
													fontFamily: 'Trebuchet-MS',
													textAlign: 'right',
												}}
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
													textAlign: 'right',
												}}
											>
												النوع
											</Card.Title>
											<Card.Text style={{ textAlign: 'right' }}>
												{item.type}
											</Card.Text>
											<Card.Title
												style={{
													fontSize: '20px',
													color: 'green',
													fontFamily: 'Raleway',
													textAlign: 'right',
												}}
											>
												التعبئة
											</Card.Title>
											<Card.Text style={{ textAlign: 'right' }}>
												{item.Packing}
											</Card.Text>
										</Card.Footer>
									</Card> */}
								</Grid>
							))}
						</Grid>
					</div>

					<div ref={props.myRef2}>
						<h1
							style={{
								paddingRight: '15rem',
								paddingTop: '5rem',
								textAlign: 'right',
							}}
						>
							الفاكهة
						</h1>

						<div
							style={{
								backgroundColor: '#4ed715',
								height: '3px',
								width: '50px',
								marginRight: '15rem',
								float: 'right',
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
										<MDBCardTitle style={{ textAlign: 'right' }}>
											{item.name}
										</MDBCardTitle>
										<hr />
										<MDBCardText style={{ textAlign: 'right' }}>
											{item.desc}
										</MDBCardText>
										<hr />
										<h5
											className='indigo-text'
											style={{
												textAlign: 'right',
											}}
										>
											<medium
												style={{
													textAlign: 'right',
													fontSize: '17.5px',
													color: '#14a109',
												}}
											>
												النوع :{'  '}
											</medium>
											<h7
												style={{
													textAlign: 'right',
													fontSize: '17.5px',
													color: '#000000',
												}}
											>
												{item.type}
											</h7>
										</h5>
										<h5
											className='indigo-text'
											style={{
												textAlign: 'right',
											}}
										>
											<medium
												style={{
													textAlign: 'right',
													fontSize: '17.5px',
													color: '#14a109',
												}}
											>
												التعبئة :{'  '}
											</medium>
											<h7
												style={{
													textAlign: 'right',
													fontSize: '17.5px',
													color: '#000000',
												}}
											>
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
												textAlign: 'right',
											}}
										>
											{item.name}
										</Card.Title>
										<Card.Text
											style={{
												color: 'black',
												fontFamily: 'Trebuchet-MS',
												textAlign: 'right',
											}}
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
												textAlign: 'right',
											}}
										>
											النوع
										</Card.Title>
										<Card.Text style={{ textAlign: 'right' }}>
											{item.type}
										</Card.Text>
										<Card.Title
											style={{
												fontSize: '20px',
												color: 'green',
												fontFamily: 'Raleway',
												textAlign: 'right',
											}}
										>
											التعبئة
										</Card.Title>
										<Card.Text style={{ textAlign: 'right' }}>
											{item.Packing}
										</Card.Text>
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
								paddingRight: '2rem',
								paddingTop: '5rem',
								fontSize: '25px',
								textAlign: 'right',
							}}
						>
							الخضراوات
						</h1>

						<div
							style={{
								backgroundColor: '#4ed715',
								height: '3px',
								width: '50px',
								marginLeft: '70%',
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
										<MDBCardTitle style={{ textAlign: 'right' }}>
											{item.name}
										</MDBCardTitle>
										<hr />
										<MDBCardText style={{ textAlign: 'right' }}>
											{item.desc}
										</MDBCardText>
										<hr />
										<h5
											className='indigo-text'
											style={{
												textAlign: 'right',
											}}
										>
											<medium
												style={{
													textAlign: 'right',
													fontSize: '17.5px',
													color: '#14a109',
												}}
											>
												النوع :{'  '}
											</medium>
											<h7
												style={{
													textAlign: 'right',
													fontSize: '17.5px',
													color: '#000000',
												}}
											>
												{item.type}
											</h7>
										</h5>
										<h5
											className='indigo-text'
											style={{
												textAlign: 'right',
											}}
										>
											<medium
												style={{
													textAlign: 'right',
													fontSize: '17.5px',
													color: '#14a109',
												}}
											>
												التعبئة :{'  '}
											</medium>
											<h7
												style={{
													textAlign: 'right',
													fontSize: '17.5px',
													color: '#000000',
												}}
											>
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
								paddingRight: '2rem',
								paddingTop: '5rem',
								fontSize: '25px',
								textAlign: 'right',
							}}
						>
							الفاكهة
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
										<MDBCardTitle style={{ textAlign: 'right' }}>
											{item.name}
										</MDBCardTitle>
										<hr />
										<MDBCardText style={{ textAlign: 'right' }}>
											{item.desc}
										</MDBCardText>
										<hr />
										<h5
											className='indigo-text'
											style={{
												textAlign: 'right',
											}}
										>
											<medium
												style={{
													textAlign: 'right',
													fontSize: '17.5px',
													color: '#14a109',
												}}
											>
												النوع :{'  '}
											</medium>
											<h7
												style={{
													textAlign: 'right',
													fontSize: '17.5px',
													color: '#000000',
												}}
											>
												{item.type}
											</h7>
										</h5>
										<h5
											className='indigo-text'
											style={{
												textAlign: 'right',
											}}
										>
											<medium
												style={{
													textAlign: 'right',
													fontSize: '17.5px',
													color: '#14a109',
												}}
											>
												التعبئة :{'  '}
											</medium>
											<h7
												style={{
													textAlign: 'right',
													fontSize: '17.5px',
													color: '#000000',
												}}
											>
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

export default HomeAR
