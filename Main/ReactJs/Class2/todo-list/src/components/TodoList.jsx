const todoList = ({ title, items, myStyles }) => {
    return (
        <div>
            <h1>{title ? title : "TodoList"}</h1>
            <ul style={myStyles}>
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

