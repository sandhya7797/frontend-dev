import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MovieListPage from './pages/MovieListPage.jsx'
import MovieDetailsPage from './pages/MovieDetailsPage.jsx'
import WatchListPage from './pages/WatchListPage.jsx'
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
        <Route path="/" element={<MovieListPage />} />
        <Route path="/details" element={<MovieDetailsPage />} />
        <Route path="/watchList" element={<WatchListPage />} />
        <Route path="*" element={"Page Not Found"} />
        </Routes>
    </StrictMode>
  </BrowserRouter>,
)
