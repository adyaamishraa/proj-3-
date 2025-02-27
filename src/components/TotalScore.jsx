import React from 'react'
import styled from 'styled-components'


const ScoreContainer = styled.div`

 max-width: 200px;
 margin: 40px;

 h1{
  font-size: 100px;
  line-height: 100px;
 }

 p{
  font: 24px;
  font-weight: 500;
 }
`

const TotalScore = ({score}) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
    
  )
}

export default TotalScore