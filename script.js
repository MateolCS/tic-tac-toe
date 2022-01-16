const Player = (sign) =>{
    this.sign = sign

    const getSign = () =>{
        return sign
    }

    return {getSign}
}

const gameBoard = (() =>{

    const board = ['', '', '', '', '', '', '', '']

    const updateBoard = (index, sign) =>{
        board[index] = sign
    }

    const checkForWinner = (currentPlayer) =>{
        if(board[0] === currentPlayer){
            if(board[1] === currentPlayer && board[2] === currentPlayer){
                return true
            }
            if(board[3] === currentPlayer && board[6] === currentPlayer){
                return true
            }
            if(board[4] === currentPlayer && board[8] === currentPlayer){
                return true
            }
        }
        if(board[2] === currentPlayer){
            if(board[5] === currentPlayer && board[8] === currentPlayer){
                return true
            }
            if(board[4] === currentPlayer && board[6] === currentPlayer){
                return true
            }
        }
        if(board[7] === currentPlayer){
            if(board[4] === currentPlayer && board[1] === currentPlayer){
                return true
            }
            if(board[6] === currentPlayer && board[8] === currentPlayer){
                return true
            }
        }
        if(board[3] === currentPlayer && board[4] === currentPlayer && board[5] === currentPlayer){
            return true
        }

        return false
    }

    const clearBoard = () =>{
        for(i = 0; i < board.length; i++){
            board[i] = ''
        }
    }

    const getField = (index) =>{
        return board[index]
    }

    return{clearBoard, updateBoard, checkForWinner, getField}
})()


const displayController = (() =>{
    let gameFields = Array.from(document.getElementsByClassName('square'))
    let resetButton = document.getElementById('reset-button')
    let messageField = document.querySelector('.communication-output-text')

    gameFields.forEach((gameField) =>{
        gameField.addEventListener('click', (e) =>{
            if(isEmpty(e)){
                gameController.playRound(parseInt(e.target.dataset.index))
                updateDisplayedBoard()
            }
        })
    })


    resetButton.addEventListener('click', () =>{
        sendMsg('PlayerX turn')
        gameBoard.clearBoard()
        gameController.newGame()
        updateDisplayedBoard()
    })

    const updateDisplayedBoard = () =>{
        for(i = 0; i < gameFields.length; i++){
            gameFields[i].textContent = gameBoard.getField(i)
        }
    }

    const sendMsg = (message) =>{
        messageField.textContent = message
    }

    const setResultMsg = (winner) =>{
        if(winner === 'Draw'){
            sendMsg('Draw!')
        }else{
            sendMsg(`${winner} won!`)
        }
    }

    const isEmpty = (value) =>{
        return value.target.textContent !== '' ? false : true
    }

    return{sendMsg, setResultMsg}

})()

const gameController = (() =>{

    const playerX = Player('X')
    const playerO = Player('O')
    let round = 1


    const playRound = (fieldIndex) =>{
        gameBoard.updateBoard(fieldIndex, getCurrentPlayer())
        if(gameBoard.checkForWinner(getCurrentPlayer())){
            displayController.setResultMsg(getCurrentPlayer())
            return
        }
        if(round === 9){
            displayController.setResultMsg('Draw')
            return
        }
        round ++
        displayController.sendMsg(`${getCurrentPlayer()} turn!`)
    }

    const getCurrentPlayer = () =>{
        return round % 2 === 1 ? playerX.getSign() : playerO.getSign()
    }

    const newGame = () =>{
        round = 1
    }

    return {newGame, playRound}
})()





