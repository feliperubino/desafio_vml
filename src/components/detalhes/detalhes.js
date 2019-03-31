import React from "react";
import ReactDOM from "react-dom";

import { NavLink } from 'react-router-dom';


class Detalhes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
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
	let movieId = window.location.pathname.split('/');
	movieId = movieId[2];
	fetch('https://api.themoviedb.org/3/movie/'+movieId+'?api_key=' +apiKey + "&language=en-US")
	.then(results => {
		return results.json();
	}).then(data => {
		this.setState({movie: data})
	})
	  
  }
 

  render() {
    const isDesktop = this.state.isDesktop;
	const movie = this.state.movie;

    return (
		<div>
			<div className="custom_bg">
				<div className="single_column">
				  

				  <section className="images inner">
					<div className="poster">
					  <div className="image_content">
							<a class="no_click progressive" href={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}>
								<img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`} />
							</a>
					  </div>
					  <div class="zoom">
						<a href="#"><span class="glyphicons glyphicons-zoom-in x1"></span> Expand</a>
					  </div>
					</div>
					
					<div class="header_poster_wrapper">
					  <section class="header poster">
						<div class="title" dir="auto">
							<span><a href="#"><h2 class="9">{movie.title}</h2></a>
							<span class="release_date">{movie.release_date}</span></span>
						</div>
						<ul class="auto actions">
							<li class="chart">
							  <div class="consensus">
								<div class="outer_ring">
								  <div class="user_score_chart" data-percent="65.0" data-track-color="#423d0f" data-bar-color="#d2d531">
									<div class="percent">						  
										<span class="icon icon-r65"></span>						  
									</div>
								  <canvas height="60" width="60"></canvas></div>
								</div>
							  </div>
							  <div class="text">User<br />Score</div>
							</li>
							<li class="tooltip use_tooltip list tooltip_hover" title="Login to create and edit custom lists" data-role="tooltip">
							  <a class="no_click" href="#"><span class="glyphicons glyphicons-list x1"></span></a>
							</li>
							<li class="tooltip use_tooltip" title="Login to add this movie to your favorite list" data-role="tooltip">
							  <a id="favourite" class="no_click add_to_account_list favourite false" href="#"><span class="glyphicons glyphicons-heart x1"></span></a>
							</li>
							<li class="tooltip use_tooltip" title="Login to add this movie to your watchlist" data-role="tooltip">
							  <a id="watchlist" class="no_click add_to_account_list watchlist false" href="#"><span class="glyphicons glyphicons-bookmark x1"></span></a>
							</li>
							<li class="tooltip use_tooltip rating tooltip_hover" title="Login to rate this movie" data-role="tooltip">
							  <a id="rate_it" class="no_click rating false" href="#"><span class="glyphicons glyphicons-star x1"></span></a>
							</li>
							<li class="video none">
							  <a class="no_click play_trailer" href="#" data-id="lcwmDAYt22k" data-title="Play Trailer"><span class="glyphicons glyphicons-play"></span> Play Trailer</a>
							</li>
						</ul>
						<div class="header_info">
						  <h3 dir="auto">Overview</h3>
						  <div class="overview" dir="auto">
							{movie.overview}
						  </div>
						</div>
						
					  </section>
					</div>
						
				  </section>
				</div>
			</div>
		</div>
    );
  }
}

export default Detalhes;
//ReactDOM.render(<Detalhes />, document.getElementById("detalhes"));