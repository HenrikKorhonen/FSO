const Header = (props) => {

    return (
      <>
        <h1>{props.course}</h1>
      </>
    )
  }
  
  const Part = (props) => {
  
    return (
      <>
        <p>
  {props.part.name} {props.part.exercises}
  </p>
      </>
    )
  }
  
  const Content = ({parts}) => {
  
    return (
      <>
        {
          parts.map(part => <Part part={part} key={part.id} ></Part>)
        }
      </>
    )
  }
  const Total = ({parts}) => {
  
   const total = parts.reduce((s,p) => s+p.exercises, 0 )
  
    return (
      <>
        <p>
          <b>
          Number of exercises {total}
          </b>
          </p>
      </>
    )
  }
  
  const Course = ({course}) => {
    return (
      <div>
        <Header course={course.name} />
        <Content parts={course.parts} /> 
        <Total parts={course.parts} />
      </div>
    )
  }

  export default Course