import React from "react";
import ReactDOM from "react-dom";

import { NavLink } from 'react-router-dom';


class Recomendacoes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
	  recomendacoes: [],
	  movie: "",
	  isDesktop: false
    };

    this.updatePredicate = this.updatePredicate.bind(this);
  }
  
  updatePredicate() {
    this.setState({ isDesktop: window.outerWidth > 1024 }, () => {
		this.fetchRecomendacoes();
	});
  }
  
  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);	
	
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  fetchRecomendacoes(){
	let apiKey = "19fcabf9fa0e8b4b4f3f3e417322d797";
	let movieId = window.location.pathname.split('/');
	movieId = movieId[2];
	this.setState({movie: movieId});
	
	fetch('https://api.themoviedb.org/3/movie/'+movieId+'/recommendations?api_key=' +apiKey + "")
	.then(results => {
		return results.json();
	}).then(data => {
		let recomendacoes = data.results.map((recomendacao, index) => {
			return(
				<div class="item mini backdrop mini_card" key={recomendacao.id}>
					<div class="image_content">
						<a href={`/movie/${recomendacao.id}`}>
							<img class="backdrop fade lazyautosizes lazyloaded" src={`https://image.tmdb.org/t/p/w250_and_h141_face/${recomendacao.backdrop_path}`} />
							<div class="meta">
								<span class="release_date"><span class="glyphicons glyphicons-calendar x1"></span>{recomendacao.release_date}</span>
								<span></span>
							</div>
						</a>
					</div>
					<p class="movie flex">
						<a class="title" href={`/movie/${recomendacao.id}`}><bdi>{recomendacao.title}</bdi></a>
						<span class="vote_average">{recomendacao.vote_average} <span id="rating_544fec3c0e0a2601d8002462" class="glyphicons glyphicons-star x1 right rating"></span></span>
					</p>
				</div>
			)
		})
		this.setState({recomendacoes: recomendacoes})
	})
  }
 

  render() {
    const isDesktop = this.state.isDesktop;
	const recomendacoes = this.state.recomendacoes;

    return (
		  <section id="recommendation_waypoint" class="panel recommendations scroller">
            <h3 dir="auto">Recommendations</h3>
            
		    <div class="scroller">
				{recomendacoes}
		    </div>
		  </section>
    );
  }
}

export default Recomendacoes;