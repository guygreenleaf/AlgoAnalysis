import React, { useState } from "react";
import { MDBBtn } from "mdbreact";

function Fibonacci() {
  let [computation, compute] = useState(0);
  let [fiboToCompute, changeNum] = useState(0);

  let fibo = (number) => {
    if (number <= 2) {
      return 1;
    }

    return fibo(number - 1) + fibo(number - 2);
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    compute(fibo(fiboToCompute));
  };

  return (
    <div style={{ marginLeft: "40vw", paddingTop: "50vh" }}>
      <form onSubmit={handleSubmit}>
        <label style={{ fontSize: "25px" }}>
          Please enter a number to calculate the fibonacci sequence for:
        </label>
        <input
          type="number"
          onChange={(e) => changeNum(e.target.value)}
          value={fiboToCompute}
        />

        <MDBBtn gradient="blue" style={{ marginRight: "50px" }} type="submit">
          Calculate Fibonacci
        </MDBBtn>
      </form>
      <h1>{computation}</h1>
    </div>
  );
}

export default Fibonacci;
