import React from "react";
import ReactDOM from "react-dom";

const displayNone = {
	display: 'none'
}

const displayNoneAbsolute = {
	display: 'none',
	position: 'absolute'
}

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false
    };

    this.updatePredicate = this.updatePredicate.bind(this);
  }
  
  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.outerWidth > 1024 });
  }

  render() {
    const isDesktop = this.state.isDesktop;

    return (
      <div>
        {isDesktop ? (
          
			<footer className="single_column discover lazyloaded">
			  <nav>
				<div className="join">
				  <img src="https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg" alt="The Movie Database (TMDb)" width="130" height="116"/>
					<a className="rounded" href="/account/signup?language=en">Join the Community</a>          
				</div>

				<div>
				  <h3>The Basics</h3>
				  <ul>
					<li><a href="/about?language=en">About TMDb</a></li>
					<li><a href="/about/staying-in-touch?language=en">Contact Us</a></li>
					<li><a href="/talk?language=en">Support Forums</a></li>
					<li><a href="/documentation/api?language=en">API</a></li>
					<li><a href="https://blog.themoviedb.org/" target="_blank" rel="noopener">Blog</a></li>
				  </ul>
				</div>
				<div>
				  <h3>Get Involved</h3>
				  <ul>
					<li><a href="/bible?language=en"><span className="glyphicons glyphicons-asterisk"></span> Contribution Bible</a></li>
					<li><a href="/apps?language=en">3rd Party Applications</a></li>
					<li><a href="/movie/new?language=en">Add New Movie</a></li>
					<li><a href="/tv/new?language=en">Add New TV Show</a></li>
				  </ul>
				</div>
				<div>
				  <h3>Community</h3>
				  <ul>
					<li><a href="/documentation/community/guidelines?language=en">Guidelines</a></li>
					<li><a href="/leaderboard?language=en">Leaderboard</a></li>
					<li><a href="/discuss?language=en">Forums</a></li>
					<li><a href="https://twitter.com/themoviedb" target="_blank" rel="noopener">Twitter</a></li>
					<li><a href="https://www.facebook.com/themoviedb" target="_blank" rel="noopener">Facebook</a></li>
				  </ul>
				</div>
				<div>
				  <h3>Legal</h3>
				  <ul>
					<li><a href="/documentation/website/terms-of-use?language=en">Terms of Use</a></li>
					<li><a href="/privacy-policy?language=en">Privacy Policy</a></li>
				  </ul>
				</div>
			  </nav>
			</footer>
		  
		  
        ) : (
			
			<footer className="single_column discover lazyloaded">
			  <nav>
				<div className="join">
				  <img src="https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg" alt="The Movie Database (TMDb)" width="130" height="116" />
				  <a className="rounded" href="/account/signup?language=en">Join the Community</a>          
				</div>

				<div>
				  <h3>The Basics</h3>
				  <ul>
					<li><a href="/about?language=en">About TMDb</a></li>
					<li><a href="/about/staying-in-touch?language=en">Contact Us</a></li>
					<li><a href="/talk?language=en">Support Forums</a></li>
					<li><a href="/documentation/api?language=en">API</a></li>
					<li><a href="https://blog.themoviedb.org/" target="_blank" rel="noopener">Blog</a></li>
				  </ul>
				</div>
				<div>
				  <h3>Get Involved</h3>
				  <ul>
					<li><a href="/bible?language=en"><span className="glyphicons glyphicons-asterisk"></span> Contribution Bible</a></li>
					<li><a href="/apps?language=en">3rd Party Applications</a></li>
					<li><a href="/movie/new?language=en">Add New Movie</a></li>
					<li><a href="/tv/new?language=en">Add New TV Show</a></li>
				  </ul>
				</div>
				<div>
				  <h3>Community</h3>
				  <ul>
					<li><a href="/documentation/community/guidelines?language=en">Guidelines</a></li>
					<li><a href="/leaderboard?language=en">Leaderboard</a></li>
					<li><a href="/discuss?language=en">Forums</a></li>
					<li><a href="https://twitter.com/themoviedb" target="_blank" rel="noopener">Twitter</a></li>
					<li><a href="https://www.facebook.com/themoviedb" target="_blank" rel="noopener">Facebook</a></li>
				  </ul>
				</div>
				<div>
				  <h3>Legal</h3>
				  <ul>
					<li><a href="/documentation/website/terms-of-use?language=en">Terms of Use</a></li>
					<li><a href="/privacy-policy?language=en">Privacy Policy</a></li>
				  </ul>
				</div>
			  </nav>
			</footer>
		  
        )}
      </div>
    );
  }
}

export default Footer;
//ReactDOM.render(<Footer />, document.getElementById("footer"));