import React, {Component} from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import {Scene, Router} from 'react-native-router-flux'
import firebase from 'firebase'

import fireInfo from '../fire/fireInfo'
import reducer from './redux/reducers'

import Welcome from './components/Welcome'

const store = createStore(reducers, {}, applyMiddleware(thunkMiddleware))

class App extends Component {
	componentDidMount = () => {
		firebase.initializeApp(firebaseInfo)
	}

	render() {
		return (
			<Provider store={store}>
				<Router>
					<Scene key="welcome" component={Welcome} title="Cup of Sugar" initial />
				</Router>
			</Provider>
		)
	}
}

export default App

