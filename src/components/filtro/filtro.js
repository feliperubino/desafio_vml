import React from "react";
import ReactDOM from "react-dom";

import { NavLink } from 'react-router-dom';

const displayNone = {
	display: 'none',
	
}

const width100 = {
	width: 100
}

const width100None = {
	display: 'none',
	width: 100
}

const width200 = {
	width: 200
}

const width200None = {
	display: 'none',
	width: 200
}

const width182 = {
	width: 182.406
}
const width162 = {
	width: 162.766
}

const width260 = {
	width: 260
}

const width260None = {
	display: 'none',
	width: 260
}

const filters = {	
	position: 'absolute',
	visibility: 'hidden',
	top: '-3333px',
	left: '-3333px'
}

const clearLeft = {
	clear: 'left'
}

class Filtro extends React.Component {
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
	
	let pageType = window.location.pathname.split('/');
	pageType = pageType[1];
	
	let selectedMovie = "";
	let selectedTV = "";
	if(pageType == "" || pageType == "movie"){
		selectedMovie = "movie selected";
		selectedTV = "tv";
	} else {
		selectedMovie = "selected";
		selectedTV = "tv selected";
	}

    return (
      
		<div>
			<h2>Discover New Movies &amp; TV Shows
				<span className="right">
					
					<a href="/movie" className={`${selectedMovie}`}>Movies</a>
					&nbsp;&nbsp;
					<a href="tv" className={`${selectedTV}`}>TV</a>
					
				</span>
			</h2>
			
			<form id="discover">
			  <input id="vote_count" type="hidden" name="vote_count.gte" value="0" />
			  <input id="list_style" type="hidden" name="list_style" value="1" />

			  <span className="search_element full">
				<label htmlFor="primary_release_year">Year</label>
				<span title="" className="k-widget k-dropdown k-header" unselectable="on" role="listbox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-owns="year_listbox" aria-live="polite" aria-disabled="false" aria-busy="false" aria-activedescendant="16bd8afd-a7e5-44ab-ac29-e15a49871b5a" style={width100}><span unselectable="on" className="k-dropdown-wrap k-state-default"><span unselectable="on" className="k-input">2018</span><span unselectable="on" className="k-select" aria-label="select"><span className="k-icon k-i-arrow-60-down"></span></span></span><select id="year" name="primary_release_year" style={width100None} data-role="dropdownlist"><option value="0">None</option><option value="2019">2019</option><option value="2018">2018</option><option value="2017">2017</option><option value="2016">2016</option><option value="2015">2015</option><option value="2014">2014</option><option value="2013">2013</option><option value="2012">2012</option><option value="2011">2011</option><option value="2010">2010</option><option value="2009">2009</option><option value="2008">2008</option><option value="2007">2007</option><option value="2006">2006</option><option value="2005">2005</option><option value="2004">2004</option><option value="2003">2003</option><option value="2002">2002</option><option value="2001">2001</option><option value="2000">2000</option><option value="1999">1999</option><option value="1998">1998</option><option value="1997">1997</option><option value="1996">1996</option><option value="1995">1995</option><option value="1994">1994</option><option value="1993">1993</option><option value="1992">1992</option><option value="1991">1991</option><option value="1990">1990</option><option value="1989">1989</option><option value="1988">1988</option><option value="1987">1987</option><option value="1986">1986</option><option value="1985">1985</option><option value="1984">1984</option><option value="1983">1983</option><option value="1982">1982</option><option value="1981">1981</option><option value="1980">1980</option><option value="1979">1979</option><option value="1978">1978</option><option value="1977">1977</option><option value="1976">1976</option><option value="1975">1975</option><option value="1974">1974</option><option value="1973">1973</option><option value="1972">1972</option><option value="1971">1971</option><option value="1970">1970</option><option value="1969">1969</option><option value="1968">1968</option><option value="1967">1967</option><option value="1966">1966</option><option value="1965">1965</option><option value="1964">1964</option><option value="1963">1963</option><option value="1962">1962</option><option value="1961">1961</option><option value="1960">1960</option><option value="1959">1959</option><option value="1958">1958</option><option value="1957">1957</option><option value="1956">1956</option><option value="1955">1955</option><option value="1954">1954</option><option value="1953">1953</option><option value="1952">1952</option><option value="1951">1951</option><option value="1950">1950</option><option value="1949">1949</option><option value="1948">1948</option><option value="1947">1947</option><option value="1946">1946</option><option value="1945">1945</option><option value="1944">1944</option><option value="1943">1943</option><option value="1942">1942</option><option value="1941">1941</option><option value="1940">1940</option><option value="1939">1939</option><option value="1938">1938</option><option value="1937">1937</option><option value="1936">1936</option><option value="1935">1935</option><option value="1934">1934</option><option value="1933">1933</option><option value="1932">1932</option><option value="1931">1931</option><option value="1930">1930</option><option value="1929">1929</option><option value="1928">1928</option><option value="1927">1927</option><option value="1926">1926</option><option value="1925">1925</option><option value="1924">1924</option><option value="1923">1923</option><option value="1922">1922</option><option value="1921">1921</option><option value="1920">1920</option><option value="1919">1919</option><option value="1918">1918</option><option value="1917">1917</option><option value="1916">1916</option><option value="1915">1915</option><option value="1914">1914</option><option value="1913">1913</option><option value="1912">1912</option><option value="1911">1911</option><option value="1910">1910</option><option value="1909">1909</option><option value="1908">1908</option><option value="1907">1907</option><option value="1906">1906</option><option value="1905">1905</option><option value="1904">1904</option><option value="1903">1903</option><option value="1902">1902</option><option value="1901">1901</option><option value="1900">1900</option></select></span>
				
			  </span>

			  <span className="search_element full">
				<label htmlFor="sort_by" id="sort_by_label">Sort By</label>
				<span title="" className="k-widget k-dropdown k-header" unselectable="on" role="listbox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-owns="sort_by_listbox" aria-labelledby="sort_by_label" aria-live="polite" aria-disabled="false" aria-busy="false" aria-activedescendant="186ebe17-9a84-44ab-b90a-722509a3e8a9" style={width200}><span unselectable="on" className="k-dropdown-wrap k-state-default"><span unselectable="on" className="k-input">Popularity Descending</span><span unselectable="on" className="k-select" aria-label="select"><span className="k-icon k-i-arrow-60-down"></span></span></span><select id="sort_by" name="sort_by" style={width200None} data-role="dropdownlist"><option value="popularity.desc">Popularity Descending</option><option value="popularity.asc">Popularity Ascending</option><option value="vote_average.desc">Rating Descending</option><option value="vote_average.asc">Rating Ascending</option><option value="primary_release_date.desc">Release Date Descending</option><option value="primary_release_date.asc">Release Date Ascending</option><option value="title.asc">Title (A-Z)</option><option value="title.desc">Title (Z-A)</option></select></span>
			  </span>

			  <span className="search_element full">
				<label htmlFor="with_genres" id="with_genres_label">Genres</label>
				<div className="k-widget k-multiselect no_pad k-multiselect-clearable" unselectable="on" title="" style={width260}><div className="k-multiselect-wrap k-floatwrap" unselectable="on"><ul role="listbox" unselectable="on" className="k-reset" id="with_genres_taglist"></ul><input className="k-input k-readonly" style={width162} accessKey="" autoComplete="off" role="listbox" title="" aria-expanded="false" tabIndex="0" aria-describedby="with_genres_taglist" aria-owns="with_genres_taglist with_genres_listbox" aria-labelledby="with_genres_label" aria-disabled="false" aria-busy="false" /><span unselectable="on" className="k-icon k-clear-value k-i-close k-hidden" title="clear" role="button" tabIndex="-1"></span><span className="k-icon k-i-loading k-hidden"></span></div><select id="with_genres" className="no_pad" style={width260None} name="with_genres[]" multiple="multiple" data-role="multiselect" aria-disabled="false"><option value="28">Action</option><option value="12">Adventure</option><option value="16">Animation</option><option value="35">Comedy</option><option value="80">Crime</option><option value="99">Documentary</option><option value="18">Drama</option><option value="10751">Family</option><option value="14">Fantasy</option><option value="36">History</option><option value="27">Horror</option><option value="10402">Music</option><option value="9648">Mystery</option><option value="10749">Romance</option><option value="878">Science Fiction</option><option value="10770">TV Movie</option><option value="53">Thriller</option><option value="10752">War</option><option value="37">Western</option></select><span style={filters}>Filter by genres...</span></div>
			  </span>
			  <span className="search_element">
				  <label htmlFor="with_keywords" id="with_keywords_label">Keywords</label>
				  <div className="k-widget k-multiselect k-multiselect-clearable" unselectable="on" title="" style={width260}><div className="k-multiselect-wrap k-floatwrap" unselectable="on"><ul role="listbox" unselectable="on" className="k-reset" id="with_keywords_taglist"></ul><input className="k-input k-readonly" style={width182} accessKey="" autoComplete="off" role="listbox" title="" aria-expanded="false" tabIndex="0" aria-describedby="with_keywords_taglist" aria-owns="with_keywords_taglist with_keywords_listbox" aria-labelledby="with_keywords_label" aria-disabled="false" /><span unselectable="on" className="k-icon k-clear-value k-i-close k-hidden" title="clear" role="button" tabIndex="-1"></span><span className="k-icon k-i-loading k-hidden"></span></div><select id="with_keywords" style={width260None} name="with_keywords[]" multiple="multiple" data-role="multiselect" aria-disabled="false">
					
				  </select><span style={filters}>Filter by keywords...</span></div>
			  </span>
			  
			  <div style={clearLeft}></div>
			</form>
		</div>
	  
    );
  }
}


export default Filtro;
//ReactDOM.render(<Filtro />, document.getElementById("filtro"));

