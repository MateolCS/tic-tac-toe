const Player = (sign) =>{
    const getSign = () => sign
    return {getSign}
}


const gameBoard = (()=>{
    let board = ['', '', '', '', '', '', '', '']

    const setBoardField = (index, sign) =>{
        if(index > board.length) return
        board[index] = sign
    }
    
    const getBoardField = (index) =>{
        if(index > board.length) return
        return board[index]
    }

    const clearBoard = () =>{
        for(i=0; i<board.length; i++){
            board[i] = ''
        }
    }
    
    return {getBoardField, setBoardField, clearBoard}
})()


const displayController = (() =>{
    const gameFields = document.querySelectorAll('.square')
    const resetButton = document.getElementById('reset-button')
    const messageField = document.querySelector('.communication-output-text')


    resetButton.addEventListener('click', ()=>{
        gameBoard.clearBoard()
        updateBoard()

    })


    const updateBoard = () =>{
        for(i = 0; i < gameFields.length; i++){
            gameFields[i].textContent = board[i]
        }
    } 

    const sendMessage = (gameResult) =>{
        if(gameResult === 'Draw'){
            messageContent('Draw')
        }else{
            messageContent(`Player ${gameResult} is a winner!`)
        }
    }

    const messageContent = (message) =>{
        messageField.textContent = message
    }
})()


const gameController = (()=>{
    const PlayerX = Player('X')
    const PlayerO = Player('O')
    let round = 1
    let gameState = false


    const checkGameResult = (fieldIndex) =>{
        const possibleWinConditions = [
            [0, 1, 2], [3, 4, 5],
            [6, 7, 8], [0, 3, 6],
            [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6],
          ]

          return possibleWinConditions.filter((possibility) => possibility.includes(fieldIndex)).some((possibleCombination) =>{
              possibleWinConditions.every((index) => gameBoard.getBoardField(index) === currentPlayer())
          })


    }


    const currentPlayer = () =>{
        if(round % 2 == 1){
            return PlayerX.getSign()
        }else{
            return PlayerO.getSign()
        }
    }


    const getState = () => gameState

    const newGame = () =>{
        round = 1
        gameState = false
    }
})()


