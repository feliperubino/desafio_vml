import React from "react";
import ReactDOM from "react-dom";

const displayNone = {
	display: 'none'
}

const displayNoneAbsolute = {
	display: 'none',
	position: 'absolute'
}

const Header = () => {
  return (
	<div className="page_wrap discover_wrap">
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
							<input dir="auto" id="search_v4" name="query" type="text" tabIndex="0" autoCorrect="off" autofill="off" autoComplete="off" spellCheck="false" placeholder="Search for a movie, tv show, person..." value="" data-role="autoComplete" className="k-input" role="textbox" aria-haspopup="true" aria-disabled="false" aria-readonly="false" aria-owns="search_v4_listbox" aria-autocomplete="list" />
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
	</div>
  
  );
};
export default Header;
ReactDOM.render(<Header />, document.getElementById("header"));