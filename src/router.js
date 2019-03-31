import React from "react";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Lista from "./components/lista/lista";
import Filtro from "./components/filtro/filtro";
import Detalhes from "./components/detalhes/detalhes";
import styles from './stylesheets/main.scss';

import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';


const Router = () => (
	<div>
		<Route exact path='/' component={Filtro}/>
		<Route exact path='/' component={Lista}/>
		<Route path='/movie/:movieID' component={Detalhes}/>
	</div>
);

export default Router;