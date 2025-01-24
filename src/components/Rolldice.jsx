import React, { useState } from 'react'
import styled from 'styled-components'


const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;

  p{
    font-size: 24px;
    font-weight: 500;
  }

  .dice{
    cursor: pointer;
  }
`

const Rolldice = ({currentDice, rollDice}) => {

 
  return (
    <DiceContainer>
      <div className='dice' onClick={rollDice}>
        <img src={`/images/dice_${currentDice}.png`} alt="dice1" />
      </div>

      <p>Click On Dice To Roll.</p>
    </DiceContainer>
  )
}

export default Rolldice