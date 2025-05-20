import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, RouterProvider } from 'react-router'
import { StrictMode } from 'react'
import { store } from './store/index.js'
import { Provider } from 'react-redux'

//whatever present in store will be available in the entire app

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)

