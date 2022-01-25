import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {originals,action,trending,horrorMovies,comedyMovies} from './urls'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <RowPost url={originals}  title="Netflix Original"/>
      <RowPost url={trending}  title="Trending Movie" isSmall />
      <RowPost url={comedyMovies}  title="Comedy Movie" isSmall />
      <RowPost url={action}  title="Action Movie" isSmall />
      <RowPost url={horrorMovies}  title="Horror Movie" isSmall />
    </div>
  );
}

export default App;
