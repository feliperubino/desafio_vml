import React from "react";
import ReactDOM from "react-dom";

import { NavLink } from 'react-router-dom';


class Elenco extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
	  cast: [],
	  movie: "",
	  isDesktop: false
    };

    this.updatePredicate = this.updatePredicate.bind(this);
  }
  
  updatePredicate() {
    this.setState({ isDesktop: window.outerWidth > 1024 }, () => {
		this.fetchCast();
	});
  }
  
  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);	
	
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  fetchCast(){
	let apiKey = "19fcabf9fa0e8b4b4f3f3e417322d797";
	let movieId = window.location.pathname.split('/');
	movieId = movieId[2];
	this.setState({movie: movieId});
	
	fetch('https://api.themoviedb.org/3/movie/'+movieId+'/credits?api_key=' +apiKey + "")
	.then(results => {
		return results.json();
	}).then(data => {
		let cast_movie = data.cast.map((cast, index) => {
			if(index < 5){
				return(
					<li className="card" key={cast.credit_id}>
						<a href={`https://www.themoviedb.org/person/${cast.id}`}>
							<img className="profile fade lazyautosizes lazyloaded" src={`https://image.tmdb.org/t/p/w138_and_h175_face/${cast.profile_path}`} />
						</a>
						<p><a href={`https://www.themoviedb.org/person/${cast.id}`}>{cast.name}</a></p>
						<p className="character">{cast.character}</p>
					</li>
				)
			}
		})
		this.setState({cast: cast_movie})
	})
  }
 

  render() {
    const isDesktop = this.state.isDesktop;
	const movie = this.state.movie;

    return (
		  <div>
			<section className="panel top_billed scroller">
			  <h3 dir="auto">Top Billed Cast</h3>
			  <ol className="people scroller">
				{this.state.cast}
				{isDesktop ? (
				""
				) : (
				<li className="view_more">
					<p><a href="/movie/166428-how-to-train-your-dragon-the-hidden-world/cast">View More <span className="glyphicons glyphicons-circle-arrow-right"></span></a></p>
				</li>
				)}
			  </ol>
			  <p className="new_button"><a href={`https://www.themoviedb.org/movie/${this.state.movie}/cast`}>Full Cast &amp; Crew</a></p>
			</section>
		  </div>
    );
  }
}

export default Elenco;