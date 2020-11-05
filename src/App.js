import React, { useContext } from 'react'
import Text from 'react'
import './App.css'
import AuthenticatedApp from './components/AuthenticatedApp'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { Switch, BrowserRouter, Route } from 'react-router-dom'

import Login from './components/Login.js'
import HomeEN from './components/HomeEN.js'
import HomeFR from './components/HomeFR.js'
import HomeAR from './components/HomeAR.js'

import Header from './components/Header'
import HeaderFR from './components/HeaderFR'
import HeaderAR from './components/HeaderAR'
import FormPage from './components/FormPage'
import Footer from './components/Footer'

// function AppSwitch() {
//   // const { user } = useContext(AuthenticationContext)
//   // return user ? <AuthenticatedApp /> : <UnauthenticatedApp />
// }

function App() {
	return (
		<div >
			<BrowserRouter>
				{window.location.href[window.location.href.length-2]+window.location.href[window.location.href.length-1]==='ar'?(<HeaderAR/>):(window.location.href[window.location.href.length-2]+window.location.href[window.location.href.length-1]==='fr'?<HeaderFR/>:<Header/>)}
				<Switch>
					<Route path='/en' component={HomeEN} />
					<Route path='/fr' component={HomeFR} />
					<Route path='/ar' component={HomeAR} />
					
					<Route component={FormPage} />
				</Switch>
				<Footer/>
			</BrowserRouter>
		</div>
	)
}

export default App
