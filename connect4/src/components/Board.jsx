import Slot from "./Slot";
import {useState} from "react";

const Board=()=>{
    const [board, setBoard]=useState([
        ['','','','','','',''],
        ['','','','','','',''],
        ['','','','','','',''],
        ['','','','','','',''],
        ['','','','','','',''],
        ['','','','','','',''],
    ])
    const [currPlayer, setCurrPlayer]=useState('X');
    const [oppPlayer, setOppPlayer]=useState('O');
    const [gameOver, setGameOver]=useState(false);

    const checkWin=(row,column,ch)=>{
        try{
            if(board[row+1][column]===ch){
                if(board[row+2][column]===ch){
                    if(board[row+3][column]===ch){
                        return true;
                    }
                }
            }
        } catch (e) {console.log(e)}
        try{
            if(board[row+1][column+1]===ch){
                if(board[row+2][column+2]===ch){
                    if(board[row+3][column+3]===ch){
                        return true;
                    }
                }
            }
        } catch (e) {console.log(e)}
        try{
            if(board[row+1][column-1]===ch){
                if(board[row+2][column-2]===ch){
                    if(board[row+3][column-3]===ch){
                        return true;
                    }
                }
            }
        } catch (e) {console.log(e)}
        try{
            if(board[row][column+1]===ch){
                if(board[row][column+2]===ch){
                    if(board[row][column+3]===ch){
                        return true;
                    }
                }
            }
        } catch (e) {console.log(e)}
        try{
            if(board[row][column-1]===ch){
                if(board[row][column-2]===ch){
                    if(board[row][column-3]===ch){
                        return true;
                    }
                }
            }
        } catch (e) {console.log(e)}
        try{
            if(board[row-1][column-1]===ch){
                if(board[row-2][column-2]===ch){
                    if(board[row-3][column-3]===ch){
                        return true;
                    }
                }
            }
        } catch (e) {console.log(e)}
        try{
            if(board[row-1][column+1]===ch){
                if(board[row-2][column+2]===ch){
                    if(board[row-3][column+3]===ch){
                        return true;
                    }
                }
            }
        } catch (e) {console.log(e)}
    }

    const updateBoard=(row,column, ch)=>{
        setBoard(prev=>{
            const boardCopy= [...prev];
            boardCopy[row][column]=ch;
            return boardCopy;
        });
        return checkWin(row,column,ch);
    }

    const handleClick=e=>{
        const column=e.target.getAttribute('x');
        let row=board.findIndex((rowArr, index)=>{
            return(rowArr[column]!=='' || (index=== board.length-1));
        });
        if (row!==board.length-1) row-=1;
        if (board[row][column]!=='') row-=1;
        setGameOver(updateBoard(row,column,currPlayer));
        if(!gameOver){
            const currPlayerCopy=currPlayer;
            setCurrPlayer(oppPlayer);
            setOppPlayer(currPlayerCopy);
        }
    };

    return (
        <>
        {gameOver && (
            <h1>{oppPlayer==='X'?'Red':'Yellow'} Wins</h1>
        )}
        <h2 id='playerDisplay'>{currPlayer==='X'?'Red':'Yellow'} Move</h2>
        <div id='board' onClick={gameOver?null:handleClick}>
            {board.map((row,i)=>{
                return row.map((ch,j)=>{
                    return <Slot ch={ch} y={i} x={j} />
                })
            })}
        </div>
        </>
    )
};

export default Board;