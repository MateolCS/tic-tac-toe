const Player = (sign) =>{
    const getSign = () => sign
    return {getSign}
}

const Board = () =>{
    let board = ['', '', '', '', '', '', '', '']

    const getBoard = () => board

    const updateBoard = (index, currentPlayer) =>{
        if(board[index] != ''){
            return
        }else{
            board[index] = currentPlayer.getSign()
        }
    } 

    const clearBoard = () =>{
        for(i=0; i<board.length; i++){
            board[i] = ''
        }
        return board
    }
    
    return {getBoard, updateBoard, clearBoard}
}


