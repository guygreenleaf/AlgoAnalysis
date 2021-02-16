import React, {useState} from 'react'
import {MDBBtn} from 'mdbreact'

function Exponentials() {
    const [expoOne, setExpoOne] = useState(0)
    const [expoTwo, setExpoTwo] = useState(0)
    const [expoThree, setExpoThree] = useState(0)


    const [expParam1, setExpParam1] = useState(0)
    const [expParam2, setExpParam2] = useState(0)


    const exponentialOne = (a, n) => {
        if(n < 1){
            return 1
        }
        return a * exponentialOne(a, n-1)
    }

    const exponentialTwo = (a, n) => {
        if(n < 1){
            return 1
        }
        if(n%2 === 0){
            return Math.pow(exponentialTwo(a, n/2), 2)
        }
        else if(n%2 !== 0){
            return a * Math.pow(exponentialTwo(a, (n-1)/2), 2)
        }
        
    }

    const exponentialThree = (a, n) => {
        if(n < 1){
            return 1
        }
        if(n%2 === 0){
            return exponentialThree(a, n/2) * exponentialThree(a, n/2)
        }
        if(n%2 !== 0){
            return a * exponentialThree(a, (n-1)/2) * exponentialThree(a, (n-1)/2)
        }
    }

    let handleSubmit = (e) => {
        e.preventDefault();
    
        setExpoOne(exponentialOne(expParam1, expParam2))
        setExpoTwo(exponentialTwo(expParam1, expParam2))
        setExpoThree(exponentialThree(expParam1, expParam2))
      };

    return (
       
            <div style={{ marginLeft: "40vw", paddingTop: "50vh" }}>
      <form onSubmit={handleSubmit}>
        <label style={{ fontSize: "25px" }}>
          Please enter a number to represent a:
        </label>
        <input
          type="number"
          onChange={(e) => setExpParam1(e.target.value)}
          value={expParam1}
        />

        <label style={{ fontSize: "25px" }}>
          Please enter a number to represent n:
        </label>
        <input
          type="number"
          onChange={(e) => setExpParam2(e.target.value)}
          value={expParam2}
        />

        <MDBBtn gradient="blue" style={{ marginRight: "50px" }} type="submit">
          Calculate Exponential
        </MDBBtn>
      </form>
      <h1>{expoOne}</h1>

      <h1>{expoTwo}</h1>

      <h1>{expoThree}</h1>


    </div>
        
    )
}

export default Exponentials
