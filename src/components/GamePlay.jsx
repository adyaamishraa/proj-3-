import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import Rolldice from './Rolldice'
import { Button, OutlineButton } from '../styled/Button'
import Rules from './Rules'

const MainContainer = styled.main`
  .top-section{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .btns{
    display: flex;
    flex-direction: column;
    align-items: center;
    /* max-width: 220px; */
    gap: 20px;
    margin-top: 30px;
  }
`

const GamePlay = () => {
  const [selectedNum, setSelectedNum] = useState();//number select karne ke liye
  const [currentDice, setCurrentDice] = useState(1);//dice roll karegi tab ke liye
  const [score, setScore] = useState(0);//score dikhane ke liye
  const [error, setError] = useState("");//agar select nhi kiya number uske liye
  const [showRules, setShowRules] = useState(false);

  //RANDOM NUM GENERATE KARNE KE LIYE FUNC LIKHA.
  const generateRandomNumber = (min,max) => {
  return Math.floor(Math.random() * (max - min) + min); 
    //google se poora func utha liya
  }

  //JAB DICE ROLL KARENGE TAB VAR ME NAYI VALUE STORE HOGI
  const rollDice = () => {
    if(!selectedNum) {
      setError("YOU HAVEN'T SELECTED ANY NUMBER")
      return;
    };

    const randomNumber = generateRandomNumber(1,7);

    setCurrentDice((prev) => randomNumber);

    if(selectedNum == randomNumber){
      setScore(prev => prev+randomNumber);
    }
    else{
      setScore(prev => prev-2);
    }

    setSelectedNum(undefined);
  }


  const resetScore = () => {
    setScore(0);
  }

  return (
    <MainContainer>
      <div className='top-section'>
        <TotalScore score={score}/>
        <NumberSelector selectedNum = {selectedNum} setSelectedNum = {setSelectedNum} error = {error} setError={setError} />
      </div>
      
      <Rolldice currentDice={currentDice} rollDice ={rollDice}/>

      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button onClick={() => {setShowRules((prev) => !prev)}}>{showRules ? "Hide " : "Show "}Rules</Button>
      </div>

      { showRules && <Rules/>}
    </MainContainer>
  )
}

export default GamePlay

