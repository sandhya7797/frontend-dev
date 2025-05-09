import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MovieList from './pages/MovieList.jsx'
import MovieDetails from './pages/MovieDetails.jsx'
import WatchList from './pages/WatchList.jsx'
import { BrowserRouter, Route, Routes } from "react-router";
import Header from './components/Header.jsx'

createRoot(document.getElementById('root')).render(
  //BrowserRouter is used to enable routing in the application.
  //Routes is used to define the different routes in the application.
  //Header is a component that displays the header of the application in all the pages.
  <BrowserRouter>
    <StrictMode>
      <Header/>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/details" element={<MovieDetails />} />
        <Route path="/watchList" element={<WatchList />} />
        </Routes>
    </StrictMode>
  </BrowserRouter>,
)
