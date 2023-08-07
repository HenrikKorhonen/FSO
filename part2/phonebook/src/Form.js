import { useState } from 'react'

const Form = ({onSubmit, persons}) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const submitForm = (event) => {
    event.preventDefault()
    const person = { name: newName, number: newNumber}
    const index = persons.findIndex(p => p.name === newName)
    if (index >= 0) {
      const id = persons[index].id
      onSubmit.updatePerson(id, person)
    }
    else {
      onSubmit.addPerson(person)
    }
  }
  const handleName = (event) => {
    setNewName(event.target.value)
  }
  const handleNumber = (event) => {
    setNewNumber(event.target.value)
  }
  return (
    <form onSubmit={submitForm}>
        <h2>add a new</h2>
        <div>
          name: <input value={newName} onChange={handleName} />
        </div>
          <div>number: <input  value={newNumber} onChange={handleNumber} /></div>
        <div>
          <button type="submit">add</button>
        </div>
    </form>
  )
}

export default Form