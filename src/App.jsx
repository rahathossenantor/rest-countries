import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Country from './components/Country/Country'
import Cart from './components/Cart/Cart'

function App() {
  const [countries, setCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState([])
  
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
    .then(res => res.json())
    .then(data => {
      data = data.slice(0,24)
      setCountries(data)
    })
  }, [])

  const addCountry = (country) => {
    const selected = [...selectedCountry, country]
    setSelectedCountry(selected)
  }

  return (
    <>
      <div>
        <h3>Country: {countries.length}</h3>
        <Cart selectedCountries={selectedCountry}></Cart>

        {countries.map(country => (<Country key={country.name} country={country} addCountry={addCountry}></Country>))}
      </div>
    </>
  )
}

export default App