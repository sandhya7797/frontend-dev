import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router';
import MovieListPage from './pages/MovieListPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import WatchListPage from './pages/WatchListPage';
import Header from './components/Header';

function App() {
  const [watchList, setWatchList] = useState([]);
  //BrowserRouter is used to enable routing in the application.
  //Routes is used to define the different routes in the application.
  //Header is a component that displays the header of the application in all the pages.
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MovieListPage watchList={watchList} setWatchList={setWatchList} />} />
        <Route path="/details" element={<MovieDetailsPage />} />
        <Route path="/watchList" element={<WatchListPage watchList={watchList} setWatchList={setWatchList} />} />
        <Route path="*" element={"Page Not Found"} />
      </Routes>
    </>
  )
}

export default App
