const todoList = (props) => {
    const items = ["item1","item2","item3","item4","item5"];
    return (
    <div>
      <h1>Todo-List</h1>
      <ul>
        {
          items.map((item) => (
            <li>{item}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default todoList;

