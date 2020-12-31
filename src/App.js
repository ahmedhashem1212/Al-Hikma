import Text, { useState } from 'react'
import './App.css'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import HomeEN from './components/HomeEN.js'
import HomeFR from './components/HomeFR.js'
import HomeAR from './components/HomeAR.js'

import Header from './components/header'
import HeaderFR from './components/HeaderFR'
import HeaderAR from './components/HeaderAR'
import FormPage from './components/FormPage'
import Footer from './components/Footer'
import FooterFR from './components/FooterFR'
import FooterAR from './components/FooterAR'
import Calender from './components/Calender'
import About from './components/Aboutus'
import AboutFR from './components/AboutusFR'
import AboutAR from './components/AboutusAR'

import React, { useRef } from 'react'
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
function App() {
	const myRef = useRef(null)
	const myRef2 = useRef(null)

	const executeScroll = () => scrollToRef(myRef)
	const executeScroll2 = () => scrollToRef(myRef2)
	const [home, setHome] = useState(true)
	const [calender, setCalender] = useState(false)
	const [contact, setContact] = useState(false)
	const [about, setAbout] = useState(false)

	const props = {
		executeScroll,
		myRef,
		executeScroll2,
		myRef2,
		setHome,
		setCalender,
		setContact,
		home,
		setAbout,
	}
	return (
		<div>
			<BrowserRouter id='current'>
				{/* {window.location.href[window.location.href.length-2]+window.location.href[window.location.href.length-1]==='ar'?(<HeaderAR {...props}/>):(window.location.href[window.location.href.length-2]+window.location.href[window.location.href.length-1]==='fr'?<HeaderFR {...props}/>:<Header {...props}/>)} */}

				{calender == true ? (
					<Redirect
						exact
						to={
							'/calender/' +
							window.location.href[window.location.href.length - 2] +
							window.location.href[window.location.href.length - 1]
						}
					/>
				) : home == true ? (
					window.location.href[window.location.href.length - 2] +window.location.href[window.location.href.length - 1]=='fr' ||			
					window.location.href[window.location.href.length - 2] +
					window.location.href[window.location.href.length - 1]=='en' ||
					
					window.location.href[window.location.href.length - 2] +
							window.location.href[window.location.href.length - 1]=='ar'?(
					<Redirect
						exact
						to={
							'/' +
							window.location.href[window.location.href.length - 2] +
							window.location.href[window.location.href.length - 1]
						}
					/>):(
					<Redirect
						exact
						to={'/' +'en'}
					/>)
				) : contact == true ? (
					<Redirect
						exact
						to={
							'/contact/' +
							window.location.href[window.location.href.length - 2] +
							window.location.href[window.location.href.length - 1]
						}
					/>
				) : about == true ? (
					<Redirect
						exact
						to={
							'/about/' +
							window.location.href[window.location.href.length - 2] +
							window.location.href[window.location.href.length - 1]
						}
					/>
				) : null}
				<Switch>
					<Route
						path='/'
						exact
						render={() => (
							<div>
								<Header {...props} />
								<HomeEN {...props} />
								<Footer {...props} />{' '}
							</div>
						)}
					/>

					<Route
						path='/en'
						exact
						render={() => (
							<div>
								<Header {...props} />
								<HomeEN {...props} />
								<Footer {...props} />{' '}
							</div>
						)}
					/>
					<Route
						path='/fr'
						exact
						render={() => (
							<div>
								<HeaderFR {...props} />
								<HomeFR {...props} />
								<FooterFR {...props} />{' '}
							</div>
						)}
					/>
					<Route
						path='/ar'
						exact
						render={() => (
							<div>
								<HeaderAR {...props} />
								<HomeAR {...props} />
								<FooterAR {...props} />{' '}
							</div>
						)}
					/>
					<Route
						path='/contact/en'
						exact
						render={() => (
							<div>
								<Header {...props} />
								<FormPage {...props} />
								<Footer {...props} />{' '}
							</div>
						)}
					/>
					<Route
						path='/contact/fr'
						exact
						render={() => (
							<div>
								<HeaderFR {...props} />
								<FormPage {...props} />
								<FooterFR {...props} />{' '}
							</div>
						)}
					/>
					<Route
						path='/contact/ar'
						exact
						render={() => (
							<div>
								<HeaderAR {...props} />
								<FormPage {...props} />
								<FooterAR {...props} />{' '}
							</div>
						)}
					/>

					<Route
						path='/calender/en'
						exact
						render={() => (
							<div>
								<Header {...props} />
								<Calender {...props} />
								<Footer {...props} />{' '}
							</div>
						)}
					/>
					<Route
						path='/calender/fr'
						exact
						render={() => (
							<div>
								<HeaderFR {...props} />
								<Calender {...props} />
								<FooterFR {...props} />{' '}
							</div>
						)}
					/>
					<Route
						path='/calender/ar'
						exact
						render={() => (
							<div>
								<HeaderAR {...props} />
								<Calender {...props} />
								<FooterAR {...props} />{' '}
							</div>
						)}
					/>
				</Switch>
				<Route
					path='/about/ar'
					exact
					render={() => (
						<div>
							<HeaderAR {...props} />
							<AboutAR {...props} />
							<FooterAR {...props} />{' '}
						</div>
					)}
				/>
				<Route
					path='/about/en'
					exact
					render={() => (
						<div>
							<Header {...props} />
							<About {...props} />
							<Footer {...props} />{' '}
						</div>
					)}
				/>
				<Route
					path='/about/fr'
					exact
					render={() => (
						<div>
							<HeaderFR {...props} />
							<AboutFR {...props} />
							<FooterFR {...props} />{' '}
						</div>
					)}
				/>
			</BrowserRouter>
		</div>
	)
}

export default App
