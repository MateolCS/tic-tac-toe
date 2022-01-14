const Player = (sign) =>{
    const getSign = () => sign
    return {getSign}
}

const Board = () =>{
    let board = ['', '', '', '', '', '', '', '']

    const getBoard = () => board

    const updateBoard = (index, currentPlayer) => board[index] = currentPlayer.getSign() 

    const clearBoard = () =>{
        for(i=0; i<board.length; i++){
            board[i] = ''
        }
        return board
    }

    const checkIfPossible = (index) =>{
        if(board[index] != ''){
            return true
        }else{
            return false
        }
    }
    
    return {getBoard, updateBoard, clearBoard, checkIfPossible}
}

const game = (()=>{
    let PlayerX = Player('X')
    let PlayerO = Player('O')
    let currentPlayer = PlayerX
    let roundCount = 1
    let gameBoard = Board()
    let gameFields = document.querySelectorAll('.square')
    console.log(gameFields)

    while(roundCount <= 9){
        gameFields.forEach(gameField =>{
            gameField.addEventListener('click', ()=>{
                let index = 0
                if(gameBoard.checkIfPossible() == true){
                    gameBoard.updateBoard(index, currentPlayer.getSign())
                }else{
                    return
                }
            })
        })
    }
})


