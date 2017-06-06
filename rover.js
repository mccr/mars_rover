var myRover = {
  name: 'myRover',
  position: [8,5],
  direction: 'E'
};

var plusRover = {
  name: 'plusRover',
  position: [9,7],
  direction: 'E'
};

console.log('myRover ' + JSON.stringify(myRover));
console.log('plusRover '+ JSON.stringify(plusRover));

var grid = [];
var comm = ['f','f','f','f','r','f','f','l','b','b'];
var obs = 0;

//Grid with Obstacles
for (var i = 0; i < 10; i++) {
  grid[i] = [];
    for (var j = 0; j < 10; j++) {
      if(j % 2 === 0) {
        grid [i][j] = 1;
      } else {
        grid [i][j] = 0;
      }
    }
}

console.log(grid);

function roverGridPos(rover) {
  if (grid[rover.position[0]][rover.position[1]] !== 1){
    grid[rover.position[0]][rover.position[1]] = 1;
    for (var i = 0; i < comm.length+1; i++) {
      roverComm(rover, i);
    }
    obs = 0;
    console.log(rover.name + JSON.stringify(rover));
  } else {
    console.log('this position for '+ rover.name +' is already occupied, choose another');
  }
}

roverGridPos(myRover);
roverGridPos(plusRover);

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
        if(rover.position[1]-1 < 0) {
          rover.position[1] = 9;
        } else {
          rover.position[1]--
        }
          break;
    case 'E':
        if(rover.position[0] + 1 > 9) {
          rover.position[0] = 0;
        } else {
          rover.position[0]++
        }
          break;
    case 'S':
        if(rover.position[1] + 1 > 9) {
          rover.position[1] = 0;
        } else {
          rover.position[1]++
        }
          break;
    case 'W':
        if(rover.position[0] - 1 < 0) {
          rover.position[0] = 9;
        } else {
          rover.position[0]--
        }
          break;
  };


}


function goBackward(rover) {
  switch(rover.direction) {
    case 'N':
        if(rover.position[1] + 1 > 9) {
          rover.position[1] = 0;
        } else {
          rover.position[1]++
        }
          break;
    case 'E':
        if(rover.position[0] - 1 < 0) {
          rover.position[0] = 9;
        } else {
          rover.position[0]--
        }
          break;
    case 'S':
    if(rover.position[1] - 1 < 0) {
      rover.position[1] = 9;
    } else {
      rover.position[1]--
    }
      break;
    case 'W':
    if(rover.position[0] + 1 > 9) {
      rover.position[0] = 0;
    } else {
      rover.position[0]++
    }
      break;
  };

}


function goRight(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'N';
      break;
  };
}


function goLeft(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction = 'W';
      break;
    case 'E':
      rover.direction = 'N';
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'W':
      rover.direction = 'S';
      break;
  };

}

function roverComm(rover, i) {
      if(obs === 0){
        grid[rover.position[0]][rover.position[1]] = 0;
        switch(comm[i]) {
          case 'f':
            goForward(rover);
            if(grid[rover.position[0]][rover.position[1]] === 1) {
              console.log('there is an obstacle for '+ rover.name + " and he can't keep going");
              goBackward(rover);
              obs = 1;
              grid[rover.position[0]][rover.position[1]] = 1;
              break;
            }
          grid[rover.position[0]][rover.position[1]] = 1;
          console.log("New " + rover.name + " Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
          break;
          case 'b':
            goBackward(rover);
            if(grid[rover.position[0]][rover.position[1]] === 1) {
              console.log('there is an obstacle for '+ rover.name + " and he can't keep going");
              goBackward(rover);
              obs = 1;
              grid[rover.position[0]][rover.position[1]] = 1;
              break;
            }
          grid[rover.position[0]][rover.position[1]] = 1;
          console.log("New " + rover.name + " Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
          break;
          case 'r':
            goRight(rover);
            console.log("New " + rover.name + " direction " + rover.direction);
            break;
          case 'l':
            goLeft(rover);
            console.log("New " + rover.name + " direction " + rover.direction);
            break;
        }
      }
  }
