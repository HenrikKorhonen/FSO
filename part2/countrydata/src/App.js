import { useState, useEffect } from 'react'
import countryService from './services/countries'
import Countries from './Countries'
import Filter from './Filter'
import Notification from './Notification'
import Detail from './Details'

const App = () => {
  const [countries, setCountries] = useState([ ]) 
  const [selected, setSelected] = useState(null) 
  const [details, setDetails] = useState(null) 
  const [message, setErrorMessage] = useState({msg:null, color: "red"})
  
  const loadData = () => {
    console.log('effect')
    countryService
      .getAll()
      .then(data => {
        console.log('promise fulfilled')
        setCountries(data)
      })
  }
  
  useEffect(loadData, [])

  useEffect(()=>{
    if (selected) {
      countryService
      .getOne(selected)
      .then(data => setDetails(data))
      console.log("GOT DETAILS FOR " + selected)
    }
  }, [selected])

  const [filter, setFilter] = useState('')

  const success = text => {
    setErrorMessage({msg:text, color: "green"})
    setTimeout(() => {
      setErrorMessage(null)
    }, 5000)
  }
  const fail = text => {
    setErrorMessage({msg:text, color: "red"})
    setTimeout(() => {
      setErrorMessage(null)
    }, 5000)
  }
  const selectCountry = id => {
    setSelected(id)
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} ></Notification>
      <Filter filter={filter} setFilter={setFilter} ></Filter>
      <Countries countries={countries} filter={filter} selectCountry={selectCountry}></Countries>
      <Detail country={details} ></Detail>
    </div>
  )
}

export default App