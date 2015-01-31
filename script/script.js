var app = angular.module("ticTacToeApp", ["firebase"]);

app.controller("ticTacToeCtrl", function($scope, $firebase){


// Set up the board in firebase.
	var ref = new Firebase("https://angular-tic-tac-toe.firebaseapp.com/board");
    // create an AngularFire reference to the data
    var sync = $firebase(ref);
    // download the data into a local object
    $scope.board = sync.$asArray();
		

// This array describes the 9 possible places on the board.
	$scope.board = ["", "", "", "", "", "", "", "", ""];



// This defines that the turn number starts at 0.
	$scope.turnNumber = 0;


	// This defines the two different players and the number of points they accumulate.


	// Change background colors of each square

	// $scope.changeColor = function(idx) {
	// 	$scope.board[0] = {'background-color': 'green'};
	// 	$scope.board[1].bgColor="#000000";
	// 	$scope.board[2].bgColor="blue";
	// 	$scope.board[3].style.backgroundColor="#CCCCCC";
	// 	$scope.board[4].bgColor = ('background-color', 'white');
	// 	$scope.board[5].style.backgroundColor="blue";
	// 	$scope.board[6].style.backgroundColor="#CCCCCC";
	// 	$scope.board[7].bgColor="#000000";
	// 	$scope.board[8].bgColor="blue";
	// };


// This function allows for alternating turns, a max of 9, no duplicating turns, and inserting X & 0.
    $scope.makeMove = function(idx){
    	if ($scope.turnNumber < 9) {
    		if (($scope.board[idx] !='X') && ($scope.board[idx] !='O')){

						if (($scope.turnNumber % 2) == 0) {
							$scope.board[idx] = "X";
						}
						else if (($scope.turnNumber % 2) != 0) {
							$scope.board[idx] = "O";
						}
		        $scope.winConditions();
		        $scope.turnNumber++;
		    }
		}
    };


// This describes the possible game end scenarios.

    	// If true, then X wins.
    	$scope.xWins = false;

    	// If true, then O wins.
    	$scope.oWins = false;


// This sets the possible win conditions, checks ending status of game and prevents further moves after win.

    $scope.winConditions = function() {
			if (($scope.turnNumber % 2) == 0) {
	    	if(($scope.board[0] == "X") && ($scope.board[1] == "X") && ($scope.board[2]=="X") ) {
					$scope.xWins = true;
					alert("X Wins!");
	    		}
	    	else if(($scope.board[3] == "X") && ($scope.board[4] == "X") && ($scope.board[5]=="X") ) {
	    		$scope.xWins = true;
					alert("X Wins!");
					}
	    	else if(($scope.board[6] == "X") && ($scope.board[7]=="X") && ($scope.board[8]=="X") ) {
	    	  $scope.xWins = true;
					alert("X Wins!");
	    		}
	    	else if(($scope.board[0] == "X") && ($scope.board[3]=="X") && ($scope.board[6]=="X") ) {
					$scope.xWins = true;
					alert("X Wins!");
	    	  }
	    	else if(($scope.board[1] =="X") && ($scope.board[4]=="X") && ($scope.board[7]=="X") ) {
	    	  $scope.xWins = true;
					alert("X Wins!");
	    		}
	    	else if(($scope.board[2]=="X") && ($scope.board[5]=="X") && ($scope.board[8]=="X") ) {
	    		$scope.xWins = true;
					alert("X Wins!");
	    		}
	    	else if(($scope.board[0]=="X") && ($scope.board[4]=="X") && ($scope.board[8]=="X") ) {
					$scope.xWins = true;
					alert("X Wins!");
	    	 	}
	    	else if(($scope.board[2]=="X") && ($scope.board[4]=="X") && ($scope.board[6]=="X") ) {
					$scope.xWins = true;
					alert("X Wins!");
					}
			}
			else if (($scope.turnNumber % 2) != 0) {
				if(($scope.board[0] == "O") && ($scope.board[1] == "O") && ($scope.board[2]=="O") ) {
					$scope.oWins = true;
					alert("O Wins!");
				}
				else if(($scope.board[3] == "O") && ($scope.board[4] == "O") && ($scope.board[5] == "O") ) {
					$scope.oWins = true;
					alert("O Wins!");
					}
				else if(($scope.board[6] =="O") && ($scope.board[7] == "O") && ($scope.board[8] == "O") ) {
					$scope.oWins = true;
					alert("O Wins!");
					}
				else if(($scope.board[0] == "O") && ($scope.board[3] == "O") && ($scope.board[6] == "O") ) {
					$scope.oWins = true;
					alert("O Wins!");
					}
				else if(($scope.board[1] == "O") && ($scope.board[4] == "O") && ($scope.board[7] == "O") ) {
					$scope.oWins = true;
					alert("O Wins!");
					}
				else if(($scope.board[2] == "O") && ($scope.board[5] == "O") && ($scope.board[8] == "O") ) {
					$scope.oWins = true;
					alert("O Wins!");
					}
				else if(($scope.board[0] == "O") && ($scope.board[4] == "O") && ($scope.board[8] == "O") ) {
					$scope.oWins = true;
					alert("O Wins!");
					}
				else if(($scope.board[2] == "O") && ($scope.board[4] == "O") && ($scope.board[6] == "O") ) {
					$scope.oWins = true;
					alert("O Wins!");
					}
			}
			if (($scope.turnNumber == 8) && ($scope.oWins != true) && ($scope.xWins != true) ) {
					alert("It is a tie!");
				}
			if (($scope.oWins == true) || ($scope.xWins == true)) {
					// console.log("now stop game");

				}

    };

  	// [0,1,2] [3,4,5] [6,7,8] [0,3,6] [1,4,7] [2,5,8] [0,4,8] [2,4,6]


// This is where you reset the board.

	$scope.reset = function(){
		location.reload();
	};

});
