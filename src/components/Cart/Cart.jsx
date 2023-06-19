import React from "react"

const Cart = (props) => {
    const selectedCountries = props.selectedCountries

    let totalPopulation = 0
    for (let i = 0; i < selectedCountries.length; i++) {
        const country = selectedCountries[i]
        totalPopulation += country.population
    }

    return (
        <div>
            <p>Added countries: {selectedCountries.length}</p>
            <p>Total population: {totalPopulation}</p>
        </div>
    )
}

export default Cart