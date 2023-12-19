import logo from './logo.svg';
import './App.css';
import React, { useState } from'react';
import {useEffect} from'react';
import Axios from 'axios';

function App() {
  const [catFact, setCatFact] = useState("")
  useEffect(()=>{
    Axios.get("https://catfact.ninja/fact").then((res)=>{
      console.log(res.data);
      setCatFact(res.data.fact);   }); }, []);
  return(
  <div className='App'>
    {catFact}
  </div> );
}
export default App;