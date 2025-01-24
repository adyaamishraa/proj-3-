import React, { useState } from 'react'
import styled from 'styled-components'

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => props.$isselected? "black" : "white"};
  color: ${(props) => props.$isselected? "white" : "black"};
`

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  margin: 40px;
  

  .flex{
    display: flex;
    gap: 24px;
    cursor: pointer;
  }

  p{
    margin-top: 10px;
    font: 24px;
    font-weight: 700;
  }

  .error{
    color: red;
  }
`

const NumberSelector = ({error, setError ,selectedNum, setSelectedNum }) => {

  const array = [1,2,3,4,5,6];

  const numberSelector = (value) => {
    setSelectedNum(value);
    setError(""); //null
  }
  
  return (
    <NumberSelectorContainer>
      <p className='error'>{error}</p>

      <div className='flex'>
      {
        array.map((value,i) => 
        (<Box $isselected = {value === selectedNum} key={i} onClick={() => numberSelector(value)}> 
        {value} 
        </Box>))
        // map is used, jo bhi component daal rahe hai uska key dena hota hai. The map function iterates over each element in the array.
      }
      </div>

      <p>Select Any Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector

/* The map() function in React is primarily used to iterate over arrays and render a list of elements dynamically. 
It is a standard JavaScript array method that creates a new array by applying a provided function to each element in the array. In the context of React, it is often used to generate JSX elements. */

// array.map((element, index) => {
  // Return JSX or a value
//});


