import React, { useContext } from 'react'
import Text from 'react'
import './App.css'
import AuthenticatedApp from './components/AuthenticatedApp'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { Switch, BrowserRouter, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import Login from './components/Login.js'
import HomeEN from './components/HomeEN.js'
import HomeFR from './components/HomeFR.js'
import HomeAR from './components/HomeAR.js'

import Header from './components/Header'
import HeaderFR from './components/HeaderFR'
import HeaderAR from './components/HeaderAR'
import FormPage from './components/FormPage'
import Footer from './components/Footer'
import FooterFR from './components/FooterFR'
import FooterAR from './components/FooterAR'
import Calender from './components/Calender'

// function AppSwitch() {
//   // const { user } = useContext(AuthenticationContext)
//   // return user ? <AuthenticatedApp /> : <UnauthenticatedApp />
// }

function App() {
	return (
		<div>
			<BrowserRouter>
				{window.location.href[window.location.href.length - 2] +
					window.location.href[window.location.href.length - 1] ===
				'AR' ? (
					<HeaderAR />
				) : window.location.href[window.location.href.length - 2] +
						window.location.href[window.location.href.length - 1] ===
				  'FR' ? (
					<HeaderFR />
				) : (
					<Header />
				)}
				<Switch>
					<Route path='/en' component={HomeEN} />
					<Route path='/fr' component={HomeFR} />
					<Route path='/ar' component={HomeAR} />
					<Route path='/calender' component={Calender} />
					<Route component={HomeEN} />
					<Route path='/contactus' component={FormPage} />
				</Switch>
				{window.location.href[window.location.href.length - 2] +
					window.location.href[window.location.href.length - 1] ===
				'AR' ? (
					<FooterAR />
				) : window.location.href[window.location.href.length - 2] +
						window.location.href[window.location.href.length - 1] ===
				  'FR' ? (
					<FooterFR />
				) : (
					<Footer />
				)}
			</BrowserRouter>
		</div>
	)
}

export default App
