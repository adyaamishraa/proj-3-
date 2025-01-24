import React from 'react'
import styled from 'styled-components'

const RulesContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    margin-top: 40px;
    border-radius: 15px;
  
    background-color: #FBF1F1;
    padding: 20px;
    h2{
      font-size: 24px;
      font-weight: bold;
    }
    .text{
      margin-top: 24px;
    }
  
`

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to Play DICE GAME: </h2>

    <div className='text'>
      <p>
        1. Select Any Number.
        <br />
        2. Click On Dice Image.
        <br />
        3. After Click On Dice, If Selected Number Is Equal To Dice Number You Will Get Same Points As Dice.
        <br />
        4. If You Get Wrong Guess Then 2 Points Will Be Deducted.
        <br />
      </p>
    </div>
    </RulesContainer>
  )
}

export default Rules