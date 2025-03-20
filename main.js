// Define the functions first
function playf() {
    // Code to navigate to Chess.html
    window.location.href = 'Chess.html';
}

function playb() {
    // Code to navigate to sceneB.html
    window.location.href = 'sceneB.html';
}

// Attach the functions to button click events
document.getElementById('chessf').addEventListener('click', playf);
document.getElementById('chessb').addEventListener('click', playb);
