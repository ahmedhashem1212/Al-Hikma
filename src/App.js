import Text, { useState } from 'react'
import './App.css'
import AuthenticatedApp from './components/AuthenticatedApp'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

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

// function AppSwitch() {
//   // const { user } = useContext(AuthenticationContext)
//   // return user ? <AuthenticatedApp /> : <UnauthenticatedApp />
// }
import React, { useRef } from 'react'
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop) 
function App() {
	const myRef = useRef(null)
	const myRef2 = useRef(null)

	const executeScroll = () => scrollToRef(myRef)
	const executeScroll2 = () => scrollToRef(myRef2)
	const [home,setHome] = useState(false)
	const [calender,setCalender] = useState(false)
	const [contact,setContact] = useState(false)
	
	const props ={
		executeScroll,
		myRef,
		executeScroll2,
		myRef2,
		setHome,
		setCalender,
		setContact
	}
	return (
		<div>
			<BrowserRouter id='current'>
				{/* {window.location.href[window.location.href.length-2]+window.location.href[window.location.href.length-1]==='ar'?(<HeaderAR {...props}/>):(window.location.href[window.location.href.length-2]+window.location.href[window.location.href.length-1]==='fr'?<HeaderFR {...props}/>:<Header {...props}/>)} */}
				
					{calender==true ? <Redirect exact to={'/calender/'+window.location.href[window.location.href.length-2]+window.location.href[window.location.href.length-1]} />  :(home==true ? <Redirect exact to={'/home/'+window.location.href[window.location.href.length-2]+window.location.href[window.location.href.length-1]} />:(contact==true ? <Redirect exact to={'/contact/'+window.location.href[window.location.href.length-2]+window.location.href[window.location.href.length-1]} />:(null)))}
						<Switch>
					
						
						<Route path='/home/en' exact render={() => <div><Header {...props}/><HomeEN {...props} /><Footer /> </div>}/>
					<Route path='/home/fr' exact render={() => <div><HeaderFR {...props}/><HomeFR {...props} /><Footer /> </div> } />
					<Route path='/home/ar' exact render={() => <div><HeaderAR {...props}/><HomeAR {...props} /><Footer /> </div> } />
					<Route path='/contact/en' exact render={() => <div><Header {...props}/><FormPage {...props} /><Footer /> </div>} />
					</Switch>
				


					{/* <Route component={HomeEN} /> */}
				
				{/* <Footer /> */}
			</BrowserRouter>
		</div>
	)
}

export default App
