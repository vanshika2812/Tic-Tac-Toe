import React from "react";
import './style.css'
import { useState } from "react";

export default function Board() {
  const [player, setplayer]=useState('X')
  const [cell,setcell]=useState(Array(9).fill(null))
  const [winner,setwinner]=useState()
  function calculatewinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        setwinner(squares[a])
      }
    }
  }
  
  function handleclick(i){
    if( cell[i]){
      return ;
    }
    const nextsquares=cell.slice()
    if(player === 'X'){
      nextsquares[i]="X"
      setplayer('O')
    }
    else{
      nextsquares[i]="O"
      setplayer('X')
    }
    calculatewinner(nextsquares)
    setcell(nextsquares) 
   
    
  }
  const handlerestart=()=>{
     setwinner(null)
     setcell(Array(9).fill(null))
  }
  
  function Square({value,onsquareclick}){
    return (
  <td className="square" onClick={onsquareclick}>{value}</td>
    )
  }
  return (
    
    <>
    <h4 className="heading">TIC TAC TOE</h4>
    <p>Player : {player}</p>
    
    <div className="Board">
    
      <table>
        <tbody>
      <tr>
        <Square value={cell[0] }onsquareclick={()=>handleclick(0)}/>
        <Square value={cell[1]} onsquareclick={()=>handleclick(1)}/>
        <Square value={cell[2]} onsquareclick={()=>handleclick(2)}/>
      </tr>
      <tr>
        <Square value={cell[3]} onsquareclick={()=>handleclick(3)}/>
        <Square value={cell[4]} onsquareclick={()=>handleclick(4)}/>
        <Square value={cell[5]} onsquareclick={()=>handleclick(5)}/>
      </tr>
      <tr>
        <Square value={cell[6]} onsquareclick={()=>handleclick(6)}/>
        <Square value={cell[7]} onsquareclick={()=>handleclick(7)}/>
        <Square value={cell[8]} onsquareclick={()=>handleclick(8)}/>
      </tr>
     </tbody>
    </table>
    {winner &&(
        <>
        <p>{winner}is the winner</p>
        <button onClick={()=>handlerestart()}>Play Again</button>
        </>
      )}
    
    </div>
  </>
  );
  }
  

