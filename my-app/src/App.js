import logo from './logo.svg';
import './App.css';
import cardImage from "./logo192.png";
import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";

function App() {
  return (
    <div style={{}}>
      <section className='card'>
        <img className='card-image' src={cardImage}></img>
        <h5 className='card-title'>React</h5>
      </section>
    </div>
  );
}

export default App;
