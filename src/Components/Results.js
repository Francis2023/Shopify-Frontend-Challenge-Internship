import React from 'react';


const Results = ({resultList, keyword,add}) => {

    return (
        <div className="movies">
            <h4>Results for "{keyword}"</h4>
            <div>
                { resultList.map((e) => (
                    <div key={e.imdbID} className="movieCard">
                        <h6>{e.Title}  </h6>
                        <h6> ({e.Year})</h6>
                        <button className="button" onClick={() => {add(e.Title, e.Year)}}>
                            Nominate
                        </button>
                    </div>
                ))}
                
            </div>
            
                
            
        </div>
        
        
    )
}

export default Results