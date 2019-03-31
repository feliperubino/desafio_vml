import React from "react";
import ReactDOM from "react-dom";

import { NavLink } from 'react-router-dom';


class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
	  reviews: [],
	  movie: "",
	  isDesktop: false
    };

    this.updatePredicate = this.updatePredicate.bind(this);
  }
  
  updatePredicate() {
    this.setState({ isDesktop: window.outerWidth > 1024 }, () => {
		this.fetchReviews();
	});
  }
  
  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);	
	
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  fetchReviews(){
	let apiKey = "19fcabf9fa0e8b4b4f3f3e417322d797";
	let movieId = window.location.pathname.split('/');
	movieId = movieId[2];
	this.setState({movie: movieId});
	
	fetch('https://api.themoviedb.org/3/movie/'+movieId+'/reviews?api_key=' +apiKey + "")
	.then(results => {
		return results.json();
	}).then(data => {
		let reviews = data.results.map((review, index) => {
			if(index < 1){
				return(
					<div class="content" key={review.id}>              
						<div class="original_content">
						  <div class="review_container two">
							<div class="content two">							  
								<div class="inner_content">
								  <div class="content">
									<div class="content">
									  <div class="inner_content">
										<div class="card">
											<div class="grouped">
												<div class="avatar">
												  <a href="/u/cherry19">													
													  <img class="avatar lazyloaded" data-src="https://image.tmdb.org/t/p/w64_and_h64_face/djj4On0tOHFbdyDfsH0sCpwmtY9.jpg" data-srcset="https://image.tmdb.org/t/p/w64_and_h64_face/djj4On0tOHFbdyDfsH0sCpwmtY9.jpg 1x, https://image.tmdb.org/t/p/w128_and_h128_face/djj4On0tOHFbdyDfsH0sCpwmtY9.jpg 2x" alt="Del29" srcset="https://image.tmdb.org/t/p/w64_and_h64_face/djj4On0tOHFbdyDfsH0sCpwmtY9.jpg 1x, https://image.tmdb.org/t/p/w128_and_h128_face/djj4On0tOHFbdyDfsH0sCpwmtY9.jpg 2x" src="https://image.tmdb.org/t/p/w64_and_h64_face/djj4On0tOHFbdyDfsH0sCpwmtY9.jpg" />
												  </a>
												</div>
												
												<div class="info">          
													<div class="rating_wrapper">
														<h3><a href="/review/5c59b0a0c3a36830288a2e0b">A review by {review.author}</a></h3>
														<div class="rounded rating"><span class="glyphicons glyphicons-star x1"></span> 8.0</div>
													</div>												  
													<h5>Written by <a href="/u/cherry19">{review.author}</a></h5>
												</div>
											</div>
											<div class="teaser">
											  <p>{review.content}</p>
											</div>
										</div>
									  </div>
									</div>
									<p class="new_button">
										<a href={`/movie/${movieId}/reviews`}>Read All Reviews</a>
									</p>
								  </div>
								</div>
							</div>
							</div>
						</div>
					</div>
				)
			}
		})
		this.setState({reviews: reviews})
	})
  }
 

  render() {
    const isDesktop = this.state.isDesktop;
	const review = this.state.reviews;

    return (
		<section class="panel media_panel social_panel">
			<section class="review">
				<div class="menu">
				  <h3 dir="auto">Social</h3>
				  <ul>
					<li class="active" dir="auto"><a id="reviews" class="media_panel" href="#">Reviews</a></li>
				  </ul>
				</div>
				{review}
			</section>
		</section>
    );
  }
}

export default Reviews;