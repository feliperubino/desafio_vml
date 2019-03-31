import React from "react";
import ReactDOM from "react-dom";

import { NavLink } from 'react-router-dom';


class Lista extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
	  isDesktop: false
    };

    this.updatePredicate = this.updatePredicate.bind(this);
  }
  
  updatePredicate() {
    this.setState({ isDesktop: window.outerWidth > 1024 }, () => {
		//console.log(this.state.isDesktop);
		let search = window.location.search;
		let params = new URLSearchParams(search);
		let page = params.get('page');

		if (page == undefined){
			page = "1";
		}
		this.fetchMovies(this.state.isDesktop, page);
	});
  }
  
  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
	
	
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  fetchMovies(isDesktop, page) {
	let apiKey = "19fcabf9fa0e8b4b4f3f3e417322d797";
	fetch('https://api.themoviedb.org/3/discover/movie?api_key=' +apiKey + "&page=" +page)
	.then(results => {
		return results.json();
	}).then(data => {
		//console.log(data);
		let movies = data.results.map((movie) => {
			return(
				<div key={movie.id}>
				{isDesktop ? (
					<div className="item poster card" key={movie.id}>
						<div className="image_content">
							<NavLink to={`movie/${movie.id}`}>
								<img className="poster fade lazyautosizes lazyloaded" data-sizes="auto" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} />
								
								<div className="meta" data-role="tooltip">
								  <span id="popularity_581f942492514168af0045ec_value" className="hide popularity_rank_value">
									<div className="tooltip_popup popularity">
									  <h3>Popularity Rank</h3>
									  <p>{movie.popularity}</p>
									</div>
								  </span>
								  <span id="popularity_581f942492514168af0045ec" className="glyphicons glyphicons-cardio x1 popularity_rank"></span>
								  <span className="right">
									
								  </span>
								</div>
							</NavLink>
						</div>
						
						
						<div className="info">
						  <div className="wrapper">
							<div className="consensus tight">
							  <div className="outer_ring">
								<div className="user_score_chart 581f942492514168af0045ec" data-percent="65.0" data-track-color="#423d0f" data-bar-color="#d2d531">
								  <div className="percent">
									  <span className="icon icon-r65"></span>
								  </div>
								<canvas height="32" width="32"></canvas></div>
							  </div>
							</div>
							<div className="flex">
							  <NavLink to={`movie/${movie.id}`}>
								{movie.title}
							  </NavLink>
							  <span>December 21, 2018</span>
							</div>
						  </div>
						  <p className="overview">{movie.overview}</p>
						  <p className="view_more"><NavLink to={`movie/${movie.id}`}>More Info</NavLink></p>
						</div>
					</div>
				) : (
					<div className="item backdrop card" key={movie.id}>
						<div className="image_content">
							<NavLink to={`movie/${movie.id}`}>
								<img className="backdrop fade lazyautosizes lazyloaded" data-sizes="auto" src={`https://image.tmdb.org/t/p/w500_and_h282_face/${movie.backdrop_path}`} />
								
								<div className="meta" data-role="tooltip">
								  <span id="popularity_581f942492514168af0045ec_value" className="hide popularity_rank_value">
									<div className="tooltip_popup popularity">
									  <h3>Popularity Rank</h3>
									  <p>{movie.popularity}</p>
									</div>
								  </span>
								  <span id="popularity_581f942492514168af0045ec" className="glyphicons glyphicons-cardio x1 popularity_rank"></span>
								  <span className="right">
									
								  </span>
								</div>
							</NavLink>
						</div>
						
						<div className="content">
						  <div className="wrapper">
							<div className="consensus tight">
							  <div className="outer_ring">
								<div className="user_score_chart 581f942492514168af0045ec" data-percent="65.0" data-track-color="#423d0f" data-bar-color="#d2d531">
								  <div className="percent">
									  <span className="icon icon-r65"></span>
								  </div>
								<canvas height="32" width="32"></canvas></div>
							  </div>
							</div>
							<div className="flex">
							  <NavLink to={`movie/${movie.id}`}>{movie.title}</NavLink>
							  <span>December 21, 2018</span>
							</div>
						  </div>
						</div>						
					</div>
				)}
				</div>
			)
		})
		this.setState({movies: movies})
	})
	  
  }
 

  render() {
    const isDesktop = this.state.isDesktop;

    return (
      <div className="page_wrap discover_wrap">
		{isDesktop ? (
			<div className="results flex results_poster_card">
				{this.state.movies}
			</div>
		) : (
			<div className="results flex results_backdrop_card">
				{this.state.movies}
			</div>
		)}
	  </div>
    );
  }
}

export default Lista;
ReactDOM.render(<Lista />, document.getElementById("lista"));