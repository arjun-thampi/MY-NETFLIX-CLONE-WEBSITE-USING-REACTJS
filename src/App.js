import React from 'react';
import { action,comedy,documentaries,horror,orginals, romance } from './urls';

import './App.css';
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import './components/NavBar/NavBar.css';
import RowPost from './components/RowPost/RowPost';
function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost url={orginals} title='Netflix Orginals'/>
      <RowPost url={action} title='Action Movies' isSmall/>
      <RowPost url={horror} title='Horror Movies' isSmall/>
      <RowPost url={romance} title='Romantic Movies' isSmall/>
      <RowPost url={comedy} title='Comedy Movies' isSmall/>
      <RowPost url={documentaries} title='Documentaries' isSmall/>

    </div>
  );
}

export default App;
