import React from 'react';


const Nominations = (props) => {

    const nominees = props.nominees

    const onClickHandler = (name, year) => {
        nominees.push({name, year})
    }

    return (
        <div>
            <h6>Nominations</h6>
            <div>
                { nominees.map((e) => (
                    <div key={e.imdbID}>
                        <h5>{e.Title}</h5>
                        <h5>{e.Year}</h5>
                        <button className="add" onClick={() => onClickHandler(e.Title, e.Year)}>
                            Remove
                        </button>
                    </div>
                ))}
                
            </div>

        </div>
    )
}

export default Nominations;
