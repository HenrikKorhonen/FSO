import { useState } from 'react'


const Countries = ({countries, filter, selectCountry}) => {
  
  const [shownCountries, setCountries] = useState([])

  const cs = countries.filter((p)=> p.name.common.toLowerCase().includes(filter))


  const sel = event => {
    const id = event.target.id
    //const name = countries.find(p => p.id == id).name
    if (window.confirm("Choose "+ event.target.id +" ?" )) {
      selectCountry(event.target.id)
    }
    else { console.log("Cancelled delete")}
  }

  if (cs.length > 10) {
    return <p>
      Too many matches, specify another filter
    </p>
  } 
  return (
    <>
    <h2>Numbers</h2>
    <ul>
    {
      cs.map(p => {
        return (
          <li key={p.id}>
            {p.name.common} ({p.name.official}) 
            <button id={p.name.common} onClick={sel} country={p.name.common}>select</button>
          </li>
        )
      })
    }
    </ul>
    </>
  )
}
export default Countries