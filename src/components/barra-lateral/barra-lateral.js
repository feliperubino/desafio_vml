import React from "react";
import ReactDOM from "react-dom";


class BarraLateral extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieId: "",
	  movie: {},
	  external: {},
	  isDesktop: false
    };

    this.updatePredicate = this.updatePredicate.bind(this);
	
  }
  
  updatePredicate() {
    this.setState({ isDesktop: window.outerWidth > 1024 }, () => {
		//console.log(this.state.isDesktop);
		
		this.fetchMovie();
		this.fetchExternal();
	});
  }
  
  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);	
	let movieId = window.location.pathname.split('/');
	movieId = movieId[2];
	this.setState({movieId: movieId})
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  fetchMovie() {
	let apiKey = "19fcabf9fa0e8b4b4f3f3e417322d797";
	let movieId = this.state.movieId;
	fetch('https://api.themoviedb.org/3/movie/'+movieId+'?api_key=' +apiKey + "&language=en-US")
	.then(results => {
		return results.json();
	}).then(data => {
		this.setState({movie: data})
	})
  }
  
  fetchExternal(){
	let apiKey = "19fcabf9fa0e8b4b4f3f3e417322d797";
	let movieId = this.state.movieId;
	fetch('https://api.themoviedb.org/3/movie/'+movieId+'/external_ids?api_key=' +apiKey + "")
	.then(results => {
		return results.json();
	}).then(data => {
		this.setState({external: data})
	})
  }
 

  render() {
    const isDesktop = this.state.isDesktop;
	const movie = this.state.movie;
	const external = this.state.external;

    return (
			<div>
				<section className="split_column">
					<div>
						<div className="column no_bottom_pad">
							<section className="facts left_column">
								<div className="social_links">
									<div>
										<a className="social_link k-state-border-down" title="" href={`https://www.facebook.com/${movie.homepage}`} target="_blank" rel="noopener" data-role="tooltip">
											<span className="social social-facebook"></span>
										</a>
									</div>
									<div>
										<a className="social_link" title="Visit Instagram" href={`https://instagram.com/${external.instagram_id}`} target="_blank" rel="noopener" data-role="tooltip">
											<span className="social social-instagram"></span>
										</a>
									</div>
									<div className="homepage">
										<a className="social_link k-state-border-down" title="" href={`${movie.homepage}`} target="_blank" rel="noopener" data-role="tooltip"><span className="glyphicons glyphicons-link"></span></a>
									</div>									
								</div>
								
								<h4><bdi>Facts</bdi></h4>
								<p><strong><bdi>Status</bdi></strong> {movie.status}</p>
								<p className="no_bottom_pad"><strong>Release Information</strong></p>
								<ul className="releases" data-role="tooltip">
									<li>
										{movie.release_date}
									</li>
								</ul>
								<p><strong><bdi>Original Language</bdi></strong> {movie.original_language}</p>
								<p><strong><bdi>Runtime</bdi></strong> {movie.runtime}</p>
								<p><strong><bdi>Budget</bdi></strong> {movie.budget}</p>
								<p><strong><bdi>Revenue</bdi></strong> {movie.revenue}</p>
									

							</section>	
						</div>
					</div>
				</section>
			</div>
    );
  }
}

export default BarraLateral;
//ReactDOM.render(<BarraLateral />, document.getElementById("columns"));