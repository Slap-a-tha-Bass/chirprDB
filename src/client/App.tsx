import * as React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Chirps from './views/Chirps';
import ViewChirp from './views/ViewChirp';
import Home from './views/Home';
import EditChirp from './views/EditChirp';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Donate from './views/Donate';
import Register from './views/Register';
import Login from './views/Login';
import PrivateRoute from './components/PrivateRoute';
import Profile from './views/Profile';
import Invalid from './views/Invalid';
import AuthSuccess from './views/AuthSuccess';

const stripe = loadStripe('pk_test_51JWlwbFmDISVkVU8c8Pfwiku0g2eXRukfDfdjNyW8336baPHPUwsYg4nm2kuUr4WzzXAgQEVr2k9VDTFN6HtaSHa00PBWeP8Nc');

const App = () => {

	return (
		<>
			<Router>
				<main className="container">
					<NavBar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/chirps">
							<Chirps />
						</Route>
						<Route exact path="/chirps/:id">
							<ViewChirp />
						</Route>
						<PrivateRoute exact path="/chirps/:id/edit">
							<EditChirp />
						</PrivateRoute>
						<PrivateRoute exact path="/donate">
							<Elements stripe={stripe}>
								<Donate />
							</Elements>
						</PrivateRoute>
						<Route exact path="/register">
							<Register />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<PrivateRoute exact path="/profile">
							<Profile />
						</PrivateRoute>
						<Route exact path="/invalid">
							<Invalid />
						</Route>
						<Route exact path="/auth/success">
							<AuthSuccess />
						</Route>
					</Switch>
				</main>
			</Router>
		</>
	);
};

interface AppProps { }

export default App;
