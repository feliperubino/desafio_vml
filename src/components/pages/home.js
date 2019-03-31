import React from "react";
import ReactDOM from "react-dom";

import Header from "../header/header";
import Footer from "../footer/footer";
import Lista from "../lista/lista";
import Filtro from "../filtro/filtro";
import Paginacao from "../paginacao/paginacao";

import { NavLink } from 'react-router-dom';


const Home = () => {
  document.body.classList.remove('details-page')
  return (
	<div>
		<div id="header">
			<Header />
		</div>
		<main id="main" class="">
			<div class="media">
				<section id="main_content" class="main_content">
					<div id="filtro"><Filtro /></div>
					<div id="lista"><Lista /></div>
					<div class="pagination_wrapper"><Paginacao /></div>
				</section>
			</div>
		</main>
		<div id="footer">
			<Footer />
		</div>
	</div>
  );
};
export default Home;
//ReactDOM.render(<Home />, document.getElementById("content"));