import React, { Component} from 'react';
import Results from './Results.js';
import Nominations from './Nominations'
import axios from "axios";

import { render } from '@testing-library/react';

window.id = 0;
class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            keyword: '',
            nominees: [],
            loading: false
        }
    }

    componentDidMount() {
        
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

    addNominees = (name, year) => {
        const entry = {name: name,year: year, id: window.id++}
        this.state.nominees.push(entry)
        this.setState({ nominees: this.state.nominees})
    }

    removeNominees(id) {
        const remainder = this.state.nominees.filter((entry) => {
            if(entry.id !== id) return entry;
        });
        this.setState({nominees: remainder})
    }
    render() {
        console.log(this.state)
        return (
            
          <div className="App">
            <h1> The Shopppies</h1>
            <div className="searchBar">
                <h5>Movie title</h5>
                <input
                value={this.state.value}
                onChange={e => this.onChangeHandler(e)}
                placeholder="Search Movies"
                />  
            </div>
            <Results 
                resultList={this.state.movies} 
                keyword={this.state.keyword} 
                add={this.addNominees.bind(this)}
            />
            <Nominations
                nominees={this.state.nominees}
                remove={this.removeNominees.bind(this)}
            />
          </div>
        );
    }
    
}

export default HomePage;