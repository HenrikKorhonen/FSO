import { useState, useEffect } from 'react'
import personService from './services/persons'
import Form from './Form'
import People from './People'
import Filter from './Filter'
import Notification from './Notification'

const App = () => {
  const [persons, setPersons] = useState([ ]) 
  const [message, setErrorMessage] = useState({msg:'some error happened...', color: "red"})
  
  const loadData = () => {
    console.log('effect')
    personService
      .getAll()
      .then(data => {
        console.log('promise fulfilled')
        setPersons(data)
      })
  }
  
  useEffect(loadData, [])

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
  const addPerson = person => {
    personService    
    .create(person)    
    .then(data => {     
      console.log(data)
      setPersons(persons.concat(data))  
    })
    .then(success(`Added ${person.name}`))
  }

  const updatePerson = (id, person) => {
    if (window.confirm(`${person.name} is already added to phonebook, replace the old number with a new one?`)){
      personService    
      .update(id, person)    
      .then(data => {     
        console.log(data)
        setPersons(persons.filter(p => p.id != id).concat(data))  
      })
      .then(success(`Updated ${person.name}`))
      .catch(reason => {
        fail(`Information of ${person.name} has already been removed from server`)
        loadData()
      })
    } else {console.log("Cancelled update")}
  }

  const deletePerson = id => {
    personService    
    .deletePerson(id)    
    .then(data => {     
      console.log(data)
      setPersons(persons.filter(p => p.id != id))  
    }).catch(reason => {
      fail(`Information has already been removed from server`)
      loadData()
    })
   
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} ></Notification>
      <Filter filter={filter} setFilter={setFilter} ></Filter>
      <Form onSubmit={{ addPerson, updatePerson }} persons={persons} ></Form>
      <People persons={persons} filter={filter} deletePerson={deletePerson}></People>
    </div>
  )
}

export default App