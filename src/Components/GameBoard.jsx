import React, { useRef } from 'react'
import './GameBoard.css'
import { useState } from 'react'
import { useEffect } from 'react';
let data = ["", "", "", "", "", "", "", "", ""];
// let answer = "";

const GameBoard = () => {
    let [currentPlayer, setCurrentPlayer] = useState('X');
    let [answer, setAnswer] = useState(null);
    const [gameTied, setGameTied] = useState(false);
    let [fillCount, setFillCount] = useState(0);
    const myBoxesRef = useRef([]);
    const boxCount = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const winningPositions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    useEffect(() => {
        if (answer) {
            myBoxesRef.current.forEach((el, index) => {
                if (el) {
                    el.style.pointerEvents = "none"
                }
            })
        }
    }, [answer])

    useEffect(() => {
        data.forEach((d) => {
            if (d !== "") {
                setFillCount(fillCount + 1);
            }
        })



    }, [fillCount])

    if (fillCount === 9) {
        console.log("filled");
    }

    function initGame() {
        setAnswer(null);
        setFillCount(0);
        setGameTied(false);
        data = ["", "", "", "", "", "", "", "", ""];

        myBoxesRef.current.forEach((el, index) => {
            el.innerText = ""
            el.style.pointerEvents = "initial"
            el.style.backgroundColor = "transparent"
        })

        setCurrentPlayer("X");
    }
    console.log("Answe is " + answer)
    function main(e, index) {
        console.log(index)
        e.target.innerText = currentPlayer;
        // gameGrid.push(currentPlayer);
        data[index] = currentPlayer
        // setFillCount(fillCount + 1)
        e.target.style.pointerEvents = "none"
        console.log(data);
        swapTurn();
        // console.log(gameGrid)
        // e.target.innerText(currentPlayer)
        checkWinner()

        // if (answer) {
        //     myBoxesRef.current.forEach((el, index) => {
        //         if (el) {
        //             el.style.pointerEvents = "none"
        //         }
        //     })
        // }
    }
    console.log(fillCount)

    function checkWinner() {
        winningPositions.forEach((position) => {
            //all three boxes non empty and same value
            if ((data[position[0]] !== "" || data[position[1]] !== "" || data[position[2]] !== "") && (data[position[0]] === data[position[1]]) && (data[position[1]] === data[position[2]])) {
                //check if winner is X
                if (data[position[0]] === 'O') {
                    setAnswer("O");
                    console.log("O win");
                    //gameInfo.style.backgroundColor = "#046204"
                }
                else {
                    setAnswer("X");

                    console.log("X win")
                    //gameInfo.style.backgroundColor = "#046204"
                }

                for (let i = 0; i < position.length; i++) {
                    myBoxesRef.current[position[i]].style.backgroundColor = 'rgba(0, 255, 0, 0.3)'
                }


            }

            // for (let a = 0; a <= data.length; a++) {
            //     if (fillCount === 9 && answer === "") {
            //         console.log("none")
            //     }
            // }

        })


    }

    function swapTurn() {
        if (currentPlayer === 'X') {
            setCurrentPlayer("O");
        }
        else {
            setCurrentPlayer("X");
        }
    }


    return (
        <div className='wrapper'>
            <div className='container'>

                {

                    answer ? <p className="game-info active"> Winner Player - {answer}</p> :
                        <p className="game-info">Current player - {currentPlayer} </p>
                }

                <div className="tic-tac-toe">
                    {
                        boxCount.map((box, index) => {
                            return (
                                <div ref={(el) => myBoxesRef.current[index] = el} className={`box box${box}`} key={index} onClick={(e) => main(e, index)}></div>
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
                {
                    answer && <button className='btn' onClick={initGame}>New Game</button>

                }


            </div>
        </div>
    )
}

export default GameBoard
