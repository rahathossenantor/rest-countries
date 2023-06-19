import React from "react"
import "./Country.css"

const Country = (props) => {
    const {name, capital, area, flag, nativeName, population, region, subregion} = props.country
    const addCountry = props.addCountry
    
    return (
        <div className="country-info">
            <img width={"200px"} src={flag} alt="flag" />
            <p>Country name: {name}</p>
            <p>Native name: {nativeName}</p>
            <p>Area: {area} SKM</p>
            <p>Capital city: {capital}</p>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <p>Subregion: {subregion}</p>
            <button onClick={() => addCountry(props.country)}>Add country</button>
        </div>
    )
}

export default Country