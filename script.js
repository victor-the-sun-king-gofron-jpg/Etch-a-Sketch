const masterGrid = document.querySelector('#grid-container');
const resetSwitch = document.querySelector('#reset-switch');
const toggleSwitch = document.querySelector('#toggle-switch');
var toggleBetweenColors = true;

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

//Function to toggle between Black/Color
//Create a true false value
function toggleColor(){
    if(toggleBetweenColors === true){
        toggleBetweenColors = false;
    } else if(toggleBetweenColors === false){
        toggleBetweenColors = true;
    };
    console.log(toggleBetweenColors);
}

/*Event Listener:Draw Colors Squares*/
masterGrid.addEventListener('mouseover', (event) => {
    if(toggleBetweenColors === false){
        var currentTileColor = event.target.style.backgroundColor = coloredTiles();
    } else if(toggleBetweenColors === true){
        var currentTileColor = event.target.style.backgroundColor = 'black';
    }
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

//Function:Toggle when user draws via click

console.log(toggleBetweenColors);
resetSwitch.addEventListener('click', resetSketch);
toggleSwitch.addEventListener('click', toggleColor);
