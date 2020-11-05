import React, { useContext } from 'react'
import Text from 'react'
import './App.css'
import UnauthenticatedApp from './components/UnauthenticatedApp'
import AuthenticatedApp from './components/AuthenticatedApp'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { Switch, BrowserRouter, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import Login from './components/Login.js'
import Register from './components/Register.js'
import Header from './components/Header.js'
import Footer from './components/Footer'

// function AppSwitch() {
//   // const { user } = useContext(AuthenticationContext)
//   // return user ? <AuthenticatedApp /> : <UnauthenticatedApp />
// }

function App() {
	return (
		<div>
			<BrowserRouter>
				<Header />
				<Switch>
					<Route path='/register' component={Register} />
					<Route path='/login' component={Login} />

					<Route component={Register} />
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	)
}

export default App
