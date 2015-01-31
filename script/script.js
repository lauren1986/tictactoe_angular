var ticTacToeApp = angular.module("ticTacToeApp", ["firebase"]);

ticTacToeApp.controller("ticTacToeCtrl", function($scope, $firebase) {


// Set up of various pieces that will be synced to Firebase.

	// This is the board setup.
		var ref = new Firebase("https://angular-tic-tac-toe.firebaseio.com/board");
    	// create an AngularFire reference to the data
    	var sync = $firebase(ref);
    	// download the data into a local object
    	$scope.board = sync.$asArray();

	// This is the player moves setup.
		var movesByPlayerRef = new Firebase("https://angular-tic-tac-toe.firebaseio.com/movesByPlayer");
			// create an AngularFire reference to the data
			var movesByPlayerSync = $firebase(ref);
			// download the data into a local object
			$scope.movesByPlayer = movesByPlayerSync.$asArray();

	// This is the turns setup.
		var turnsRef = new Firebase("https://angular-tic-tac-toe.firebaseio.com/turns");
			// create an AngularFire reference to the data
			var turnsSync = $firebase(ref);
			// download the data into a local object
			$scope.turns = turnsSync.$asArray();


	// Creates and saves the board to Firebase.

	$scope.board.$loaded (function () {
			if($scope.board.length == 0){
				for(i = 0; i < 9; i++){
					$scope.board.$add({moveByPlayer: ""});
				}
			}
			else{
				for(i = 0; i < 9; i++){
					$scope.board[i].moveByPlayer = "";
					$scope.board.$save(i);
				}
			}
		});

	// Creates and saves the players' moves to Firebase.

	// Creates and saves the turns to Firebase.

	$scope.turns.$loaded(function(){
		if ($scope.turns.length==0){
			$scope.turns.$add({numMoves: 0});
		}
		else {
			$scope.turns[0].numMoves=0;
			$scope.turns.$save(0);
		}
	});



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
			console.log("The click works!");
    	if ($scope.turnNumber < 9) {
    		if (($scope.board[idx].moveByPlayer !='X') && ($scope.board[idx].moveByPlayer !='O')){

						if (($scope.turnNumber % 2) == 0) {
							console.log("It's X's Turn!");
							$scope.board[idx].moveByPlayer = "X";
							$scope.board.$save($scope.board[idx]);
						}
						else if (($scope.turnNumber % 2) != 0) {
							console.log("It's O's Turn!");
							$scope.board[idx].moveByPlayer = "O";
							$scope.board.$save($scope.board[idx]);
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
	    	if(($scope.board[0].moveByPlayer == "X") && ($scope.board[1].moveByPlayer == "X") && ($scope.board[2].moveByPlayer == "X") ) {
					$scope.xWins = true;
					alert("X is a tic tac toe bad ass! X is officially the winner.");
	    		}
	    	else if(($scope.board[3].moveByPlayer == "X") && ($scope.board[4].moveByPlayer == "X") && ($scope.board[5].moveByPlayer == "X") ) {
	    		$scope.xWins = true;
					alert("X is a tic tac toe bad ass! X is officially the winner.");
					}
	    	else if(($scope.board[6].moveByPlayer == "X") && ($scope.board[7].moveByPlayer == "X") && ($scope.board[8].moveByPlayer == "X") ) {
	    	  $scope.xWins = true;
					alert("X is a tic tac toe bad ass! X is officially the winner.");
	    		}
	    	else if(($scope.board[0].moveByPlayer == "X") && ($scope.board[3].moveByPlayer == "X") && ($scope.board[6].moveByPlayer == "X") ) {
					$scope.xWins = true;
					alert("X is a tic tac toe bad ass! X is officially the winner.");
	    	  }
	    	else if(($scope.board[1].moveByPlayer =="X") && ($scope.board[4].moveByPlayer == "X") && ($scope.board[7].moveByPlayer == "X") ) {
	    	  $scope.xWins = true;
					alert("X is a tic tac toe bad ass! X is officially the winner.");
	    		}
	    	else if(($scope.board[2].moveByPlayer == "X") && ($scope.board[5].moveByPlayer == "X") && ($scope.board[8].moveByPlayer == "X") ) {
	    		$scope.xWins = true;
					alert("X is a tic tac toe bad ass! X is officially the winner.");
	    		}
	    	else if(($scope.board[0].moveByPlayer == "X") && ($scope.board[4].moveByPlayer == "X") && ($scope.board[8].moveByPlayer == "X") ) {
					$scope.xWins = true;
					alert("X is a tic tac toe bad ass! X is officially the winner.");
	    	 	}
	    	else if(($scope.board[2].moveByPlayer == "X") && ($scope.board[4].moveByPlayer == "X") && ($scope.board[6].moveByPlayer == "X") ) {
					$scope.xWins = true;
					alert("X is a tic tac toe bad ass! X is officially the winner.");
					}
			}
			else if (($scope.turnNumber % 2) != 0) {
				if(($scope.board[0].moveByPlayer == "O") && ($scope.board[1].moveByPlayer == "O") && ($scope.board[2].moveByPlayer == "O") ) {
					$scope.oWins = true;
					alert("O is a tic tac toe bad ass! O is officially the winner.");
				}
				else if(($scope.board[3].moveByPlayer == "O") && ($scope.board[4].moveByPlayer == "O") && ($scope.board[5].moveByPlayer == "O") ) {
					$scope.oWins = true;
					alert("O is a tic tac toe bad ass! O is officially the winner.");
					}
				else if(($scope.board[6].moveByPlayer == "O") && ($scope.board[7].moveByPlayer == "O") && ($scope.board[8].moveByPlayer == "O") ) {
					$scope.oWins = true;
					alert("O is a tic tac toe bad ass! O is officially the winner.");
					}
				else if(($scope.board[0].moveByPlayer == "O") && ($scope.board[3].moveByPlayer == "O") && ($scope.board[6].moveByPlayer == "O") ) {
					$scope.oWins = true;
					alert("O is a tic tac toe bad ass! O is officially the winner.");
					}
				else if(($scope.board[1].moveByPlayer == "O") && ($scope.board[4].moveByPlayer == "O") && ($scope.board[7].moveByPlayer == "O") ) {
					$scope.oWins = true;
					alert("O is a tic tac toe bad ass! O is officially the winner.");
					}
				else if(($scope.board[2].moveByPlayer == "O") && ($scope.board[5].moveByPlayer == "O") && ($scope.board[8].moveByPlayer == "O") ) {
					$scope.oWins = true;
					alert("O is a tic tac toe bad ass! O is officially the winner.");
					}
				else if(($scope.board[0].moveByPlayer == "O") && ($scope.board[4].moveByPlayer == "O") && ($scope.board[8].moveByPlayer == "O") ) {
					$scope.oWins = true;
					alert("O is a tic tac toe bad ass! O is officially the winner.");
					}
				else if(($scope.board[2].moveByPlayer == "O") && ($scope.board[4].moveByPlayer == "O") && ($scope.board[6].moveByPlayer == "O") ) {
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
