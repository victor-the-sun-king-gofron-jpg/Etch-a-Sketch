const masterGrid = document.querySelector('#grid-container');

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



        createGrid(8);
/*Event Listener:Draw Colors Squares*/
masterGrid.addEventListener('mouseover', (event) => {
    let currentTileColor = event.target.style.backgroundColor = 'black';
    });

//Button Event: Reset Color Squares/Enlarge Size