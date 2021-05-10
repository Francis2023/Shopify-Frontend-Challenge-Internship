import React from 'react';


const Results = (props) => {

    const list = props.resultList
    const word = props.keyword
    const nominees = props.nominees

    const onClickHandler = (name, year) => {
        nominees.push({name, year})
    }
    console.log(nominees)

    return (
        <div>
            <h6>Results for "{word}"</h6>
            <div>
                { list.map((e) => (
                    <div key={e.imdbID}>
                        <h5>{e.Title}</h5>
                        <h5>{e.Year}</h5>
                        <button className="add" onClick={() => onClickHandler(e.Title, e.Year)}>
                            Nominate
                        </button>
                    </div>
                ))}
                
            </div>
            
                
            
        </div>
        
        
    )
}

export default Results