const People = ({persons, filter, deletePerson}) => {
  
  const del = event => {
    const id = event.target.id
    const name = persons.find(p => p.id == id).name
    if (window.confirm("Delete " + name + "?" )) {
      deletePerson(id)
    }
    else { console.log("Cancelled delete")}
  }

  return (
    <>
    <h2>Numbers</h2>
    {
      persons.filter((p)=> p.name.toLowerCase().includes(filter)).map(p => {
        return <p key={p.id}>{p.name}: {p.number} <button id={p.id} onClick={del}>delete</button> </p>
      })
    }
    </>
  )
}
console.log("moi")
export default People