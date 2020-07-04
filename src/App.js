import React, { useState } from 'react'
import './App.css';
import Input from './components/input/Input';
import Draw from './components/drawer/Drawer';

function App() {

  const [ lyrics, setLyrics ] = useState(null)
  const [ classes, setClasses ] = useState(null)

  return (
    <div className="App">
      <header className="App-header">
        
        <Input onSubmit={(lyrics, classes) => {
          setLyrics(lyrics);
          setClasses(classes);
        }}></Input>

        <Draw lyrics={lyrics} classes={classes}></Draw>
      </header>
    </div>
  );
}

export default App;
