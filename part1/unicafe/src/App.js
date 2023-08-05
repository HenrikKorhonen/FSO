import { useState } from 'react'


const Button = ({handler, text}) => {

  return (
    <>
    <button onClick={handler}>{text}</button>
    </>
  )
}

const StatisticsLine = ({text, data, op}) => {
  let output = data
  switch (op) {
    case "sum":
      output = data.reduce((acc, cur) => acc + cur, 0);
      break;
    case "avg":
      let a = data.reduce((acc, cur) => acc + cur, 0);
      let b = data[0]-data[2]
      output = b/a
      break;
    case "pos":
        var s = data.reduce((acc, cur) => acc + cur, 0);
        output = data[0]*100/s +"%"
        break;
    default:
      break;
  }
  return (
    <tr>
      <td>
        {text}
      </td>
      <td>
        {output}
      </td>
    </tr>
  )
}

const Statistics = ({good, bad, neutral}) => {
  if ((good + bad + neutral) === 0) {
    return(
      <p>
        No feedback given
      </p>
    )
  } else {
    return(
      <table>
      <tbody>
      <StatisticsLine text="good" data={good} ></StatisticsLine>
      <StatisticsLine text="neutral" data={neutral} ></StatisticsLine>
      <StatisticsLine text="bad" data={bad} ></StatisticsLine>
      <StatisticsLine text="all" data={[good,neutral,bad]} op="sum" ></StatisticsLine>
      <StatisticsLine text="average" data={[good,neutral,bad]} op="avg" ></StatisticsLine>
      <StatisticsLine text="positive" data={[good,neutral,bad]} op="pos" ></StatisticsLine>
      </tbody>
    </table>
  )
  } 
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handler={()=>setGood(good+1)} ></Button>
      <Button text="neutral" handler={()=>setNeutral(neutral+1)} ></Button>
      <Button text="bad" handler={()=>setBad(bad+1)} ></Button>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} ></Statistics>
    </div>
  )
}

export default App