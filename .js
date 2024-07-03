body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f0f0f0;
    font-family: Arial, sans-serif;
}

.container {
    text-align: center;
}

.board {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3, 100px);
    grid-gap: 5px;
    margin: 20px auto;
    position: relative;
}

.cell {
    width: 100px;
    height: 100px;
    background-color: #fff;
    border: 1px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    cursor: pointer;
    transition: background-color 0.3s;
}

.cell.x {
    color: red;
}

.cell.o {
    color: blue;
}

.cell.winning {
    background-color: yellow;
}

.winning-message {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    font-size: 2em;
}

.winning-message.show {
    display: flex;
}

.winning-message button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 1em;
}