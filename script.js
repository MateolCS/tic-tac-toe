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
        if(board[0] === currentPlayer.getSign()){
            if(board[1] === currentPlayer.getSign() && board[2] === currentPlayer.getSign()){
                return true
            }
            if(board[3] === currentPlayer.getSign() && board[6] === currentPlayer.getSign()){
                return true
            }
            if(board[4] === currentPlayer.getSign() && board[8] === currentPlayer.getSign()){
                return true
            }
        }
        if(board[2] === currentPlayer.getSign()){
            if(board[5] === currentPlayer.getSign() && board[8] === currentPlayer.getSign()){
                return true
            }
            if(board[4] === currentPlayer.getSign() && board[6] === currentPlayer.getSign()){
                return true
            }
        }
        if(board[7] === currentPlayer.getSign()){
            if(board[4] === currentPlayer.getSign() && board[1] === currentPlayer.getSign()){
                return true
            }
            if(board[6] === currentPlayer.getSign() && board[8] === currentPlayer.getSign()){
                return true
            }
        }
        if(board[3] === currentPlayer.getSign() && board[4] === currentPlayer.getSign() && board[5] === currentPlayer.getSign()){
            return true
        }

        return false
    }

    const clearBoard = () =>{
        for(i = 0; i < board.length; i++){
            board[i] = ''
        }
    }

    return{clearBoard, updateBoard, checkForWinner}
})()


const displayController = (() =>{
    let gameFields = document.querySelectorAll('.square')
    let resetButton = document.getElementById('reset-button')
    let messageField = document.querySelector('.communication-output-text')


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


    return{sendMsg, setResultMsg}

})()

const gameController = (() =>{

})()


