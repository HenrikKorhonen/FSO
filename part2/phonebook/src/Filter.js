const Filter = ({filter, setFilter}) => {
    const onChange = (event) =>{
        setFilter(event.target.value)
    }

    return (
        <div>
            find countries <input value={filter} onChange={onChange}></input>
        </div>
    )
}

export default Filter