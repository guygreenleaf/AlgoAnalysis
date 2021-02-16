import React from 'react'
import {Link} from 'react-router-dom'
import {MDBBtn} from 'mdbreact'
import {Scatter} from 'react-chartjs-2'

function StatsMode() {
    return (
<div style={{ marginLeft: "40vw", paddingTop: "50vh" }}>
      <Link to="/fibonacciStats">
      <MDBBtn gradient="blue" style={{ marginRight: "50px" }}>
        Fibonacci Stats
      </MDBBtn>
      </Link>

      <Link to="/exponentialStats">
      <MDBBtn gradient="blue" style={{ marginRight: "50px" }}>
        Exponentials Stats
      </MDBBtn>
      </Link>

      <Link to="/sortersStats">
      <MDBBtn gradient="blue" style={{ marginRight: "50px" }}>
        Sorters Stats
      </MDBBtn>
      </Link>
    </div>
    )
}

export default StatsMode
