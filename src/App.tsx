import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from "react";
import About from './About.tsx';
import Contacts from './Contacts.tsx';

function App() {
  const[currentString, setString] = useState("");
  return (
    <>
      <h1>
        Contradiction Pizza
      </h1>
        <button type="button" className="btn btn-primary" onClick={()=>{setString("Menu")}}>Menu</button>
        <button type="button" className="btn btn-primary" onClick={()=>{setString("About")}}>About</button>
        <button type="button" className="btn btn-primary" onClick={()=>{setString("Contacts")}}>Contacts</button>
      <div>
        {currentString === "Menu" && <h2>Menu</h2>}
        {currentString === "About" && <About />}
        {currentString === "Contacts" && <Contacts />}
      </div>
    </>
  );
}

export default App;
