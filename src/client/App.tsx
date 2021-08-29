import * as React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Chirps from './views/Chirps';
import ViewChirp from './views/ViewChirp';
import Home from './views/Home';
import EditChirp from './views/EditChirp';

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
						<Route exact path="/chirps">
							<Chirps />
						</Route>
						<Route exact path="/chirps/:id">
							<ViewChirp />
						</Route>
						<Route exact path="/chirps/:id/edit">
							<EditChirp />
						</Route>
					</Switch>
				</main>
			</Router>
		</>
	);
};

interface AppProps { }

export default App;
