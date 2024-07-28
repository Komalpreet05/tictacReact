import React from 'react'
import './GameBoard.css'
import { useState } from 'react'

const GameBoard = () => {
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [gameGrid, setGameGrid] = useState([]);
    const boxCount = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    const winningPositions = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 5, 9],
        [3, 5, 7],
        [2, 5, 8],
        [1, 4, 7],
        [3, 6, 9]
    ]


    function main(e) {
        e.target.innerText = currentPlayer;
        gameGrid.push(currentPlayer);
        e.target.style.pointerEvents = "none"
        swapTurn();
        console.log(gameGrid)
        // e.target.innerText(currentPlayer)
    }

    function checkWinner() {
        winningPositions.forEach((pos) => {
            if (gameGrid[pos[0]] !== "" || gameGrid[pos[1 !== ""] || gameGrid[pos[2 !== ""]]]) {
                console.log("no")
            }
        })
    }

    function swapTurn() {
        if (currentPlayer === 'X') {
            setCurrentPlayer('O');
            console.log(currentPlayer);
        }
        else {
            setCurrentPlayer('X');
            console.log(currentPlayer);

        }
    }

    return (
        <div className='container'>
            <p className="game-info">Current player - {currentPlayer} </p>
            <div className="tic-tac-toe">
                {
                    boxCount.map((box, index) => {
                        return (
                            <div className={`box box${box}`} key={index} onClick={(e) => main(e)}></div>
                        )
                    })
                }

                {/* <div className="box box1"></div>
                <div className="box box2"></div>
                <div className="box box3"></div>

                <div className="box box4"></div>
                <div className="box box5"></div>
                <div className="box box6"></div>

                <div className="box box7"></div>
                <div className="box box8"></div>
                <div className="box box9"></div> */}
            </div>
        </div>
    )
}

export default GameBoard
