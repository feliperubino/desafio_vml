import React from "react";
import ReactDOM from "react-dom";

import { NavLink } from 'react-router-dom';


class Paginacao extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
	  paginaAtual: "",
	  totalPaginas: "",
	  isDesktop: false
    };
    this.updatePredicate = this.updatePredicate.bind(this);
  }
  
  updatePredicate() {
    this.setState({ isDesktop: window.outerWidth > 1024 }, () => {
		let search = window.location.search;
		let params = new URLSearchParams(search);
		let page = params.get('page');

		if (page == undefined){
			page = "1";
		}
		this.fetchPaginas(this.state.isDesktop, page);
	});
  }
  
  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);	
	
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  fetchPaginas(isDesktop, page){
	let apiKey = "19fcabf9fa0e8b4b4f3f3e417322d797";
	
	fetch('https://api.themoviedb.org/3/discover/movie?api_key=' +apiKey + "&page=" +page)
	.then(results => {
		return results.json();
	}).then(data => {
		console.log(data.page);
		this.setState({paginaAtual: data.page})
		this.setState({totalPaginas: data.total_pages})
	})
  }
 

  render() {
    const isDesktop = this.state.isDesktop;
	const paginaAtual = this.state.paginaAtual;
	const totalPaginas = this.state.totalPaginas;
	
	const prevPage = Number(paginaAtual) - 1;
	const nextPage = Number(paginaAtual) + 1;
	
	let pageType = window.location.pathname.split('/');
	pageType = pageType[1];
	
	if(pageType == ""){
		pageType = "movie";
	}

    return (
		<div class="pagination">
			{paginaAtual != "1" ? (
				<a class="previous_page" rel="prev" href={`/${pageType}?page=${prevPage}`}>← Previous</a>	
			) : (
				<span class="previous_page disabled">← Previous</span>
			)}
			
			{paginaAtual == totalPaginas ? (
				<span class="next_page disabled">Next →</span>
			) : (
				<a class="next_page" rel="prev" href={`/${pageType}?page=${nextPage}`}>Next →</a>	
			)}
		</div>
    );
  }
}

export default Paginacao;