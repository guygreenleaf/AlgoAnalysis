import React from "react";
import { Link } from "react-router-dom";
import { MDBBtn } from "mdbreact";

function UserMode() {
  return (
    <div style={{ marginLeft: "40vw", paddingTop: "50vh" }}>
      <Link to="/fibonacci">
      <MDBBtn gradient="blue" style={{ marginRight: "50px" }}>
        Fibonacci
      </MDBBtn>
      </Link>

      <Link to="/exponentials">
      <MDBBtn gradient="blue" style={{ marginRight: "50px" }}>
        Exponentials
      </MDBBtn>
      </Link>

      <Link to="/sorters">
      <MDBBtn gradient="blue" style={{ marginRight: "50px" }}>
        Sorters
      </MDBBtn>
      </Link>
    </div>
  );
}

export default UserMode;
