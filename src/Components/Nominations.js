import React from 'react';


const Nominations = ({nominees, remove}) => {

    return (
        <div className="nomination">
            <h4>Nominations</h4>
            <div>
                { nominees.map((e) => (
                    <div key={e.id} className="movieCard">
                        <h6>{e.name}  </h6>
                        <h6> ({e.year})</h6>
                        <button className="button" onClick={() => {remove(e.id)}}>
                            Remove
                        </button>
                    </div>
                ))}
                
            </div>

        </div>
    )
}

export default Nominations;
