const Filter = ({filter, setFilter}) => {
    const onChange = (event) =>{
        setFilter(event.target.value)
    }

    return (
        <div>
            filter shown with <input value={filter} onChange={onChange}></input>
        </div>
    )
}

export default Filter