import React from "react";
import ReactDOM from "react-dom";


const displayNone = {
	display: 'none'
}

const displayNoneAbsolute = {
	display: 'none',
	position: 'absolute'
}

class Header extends React.Component {
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
      <div className="page_wrap discover_wrap">
        {isDesktop ? (
          
			<header className="normal">
			
				<div className="content">
					<div className="sub_media">
						<ul className="small right">
							<li><a href="/apps">Apps</a></li>
							<li><a href="/discuss">Forums</a></li>
							<li><a href="/leaderboard">Leaderboard</a></li>
							<li><a href="/contribute">Contribute</a></li>
							<li><a href="/documentation/api">API</a></li>
							<li><a href="/talk">Support</a></li>
						</ul>
						<div className="left">
							<ul className="primary">
							   <li className="logo">
								  <a href="/">
								  <img src="https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg" alt="The Movie Database (TMDb)" width="81" height="72" />
								  </a>
							   </li>
							   <li>
								  <a href="/discover">Discover</a>
								  <ul className="sub_menu discover hide">
									 <li><a href="/discover/movie">Movies</a></li>
									 <li><a href="/discover/tv">TV Shows</a></li>
								  </ul>
							   </li>
							   <li>
								  <a href="/movie">Movies</a>
								  <ul className="sub_menu movie hide" style={displayNone}>
									 <li><a href="/movie">Popular</a></li>
									 <li><a href="/movie/top-rated">Top Rated</a></li>
									 <li><a href="/movie/upcoming">Upcoming</a></li>
									 <li><a href="/movie/now-playing">Now Playing</a></li>
								  </ul>
							   </li>
							   <li>
								  <a href="/tv">TV Shows</a>
								  <ul className="sub_menu tv hide" style={displayNone}>
									 <li><a href="/tv">Popular</a></li>
									 <li><a href="/tv/top-rated">Top Rated</a></li>
									 <li><a href="/tv/on-the-air">On TV</a></li>
									 <li><a href="/tv/airing-today">Airing Today</a></li>
								  </ul>
							   </li>
							   <li>
								  <a href="/person">People</a>
								  <ul className="sub_menu person hide" style={displayNone}>
									 <li><a href="/person">Popular People</a></li>
								  </ul>
							   </li>
							</ul>
						</div>
						<div className="right">
							<ul className="primary">
							   <li>
								  <div className="glyph_wrapper">
									 <a className="glyph new_icon no_click" href="#">
										<span className="glyphicons glyphicons-plus"></span>
										<div className="rollover">
										   <p>Can't find a movie or TV show? Login to create it.</p>
										</div>
									 </a>
								  </div>
							   </li>
							   <li className="translate" data-role="tooltip">
								  <div>en</div>
							   </li>
							   <li><a href="/login">Login</a></li>
							   <li><a href="/account/signup">Sign Up</a></li>
							</ul>
						</div>
					</div>
				</div>
			   <div className="search_bar">
				  <section className="search">
					 <div className="sub_media">
						<form id="search_form" action="/search" method="get" acceptCharset="utf-8">
						   <span tabIndex="-1" role="presentation" className="k-widget k-autoComplete k-header k-autoComplete-clearable k-state-default">
								<input dir="auto" id="search_v4" name="query" type="text" tabIndex="0" autoCorrect="off" autofill="off" autoComplete="off" spellCheck="false" placeholder="Search for a movie, tv show, person..." data-role="autoComplete" className="k-input" role="textbox" aria-haspopup="true" aria-disabled="false" aria-readonly="false" aria-owns="search_v4_listbox" aria-autocomplete="list" />
								<span unselectable="on" className="k-icon k-clear-value k-i-close k-hidden" title="clear" role="button" tabIndex="-1"></span>
								<span className="k-icon k-i-loading" style={displayNone}></span>
							</span>
						   <input type="submit" disabled="" />
						</form>
					 </div>
				  </section>
			   </div>
			   <div className="k-list-container k-popup k-group k-reset" id="search_v4-list" data-role="popup" aria-hidden="true" style={displayNoneAbsolute}>
				  <div className="k-group-header" style={displayNone}></div>
				  <div className="k-list-scroller" unselectable="on">
					 <ul unselectable="on" className="k-list k-reset" tabIndex="-1" aria-hidden="true" id="search_v4_listbox" aria-live="polite" data-role="staticlist" role="listbox">
					 </ul>
				  </div>
				  <div className="k-nodata" style={displayNone}>
					 <div></div>
				  </div>
			   </div>
				
			</header>
		  
		  
        ) : (
			<div>
				<div className="mobile_menu">
					<ul className="primary">
					  <li>
						<a className="no_click" href="/discover?language=en">Discover</a>
						<ul className="sub_menu discover hide">
						  <li><a href="/discover/movie?language=en">Movies</a></li>
						  <li><a href="/discover/tv?language=en">TV Shows</a></li>
						</ul>
					  </li>
					  <li>
						<a className="no_click" href="/movie?language=en">Movies</a>
						<ul className="sub_menu movie hide">
						  <li><a href="/movie?language=en">Popular</a></li>
						  <li><a href="/movie/top-rated?language=en">Top Rated</a></li>
						  <li><a href="/movie/upcoming?language=en">Upcoming</a></li>
						  <li><a href="/movie/now-playing?language=en">Now Playing</a></li>
						</ul>
					  </li>
					  <li>
						<a className="no_click" href="/tv?language=en">TV Shows</a>
						<ul className="sub_menu tv hide">
						  <li><a href="/tv?language=en">Popular</a></li>
						  <li><a href="/tv/top-rated?language=en">Top Rated</a></li>
						  <li><a href="/tv/on-the-air?language=en">On TV</a></li>
						  <li><a href="/tv/airing-today?language=en">Airing Today</a></li>
						</ul>
					  </li>
					  <li>
						<a className="no_click" href="/person?language=en">People</a>
						<ul className="sub_menu person hide">
						  <li><a href="/person?language=en">Popular People</a></li>
						</ul>
					  </li>
					  <li>
						<a href="/discuss?language=en">Discussions</a>
					  </li>
					</ul>

					<ul className="small">
					  <li><a href="/bible?language=en">Contribution Bible</a></li>
					  <li><a href="/apps?language=en">Apps</a></li>
					  <li><a href="/discuss?language=en">Forums</a></li>
					  <li><a href="/leaderboard?language=en">Leaderboard</a></li>
					  <li><a href="/contribute?language=en">Contribute</a></li>
					  <li><a href="/documentation/api?language=en">API</a></li>
					  <li><a href="/talk?language=en">Support</a></li>
					  <li><a href="/about?language=en">About</a></li>
					</ul>

					<ul className="small">
						<li><a href="/login?language=en">Login</a></li>
					</ul>
				</div>
				<header className="normal smaller">
				  <div className="content">
					<div className="sub_media">
					  

					  <div className="left">
						<ul className="primary">
						  
							<div className="wrapper false">
							  <li className="hamburger"><a className="toggle_menu" href="#"><span className="glyphicons glyphicons-menu-hamburger x1"></span></a></li>
							</div>
							<li className="logo">
							  <a href="/?language=en">
								<img src="https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg" alt="The Movie Database (TMDb)" width="45" height="40" />
							  </a>
							</li>
							
							  <li className="user"><a className="no_click" href="/login?language=en" data-role="tooltip"><span className="glyphicons glyphicons-user x1"></span></a></li>
							
						  
						</ul>
					  </div>

					  
					</div>
				  </div>
				  <div className="search_bar">
					<section className="search">
					  <div className="sub_media">
						<form id="search_form" action="/search?language=en" method="get" acceptCharset="utf-8">
						  
						  <input type="hidden" name="language" value="en-US" />
						  
						  <span tabIndex="-1" role="presentation" className="k-widget k-autoComplete k-header k-autoComplete-clearable k-state-default" ><input dir="auto" id="search_v4" name="query" type="text" tabIndex="0" autoCorrect="off" autofill="off" autoComplete="off" spellCheck="false" placeholder="Search" data-role="autoComplete" className="k-input" role="textbox" aria-haspopup="true" aria-disabled="false" aria-readonly="false" aria-owns="search_v4_listbox" aria-autocomplete="list" /><span unselectable="on" className="k-icon k-clear-value k-i-close k-hidden" title="clear" role="button" tabIndex="-1"></span><span className="k-icon k-i-loading" style={displayNone}></span></span>
						  <input type="submit" disabled="" />
						</form>
					  </div>
					</section>
				  </div>
				  <div className="k-list-container k-popup k-group k-reset" id="search_v4-list" data-role="popup" aria-hidden="true" style={displayNoneAbsolute}><div className="k-group-header" style={displayNone}></div><div className="k-list-scroller" unselectable="on"><ul unselectable="on" className="k-list k-reset" tabIndex="-1" aria-hidden="true" id="search_v4_listbox" aria-live="polite" data-role="staticlist" role="listbox"></ul></div><div className="k-nodata" style={displayNone}><div></div></div></div>
				</header>
			</div>
		  
        )}
      </div>
    );
  }
}

export default Header;
ReactDOM.render(<Header />, document.getElementById("header"));