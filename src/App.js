import './App.css';
import React from 'react';
import Navbar from './Component/Navbar';
import Section from './Component/Section';
function App() {
  const menu = {
    about:'About',
    experience:'Experience',
    education:'Education',
    skills:'Skills',
    projects:'Projects'
  };

  return (
    <React.Fragment>
      <header>
        <Navbar data={menu} title='AshariFauzan'/>
      </header>
      <main>
        <Section title={menu}/>
      </main>
    </React.Fragment>
  );
}

export default App;
