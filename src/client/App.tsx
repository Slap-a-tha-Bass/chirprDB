import * as React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Chirps from './views/Chirps';
import Home from './views/Home';

const App = () => {

	return (
		<>
			<Router>
				<main className="container m-2">
					<NavBar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/">
							<Chirps />
						</Route>
					</Switch>
				</main>
			</Router>
		</>
	);
};

interface AppProps { }

export default App;
