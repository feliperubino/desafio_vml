import React from "react";


import Home from "./components/pages/home";
import PaginaDetalhe from "./components/pages/paginadetalhe";
import styles from './stylesheets/main.scss';

import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';


const Router = () => (
	<div>
		<Switch>
			<Route exact path='/' component={Home}/>
			<Route exact path='/movie' component={Home}/>
			<Route exact path='/tv' component={Home}/>
			<Route path='/movie/:movieID' component={PaginaDetalhe}/>
			<Route path='/tv/:movieID' component={PaginaDetalhe}/>
		</Switch>
	</div>
);

export default Router;