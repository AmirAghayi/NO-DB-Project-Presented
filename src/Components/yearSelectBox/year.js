import React, { Component } from 'react';
import axios from 'axios';

import SearchButton from '../searchButton/searchButton';

class YearButton extends Component{



render(){
    return(

        <div>  
            <input className="input" onChange={(e) => this.props.handleSearchTextChange(e.target.value)}>
            </input>
            <SearchButton className="searchButton" onClick={() => this.props.getMovies()} type="submit">Search</SearchButton> 
            <select onChange={(e) => this.props.handleYearChange(e.target.value)}>
                <option value='2010'>2010</option>
                <option value='2011'>2011</option>
                <option value='2012'> 2012</option>
                <option value='2013'>2013</option>
                <option value='2014'>2014</option>
                <option value='2015'>2015</option>
                <option value='2016'>2016</option>
                <option value='2017'>2017</option>
                <option value='2018'>2018</option>
                <option value='2019'>2019</option>
            </select>
        
        {/* Add click event on search button to send the selected option */}
       

        </div>
        

    );



}

}



export default YearButton;