import './App.css';
import { MDBBtn } from "mdbreact"
import React from 'react'


function App() {
  return (
    <div className="App" style={{height:"100vh", backgroundColor:"grey"}}>
    <div style={{marginLeft:"40vw", paddingTop:"50vh"}}>
    <MDBBtn gradient="blue" style={{marginRight:"50px"}}>User Mode</MDBBtn>
    <MDBBtn gradient="blue">Stats Mode</MDBBtn>
</div>
    </div>
  );
}

export default App;
