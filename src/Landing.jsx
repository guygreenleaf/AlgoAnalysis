import React from "react";
import {MDBBtn} from 'mdbreact'

import {Link} from 'react-router-dom'

function Landing() {
  return (
    <div style={{ marginLeft: "40vw", paddingTop: "50vh" }}>
      <Link to="/userMode">
        <MDBBtn gradient="blue" style={{ marginRight: "50px" }}>
          User Mode
        </MDBBtn>
      </Link>
      <Link to="/statsMode">
        <MDBBtn gradient="blue">Stats Mode</MDBBtn>
      </Link>
    </div>
  );
}

export default Landing;
