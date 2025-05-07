import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './components/TodoList'

function App() {
  return (
    <div>
      {/* <TodoList title="my-todo" items={["item1","item2","item3","item4","item5"]} myStyles={{color:"red", backgroundColor:"yellow"}}/> */}
      <TodoList items={["item6","item7","item8","item9","item10"]}/>
    </div>
  )
}

export default App
