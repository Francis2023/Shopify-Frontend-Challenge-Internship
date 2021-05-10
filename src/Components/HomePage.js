import React, { Component} from 'react';
import Results from './Results.js';
import Nominations from './Nominations'
import axios from "axios";

import { render } from '@testing-library/react';

class HomePage extends Component {

    state = {
        movies: [],
        keyword: '',
        nominees: [],
        loading: false
    }
    
    fetchData = async keyword => {
        this.setState({loading: true})
        axios
            .get(`http://www.omdbapi.com/?i=tt3896198&apikey=1e22921f&s=${keyword}`)
            .then(response => {
                const results = response.data.Search
                if (results) {
                    this.setState({movies: results, loading: false})
                    this.setState({keyword: keyword})
                }
              
                console.log(this.state.movies)
            })
            .catch(error => console.log(error));
    }

    onChangeHandler = async e => {
        this.fetchData(e.target.value)
    }

    // addNominees = (name, year) => {
    //     this.setState({
    //         nominees: this.state.nominees.concat({name, year})
    //     })
    // }
    render() {
        console.log(this.state)
        return (
            
          <div className="App">
            <h1> The Shopppies</h1>
            <div className="searchBar">
                <h4>Movie title</h4>
                <input
                value={this.state.value}
                onChange={e => this.onChangeHandler(e)}
                placeholder="Search Movies"
                />  
            </div>
            <Results 
                resultList={this.state.movies} 
                keyword={this.state.keyword} 
                nominees={this.state.nominees}
            />
            <Nominations
                nominees={this.state.nominees}
            />
          </div>
        );
    }
    
}

export default HomePage;