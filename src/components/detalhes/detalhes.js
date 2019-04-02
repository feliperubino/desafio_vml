import React from "react";
import ReactDOM from "react-dom";

import { NavLink } from 'react-router-dom';


class Detalhes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
	  crew: [],
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
		this.fetchMovies();
		this.fetchCredits();
	});
  }
  
  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
	
	
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  fetchMovies() {
	let pageType = window.location.pathname.split('/');
	pageType = pageType[1];
	
	if(pageType == ""){
		pageType = "movie";
	} 
	 
	let apiKey = "19fcabf9fa0e8b4b4f3f3e417322d797";
	let movieId = window.location.pathname.split('/');
	movieId = movieId[2];
	fetch('https://api.themoviedb.org/3/'+pageType+'/'+movieId+'?api_key=' +apiKey + "&language=en-US")
	.then(results => {
		return results.json();
	}).then(data => {
		this.setState({movie: data})
	})
	  
  }
  
  fetchCredits(){
	let apiKey = "19fcabf9fa0e8b4b4f3f3e417322d797";
	let movieId = window.location.pathname.split('/');
	movieId = movieId[2];
	
	let pageType = window.location.pathname.split('/');
	pageType = pageType[1];
	
	if(pageType == ""){
		pageType = "movie";
	}
	  	
	
	fetch('https://api.themoviedb.org/3/'+pageType+'/'+movieId+'/credits?api_key=' +apiKey + "")
	.then(results => {
		return results.json();
	}).then(data => {
		let crew_movie = data.crew.map((crew) => {
			if (crew.job == "Director" || crew.job == "Novel" || crew.job == "Screenplay"){
				return(
					<li className="profile" key={crew.credit_id}>
						<p><a href="#">{crew.name}</a></p>
						<p className="character">{crew.job}</p>
					</li>					
				)
			}
		})
		this.setState({crew: crew_movie})
	})
  }
 

  render() {
    const isDesktop = this.state.isDesktop;
	const movie = this.state.movie;
	
	let pageType = window.location.pathname.split('/');
	pageType = pageType[1];
	
	if(pageType == ""){
		pageType = "movie";
	}

    return (
		<section className="inner_content movie_content backdrop poster">
			<div className="custom_bg">
				<div className="single_column">
				  
					{isDesktop ? (
						  <section className="images inner">
							<div className="poster">
							  <div className="image_content">
									<a className="no_click progressive" href={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}>
										<img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`} />
									</a>
							  </div>
							  <div className="zoom">
								<a href="#"><span className="glyphicons glyphicons-zoom-in x1"></span> Expand</a>
							  </div>
							</div>
							
							<div className="header_poster_wrapper">
							  <section className="header poster">
								<div className="title" dir="auto">
									<span><a href="#"><h2 className="9">{movie.title}</h2></a>
									<span className="release_date">({movie.release_date})</span></span>
								</div>
								<ul className="auto actions">
									<li className="chart">
									  <div className="consensus">
										<div className="outer_ring">
										  <div className="user_score_chart" data-percent="65.0" data-track-color="#423d0f" data-bar-color="#d2d531">
											<div className="percent">						  
												<span className="icon icon-r65"></span>						  
											</div>
										  <canvas height="60" width="60"></canvas></div>
										</div>
									  </div>
									  <div className="text">User<br />Score</div>
									</li>
									<li className="tooltip use_tooltip list tooltip_hover" title="Login to create and edit custom lists" data-role="tooltip">
									  <a className="no_click" href="#"><span className="glyphicons glyphicons-list x1"></span></a>
									</li>
									<li className="tooltip use_tooltip" title="Login to add this movie to your favorite list" data-role="tooltip">
									  <a id="favourite" className="no_click add_to_account_list favourite false" href="#"><span className="glyphicons glyphicons-heart x1"></span></a>
									</li>
									<li className="tooltip use_tooltip" title="Login to add this movie to your watchlist" data-role="tooltip">
									  <a id="watchlist" className="no_click add_to_account_list watchlist false" href="#"><span className="glyphicons glyphicons-bookmark x1"></span></a>
									</li>
									<li className="tooltip use_tooltip rating tooltip_hover" title="Login to rate this movie" data-role="tooltip">
									  <a id="rate_it" className="no_click rating false" href="#"><span className="glyphicons glyphicons-star x1"></span></a>
									</li>
									<li className="video none">
									  <a className="no_click play_trailer" href="#" data-id="lcwmDAYt22k" data-title="Play Trailer"><span className="glyphicons glyphicons-play"></span> Play Trailer</a>
									</li>
								</ul>
								<div className="header_info">
								  <h3 dir="auto">Overview</h3>
								  <div className="overview" dir="auto">
									{movie.overview}
								  </div>
								  <h3 className="featured" dir="auto">Featured Crew</h3>
								  <ol className="people no_image">
									{this.state.crew}
								  </ol>
								</div>
								
							  </section>
							</div>
								
						  </section>
					  ) : (
					  
						<section className="images inner">
							<div className="poster">
							  <div className="image_content">
								<img className="backdrop fade backdrop fade lazyautosizes lazyloaded" src={`https://image.tmdb.org/t/p/w500_and_h282_face/${movie.backdrop_path}`} />
								<a className="no_click progressive poster" href={`https://image.tmdb.org/t/p/w116_and_h174_face/${movie.poster_path}`}>
									<img src={`https://image.tmdb.org/t/p/w116_and_h174_face/${movie.poster_path}`} />
								</a>
							  </div>
							  <div className="zoom">
								  <a href="#"><span className="glyphicons glyphicons-zoom-in x1"></span> Expand</a>
							  </div>
							</div>
							<div className="header_poster_wrapper">
							  <section className="header poster">
								<div className="title" dir="auto">
									<div className="mobile_header small">
									  <div className="content">
										<a href="#">
											<h2 className="42">{movie.title} <span className="release_date">{movie.release_date}</span></h2>
										</a>
									  </div>
									</div>
								</div>
								<div className="header_info">
								  <h3 dir="auto">Overview</h3>
								  <div className="overview" dir="auto">
									  <p>{movie.overview}</p>
								  </div>
								  <h3 className="featured" dir="auto">Featured Crew</h3>
								  <ol className="people no_image"> 
									{this.state.crew}
								  </ol>
								</div>
							  </section>
							</div>
						</section>
						
					  
					  )}
				</div>
			</div>
		</section>
    );
  }
}

export default Detalhes;
//ReactDOM.render(<Detalhes />, document.getElementById("detalhes"));