import React, { useState, useEffect } from "react";
import { MDBBtn } from "mdbreact";
import { Line } from "react-chartjs-2";

function Fibonacci() {
  let [computation, compute] = useState(0);
  let [fiboToCompute, changeNum] = useState(0);
  let [fiboPlusOne, compFiboPlusOne] = useState(0);

  let [euclid, computeEuclid] = useState(0);


  let fibo = (number) => {
    if (number < 2) {
      return number;
    }

    return fibo(number - 1) + fibo(number - 2);
  };

  let gcd = (m, n) => {
    
    if(n < 1){
      return m
    }
    return gcd(n, (m % n))
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    compute(fibo(fiboToCompute));
    compFiboPlusOne(fibo(fiboToCompute+1))

    computeEuclid(gcd(computation, fiboPlusOne))
  };

  return (
    <div style={{ marginLeft: "40vw", paddingTop: "50vh" }}>
      <form onSubmit={handleSubmit}>
        <label style={{ fontSize: "25px" }}>
          Please enter a number to calculate the fibonacci sequence for:
        </label>
        <input
          type="number"
          //Forgot to parseInt here initially, gave me a huge headache
          onChange={(e) => changeNum(parseInt(e.target.value))}
          value={fiboToCompute}
        />

        <MDBBtn gradient="blue" style={{ marginRight: "50px" }} type="submit">
          Calculate Fibonacci
        </MDBBtn>
      </form>

      <h1>{computation}</h1>
      <h1>{fiboPlusOne}</h1>
      <h1>Euclid GCD: {euclid}</h1>
    </div>
  );
}

export default Fibonacci;
