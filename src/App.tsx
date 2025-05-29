import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from "react";

function App() {
  const[currentString, setString] = useState("");
  return (
    <>
      <h1>
        Home Page
      </h1>
      <div>
        <button type="button" class="btn btn-primary" onClick={()=>{setString("Menu")}}>Menu</button>
      </div>
      <div>
        <button type="button" class="btn btn-primary" onClick={()=>{setString("About")}}>About</button>
      </div>
      <div class="extra">
        <button type="button" class="btn btn-primary" onClick={()=>{setString("Contacts")}}>Contacts</button>
      </div>
      <div>
        {currentString === "Menu" && <h2>Menu</h2>}
        {currentString === "About" && <h2>About</h2>}
        {currentString === "Contacts" && <h2>Contacts</h2>}
      </div>
    </>
  );
}

export default App;
