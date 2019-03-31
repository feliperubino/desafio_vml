import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Lista from "./components/lista/lista";
import Filtro from "./components/filtro/filtro";
import Detalhes from "./components/detalhes/detalhes";
import Router from "./router";
import styles from './stylesheets/main.scss';

import { BrowserRouter } from 'react-router-dom';


ReactDOM.render((
  <BrowserRouter>
    <Router />
  </BrowserRouter>
), document.getElementById('content'))

