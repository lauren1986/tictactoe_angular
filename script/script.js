var ticTacToeApp = angular.module("ticTacToeApp", ["firebase"]);

ticTacToeApp.controller("ticTacToeCtrl", function($scope, $firebase) {


// Set up of various pieces that will be synced to Firebase.

	// This is the board setup.
		var ref = new Firebase("https://angular-tic-tac-toe.firebaseapp.com/board");
    	// create an AngularFire reference to the data
    	var sync = $firebase(ref);
    	// download the data into a local object
    	$scope.board = sync.$asArray();

	// This is the moves setup.
		var movesref = new Firebase("https://angular-tic-tac-toe.firebaseapp.com/moves");
			// create an AngularFire reference to the data
			var movessync = $firebase(ref);
			// download the data into a local object
			$scope.moves = movessync.$asArray();

// Save board to Firebase.

	$scope.board.$loaded(function(){
		if($scope.board.length == 0){
			for(var i = 0; i < 9; i++){
				$scope.board.$add({playerMove:""});
				}
		}
		else{
			for(var i = 0; i <9; i++){
				$scope.board[i].playerMove ="";
				$scope.board.$save(i);
				}
		}
	});

// This array describes the 9 possible places on the board.
	$scope.board = ["", "", "", "", "", "", "", "", ""];



// This defines that the turn number starts at 0.
	$scope.turnNumber = 0;


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


// This sets the possible win conditions, checks ending status of game and prevents further moves after win. Thanks Wendy for your assistance on this piece!

    $scope.winConditions = function() {
			if (($scope.turnNumber % 2) == 0) {
	    	if(($scope.board[0] == "X") && ($scope.board[1] == "X") && ($scope.board[2]=="X") ) {
					$scope.xWins = true;
					alert("X is a tic tac toe bad ass! X is officially the winner.");
	    		}
	    	else if(($scope.board[3] == "X") && ($scope.board[4] == "X") && ($scope.board[5]=="X") ) {
	    		$scope.xWins = true;
					alert("X is a tic tac toe bad ass! X is officially the winner.");
					}
	    	else if(($scope.board[6] == "X") && ($scope.board[7]=="X") && ($scope.board[8]=="X") ) {
	    	  $scope.xWins = true;
					alert("X is a tic tac toe bad ass! X is officially the winner.");
	    		}
	    	else if(($scope.board[0] == "X") && ($scope.board[3]=="X") && ($scope.board[6]=="X") ) {
					$scope.xWins = true;
					alert("X is a tic tac toe bad ass! X is officially the winner.");
	    	  }
	    	else if(($scope.board[1] =="X") && ($scope.board[4]=="X") && ($scope.board[7]=="X") ) {
	    	  $scope.xWins = true;
					alert("X is a tic tac toe bad ass! X is officially the winner.");
	    		}
	    	else if(($scope.board[2]=="X") && ($scope.board[5]=="X") && ($scope.board[8]=="X") ) {
	    		$scope.xWins = true;
					alert("X is a tic tac toe bad ass! X is officially the winner.");
	    		}
	    	else if(($scope.board[0]=="X") && ($scope.board[4]=="X") && ($scope.board[8]=="X") ) {
					$scope.xWins = true;
					alert("X is a tic tac toe bad ass! X is officially the winner.");
	    	 	}
	    	else if(($scope.board[2]=="X") && ($scope.board[4]=="X") && ($scope.board[6]=="X") ) {
					$scope.xWins = true;
					alert("X is a tic tac toe bad ass! X is officially the winner.");
					}
			}
			else if (($scope.turnNumber % 2) != 0) {
				if(($scope.board[0] == "O") && ($scope.board[1] == "O") && ($scope.board[2]=="O") ) {
					$scope.oWins = true;
					alert("O is a tic tac toe bad ass! O is officially the winner.");
				}
				else if(($scope.board[3] == "O") && ($scope.board[4] == "O") && ($scope.board[5] == "O") ) {
					$scope.oWins = true;
					alert("O is a tic tac toe bad ass! O is officially the winner.");
					}
				else if(($scope.board[6] =="O") && ($scope.board[7] == "O") && ($scope.board[8] == "O") ) {
					$scope.oWins = true;
					alert("O is a tic tac toe bad ass! O is officially the winner.");
					}
				else if(($scope.board[0] == "O") && ($scope.board[3] == "O") && ($scope.board[6] == "O") ) {
					$scope.oWins = true;
					alert("O is a tic tac toe bad ass! O is officially the winner.");
					}
				else if(($scope.board[1] == "O") && ($scope.board[4] == "O") && ($scope.board[7] == "O") ) {
					$scope.oWins = true;
					alert("O is a tic tac toe bad ass! O is officially the winner.");
					}
				else if(($scope.board[2] == "O") && ($scope.board[5] == "O") && ($scope.board[8] == "O") ) {
					$scope.oWins = true;
					alert("O is a tic tac toe bad ass! O is officially the winner.");
					}
				else if(($scope.board[0] == "O") && ($scope.board[4] == "O") && ($scope.board[8] == "O") ) {
					$scope.oWins = true;
					alert("O is a tic tac toe bad ass! O is officially the winner.");
					}
				else if(($scope.board[2] == "O") && ($scope.board[4] == "O") && ($scope.board[6] == "O") ) {
					$scope.oWins = true;
					alert("O is a tic tac toe bad ass! O is officially the winner.");
					}
			}
			if (($scope.turnNumber == 8) && ($scope.oWins != true) && ($scope.xWins != true) ) {
					alert("So sorry Charlie! You haven't outsmarted your opponent...it's a tie.");
				}
			if (($scope.oWins == true) || ($scope.xWins == true)) {
					// console.log("now stop game");
				}

    };

  	// Winning combinations -- reference for notes. [0,1,2] [3,4,5] [6,7,8] [0,3,6] [1,4,7] [2,5,8] [0,4,8] [2,4,6]


// This is where the board is reset.

	$scope.reset = function(){
		location.reload();
	};

});
