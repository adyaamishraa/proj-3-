import React from 'react'
import styled from 'styled-components'
import { Button } from '../styled/Button';

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  flex-direction: row;
  margin: 0 auto;//center the content
  height: 100vh;
  align-items: center;

  .content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    margin-left: 40px;
  }

  .content h1{
    font-size: 96px;
    white-space: nowrap;
    margin-bottom: 25px;
  }
  
`;


const StartGame = ({toggle}) => {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" alt="" />
      </div>
      {/* div me isiliye dala taki image stretch na ho.. */} 

      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button> 
      </div>
    </Container>
  )
}

export default StartGame