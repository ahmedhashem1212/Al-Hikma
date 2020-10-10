import React, { useContext } from 'react'
import Text from 'react'
import './App.css'
import UnauthenticatedApp from './components/UnauthenticatedApp'
import AuthenticatedApp from './components/AuthenticatedApp'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { Switch, BrowserRouter, Route } from 'react-router-dom'

import Login from './components/Login.js'
import Register from './components/Register.js'
import {
	AuthenticationContext,
	AuthenticationContextProvider,
} from './contexts/AuthenticationContext'

// function AppSwitch() {
//   // const { user } = useContext(AuthenticationContext)
//   // return user ? <AuthenticatedApp /> : <UnauthenticatedApp />
// }

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Switch>
					<Route path='/register' component={Register} />
					<Route path='/login' component={Login} />

					<Route component={Register} />
				</Switch>
			</BrowserRouter>
		</div>
	)
}

export default App
