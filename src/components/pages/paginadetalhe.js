import React from "react";
import ReactDOM from "react-dom";

import Header from "../header/header";
import Footer from "../footer/footer";
import Detalhes from "../detalhes/detalhes";
import Elenco from "../elenco/elenco";
import Recomendacoes from "../recomendacoes/recomendacoes";
import BarraLateral from "../barra-lateral/barra-lateral";
import Reviews from "../reviews/reviews";

import { NavLink } from 'react-router-dom';


const PaginaDetalhe = () => {
  document.body.classList.add('details-page');
  return (
	<div>
		<div id="header">
			<Header />
		</div>
		<main id="main" className="">
			<div className="media">
				<section id="main_content" className="main_content">
					<Detalhes />
					<div id="columns" className="column_wrapper">
						<div className="white_column">
							<Elenco />
							<Reviews />
							<Recomendacoes />
						</div>
						<div className="grey_column">
							<BarraLateral />
						</div>
					</div>
				</section>
			</div>
		</main>
		<div id="footer">
			<Footer />
		</div>
	</div>
  );
};
export default PaginaDetalhe;
//ReactDOM.render(<Home />, document.getElementById("content"));