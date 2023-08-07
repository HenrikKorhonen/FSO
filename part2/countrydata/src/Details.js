const Detail = ({ country }) => {
 
    if (!country) {
      return null
    } else {
        const langs = []
        for (let l in country.languages) {
            langs.push(country.languages[l])
        }
        return (
            <>
            <h1>
                {country.name.common}
            </h1>
          <ul style={{"listStyle":"none"}}>
            <li>
            capital {country.capital[0]}
            </li>
            <li>
            area {country.area}
            </li>
          </ul>
          <h3>
            languages:
          </h3>
          <ul>
            {
                langs.map(l => <li>{l}</li>)
            }
          </ul>
          <img src={country.flags.png}>
            </img>
            </>
        )
    }
}

export default Detail