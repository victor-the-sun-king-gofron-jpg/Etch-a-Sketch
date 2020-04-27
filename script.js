const masterGrid = document.querySelector('#grid-container');
const resetSwitch = document.querySelector('#reset-switch');

//Function:Create Grid
function createGrid(amount){  
    masterGrid.style.gridTemplateColumns = `repeat(${amount}, 1fr)`;
    masterGrid.style.gridTemplateRow = `repeat(${amount}, 1fr)`;

    for(var i = 0; i < amount**2; i++){
        const newGrid = document.createElement('div');
        masterGrid.appendChild(newGrid);
        newGrid.className = 'grid-item';
        };
    };

//Base Grid Start
createGrid(8);

//Function:Make tiles Colorful
function coloredTiles(){
    let rColor = Math.floor(Math.random() * 257);
    let gColor = Math.floor(Math.random() * 257);
    let bColor = Math.floor(Math.random() * 257);
    let randomColor = `rgb(${rColor}, ${gColor}, ${bColor})`;
    return randomColor;
    //Next step combine these as an input for a colored value
}

/*Event Listener:Draw Colors Squares*/
masterGrid.addEventListener('mouseover', (event) => {
    let currentTileColor = event.target.style.backgroundColor = coloredTiles();
    });

//Button Event: Reset Color Squares/Enlarge Size
function resetSketch(){

    masterGrid.innerHTML = "";
    let userGrid = prompt("Your grid has been cleared, What would you like the new square dimensions to be");
    /*if(typeof userGrid !== Number){
        userGrid = prompt("You need to enter a number silly");
    }*/
    createGrid(userGrid);
}

resetSwitch.addEventListener('click', resetSketch);