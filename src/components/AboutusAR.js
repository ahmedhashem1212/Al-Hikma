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
function About() {
	const theme = useTheme()
	const matches = useMediaQuery(theme.breakpoints.up('md'))
	const classes = useStyles()
	return (
		<MDBRow style={{ marginLeft: '10%', marginRight: '10%', marginTop: '2%' }}>
			<MDBCol>
				<MDBCard reverse>
					<MDBCardBody cascade className='text-center'>
						<MDBCardTitle>
							<h1>الحكمة للتصدير</h1>
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
							.{''}الحكمة للتصدير هي شركة عائلية لتصدير الخضار والفاكهة من أصل مصري تأسست في عام 1991. تهدف شركتنا إلى تقديم منتجات عالية الجودة موجهة لعملائنا المتميزين
							</p>{' '}
							<p style={{ fontSize: '20px' }}>
							.{''}مؤسس شركة الحكمة  شغوف جدًا بهذا المجال ولديه خبرة كبيرة في التصدير إلى أوروبا ودول الخليج حيث أنه عمل في شركات عالمية متخصصة فى هذا المجال فى سويسرا لأكثر من عشرة سنوات وكذلك في قطر لعدة سنوات						
							</p>
							<p style={{ fontSize: '20px' }}>
							.{''}تعمل شركة الحكمة في عدة خضروات وفواكه مثال: رمان ، برتقال فالنسيا ، فاصوليا خضراء ، خس ، خرشوف ، بصل ، بطاطس سبونتا ، ثوم ، بطيخ ، مع احترام جميع إجراءات الجو بالإضافة الى انة يتم اختيار بضائعنا بطريقة دقيقة وتعبئتها بشكل احترافي لإرضاء كافة عملائنا الكرام							</p>
							<p style={{ fontSize: '20px' }}>
							.{''}تقوم شركتنا بالتصدر لعدة اسواق بشكل أساسي لأوروبا على سبيل المثال ؛ فرنسا بلجيكا وإيطاليا وأفريقيا وآسيا
							</p>
							<h5 className='indigo-text'>
								<strong style={{ color: '#14a109' }}>مهمتنا</strong>
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
								.{''}تهدف شركتنا لتحقيق التميز المستدام والعوائد في خدماتنا ، مع ضمان تجارة المنتجات الطازجة في جميع أنحاء العالم ضمن المعايير والإجراءات الدولية بطريقة فعالة من حيث التكلفة
							</p>
							<h5 className='indigo-text'>
								<strong style={{ color: '#14a109' }}>رؤيتنا </strong>
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
								.{''}بالنسبة للمستقبل ، نامل  توسيع نطاق سوقنا وتصدير الفواكه والخضروات المصرية الى جميع أنحاء العالم وكذلك جذب العملاء جدد							</p>
							<p style={{ fontSize: '20px' }}>
								{' '}
								.{''}التصفح على موقعنا يتح لك التعرف على منتجاتنا بالتفصيل الكامل.
							</p>
							<h1
								style={{
									fontSize: '20px',
									alignContent: 'right',
									color: 'black',
									fontWeight: 'bold',
									marginLeft: '67%',
								}}
							>
								{' '}
								رئيس مجلس الإدارة
							</h1>
							<h1
								style={{
									fontSize: '20px',
									alignContent: 'right',
									color: 'black',
									fontWeight: 'bold',
									marginLeft: '67%',
								}}
							>
								{' '}
								عثمان منصور
							</h1>
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

export default About
