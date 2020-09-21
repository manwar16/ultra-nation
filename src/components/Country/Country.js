import React from 'react';

const Country = (props) => {
    const {name, population, region, flag} = props.country;
    
    return (
        <div>
            <h3>{name}</h3>
            <img  style={{height: "100px"}} src={flag} alt=""/>
            <p>population: {population}</p>
            <p><small>{region}</small></p>
            
        </div>
    );
};

export default Country;