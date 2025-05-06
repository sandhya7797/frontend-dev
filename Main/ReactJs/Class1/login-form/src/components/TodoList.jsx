const Heading = (props) => {
    return <h1 style={{color:props.color}}>{props.title}</h1>;
  }
  
  const List = (props) => {
    return <ul style={{color:props.color}}>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
    <li>item 4</li>
  </ul>;
  }
  
  const Summary = () => {
    return <h3>Summary of Todo List:</h3>;
  }
  
  const TodoList = () => {
    return <div>
    <Heading title="First Heading" color="red"/>
    <Heading title="Second Heading" color="green"/>
    <List color="blue"/>
    <Summary/>
  </div>;
  }

  export default TodoList;