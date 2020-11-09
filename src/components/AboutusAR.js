import React from 'react'
import {
	MDBCard,
	MDBCardBody,
	MDBCardImage,
	MDBCardTitle,
	MDBCardText,
	MDBRow,
	MDBCol,
	MDBIcon,
} from 'mdbreact'
import { NavLink, Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'

import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { COLORS } from './Colors'
import fruits2 from '../assets/fruits2.jpg'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'

import calender from '../Calender.png'

import 'bootstrap/dist/css/bootstrap.min.css'
const useStyles = makeStyles((theme) => ({
	backgroundContainer: {
		background: '#14a109',
		//#80C721
		//#62A83D
		//opacity: '80%',
		padding: '10px 0px',
		zIndex: '1',
		position: 'sticky',
	},
}))
function AboutAR() {
	const theme = useTheme()
	const matches = useMediaQuery(theme.breakpoints.up('md'))
	const classes = useStyles()
	return (
		<MDBRow style={{ marginLeft: '17.5%', marginTop: '2%' }}>
			<MDBCol style={{ maxWidth: '80%' }}>
				<MDBCard reverse>
					<MDBCardBody cascade className='text-center'>
						<MDBCardTitle>
							<h1>الحكمة اى جى</h1>
						</MDBCardTitle>
						<h5 className='indigo-text'>
							<strong style={{ color: '#14a109' }}>من نحن؟</strong>
						</h5>
						<div
							style={{
								backgroundColor: '#4ed715',
								height: '3px',
								width: '50px',
								marginTop: '1%',
								marginLeft: '48%',
								marginBottom: '1%',
							}}
						></div>
						<MDBCardText>
							<p style={{ fontSize: '20px' }}>
								لحكمة اى جى للتصدير هي شركة عائلية لتصدير الخضار والفاكهة من أصل
								مصري تأسست في عام 1991. في الواقع ، تهدف شركتنا إلى تقديم منتجات
								عالية الجودة موجهة للعمللائنا المتميزين. مؤسس شركة الحكمة شغوف
								جدًا بهذا المجال ولديه خبرة كبيرة في التصدير إلى أوروبا ودول
								الخليج حيث أنه عمل في سويسرا لأكثر من 10 سنوات وكذلك في قطر لعدة
								سنوات.
							</p>{' '}
							<p style={{ fontSize: '20px' }}>
								نحن نعمل في عدة خضروات وفواكه: رمان ، برتقال فالنسيا ، فاصوليا
								خضراء ، خس آيسبرغ ، خرشوف ، بصل ، بطاطس سبونتا ، ثوم ، بطيخ ، مع
								احترام جميع إجراءات الجو و كذلك يتم اختيار بضائعنا بطريقة دقيقة
								وتعبئتها بشكل احترافي لإرضاء عملائنا الكرام. نصدر لعدة اسواق
								بشكل أساسي لأوروبا على سبيل المثال ؛ فرنسا بلجيكا وإيطاليا
								وأفريقيا وآسيا.{' '}
							</p>
							<h5 className='indigo-text'>
								<strong style={{ color: '#14a109' }}>رؤيتنا</strong>
							</h5>
							<div
								style={{
									backgroundColor: '#4ed715',
									height: '3px',
									width: '50px',
									marginTop: '1%',
									marginLeft: '48%',
									marginBottom: '2%',
								}}
							></div>
							<p style={{ fontSize: '20px' }}>
								{' '}
								بالنسبة للمستقبل ، نامل توسيع سوقنا ونشر الفواكه والخضروات
								المصرية في جميع أنحاء العالم وكذلك جذب العملاء المحتملين. التصفح
								على موقعنا تيح لك التعرف على منتجاتنا بالتفصيل الكامل.
							</p>
							<p
								style={{
									fontSize: '20px',
									alignContent: 'right',
									color: 'black',
									fontWeight: 'bold',
									marginRight: '70%',
								}}
							>
								{' '}
								الرئيس التنفيذي عثمان منصور
							</p>
							<p
								style={{
									fontSize: '20px',
									alignContent: 'right',
									color: 'black',
									fontWeight: 'bold',
									marginRight: '75%',
								}}
							>
								مدير تسويق ياسمينة عثمان
							</p>
						</MDBCardText>
						<div
							style={{
								backgroundColor: '#4ed715',
								height: '3px',
								width: '50px',
								marginTop: '1%',
								marginLeft: '48%',
							}}
						></div>

						<MDBIcon icon='envelope' size='1.5x' className='green-text mt-4'>
							<p style={{ fontSize: '15px' }}>info@alhikmaeg.com</p>
						</MDBIcon>
					</MDBCardBody>
				</MDBCard>
			</MDBCol>
		</MDBRow>
	)
}

export default AboutAR
