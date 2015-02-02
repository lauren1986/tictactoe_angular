var ticTacToeApp = angular.module("ticTacToeApp", ["firebase"]);

ticTacToeApp.controller("ticTacToeCtrl", function($scope, $firebase) {


// Set up of various pieces that will be synced to Firebase. Special thanks to Wendy for all of her inspiration, as well as Dan, Sam, Brooke, Lee and Will for all their help to get to this "final" product!

	// This is the board setup.
		var ref = new Firebase("https://angular-tic-tac-toe.firebaseio.com/board");
    	// create an AngularFire reference to the data
    	var sync = $firebase(ref);
    	// download the data into a local object
    	$scope.board = sync.$asArray();

	// This is the player moves setup.
		var movesByPlayerRef = new Firebase("https://angular-tic-tac-toe.firebaseio.com/movesByPlayer");
			// create an AngularFire reference to the data
			var movesByPlayerSync = $firebase(movesByPlayerRef);
			// download the data into a local object
			$scope.movesByPlayer = movesByPlayerSync.$asArray();

	// This is the turns setup.
		var turnsRef = new Firebase("https://angular-tic-tac-toe.firebaseio.com/turns");
			// create an AngularFire reference to the data
			var turnsSync = $firebase(turnsRef);
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

	// Creates and saves the players to Firebase.

	$scope.movesByPlayer.$loaded(function(){
		if($scope.movesByPlayer.length == 0){
			$scope.movesByPlayer.$add({playerOne: false, playerTwo: true});
		}
		else{
			$scope.movesByPlayer[0].playerOne = false;
			$scope.movesByPlayer[0].playerTwo = true;
			$scope.movesByPlayer.$save(0);
		}
	});

	// Creates and saves the turns to Firebase.

	$scope.turns.$loaded(function() {
		if ($scope.turns.length == 0) {
			$scope.turns.$add({numMoves: 0});
		}
		else {
			$scope.turns[0].numMoves = 0;
			$scope.turns.$save($scope.turns[0]);
		}
	});


// This function allows for alternating turns, no duplicate turns, and inserting X & 0.
    $scope.makeMove = function(idx){
			console.log ("ready to start making moves");
    	if ($scope.turns[0].numMoves == 0) {
					$scope.movesByPlayer[0].playerOne = true;
					$scope.movesByPlayer[0].playerTwo = false;
			}
				console.log("now check if squares empty");
    	if (($scope.board[idx].moveByPlayer !='X') && ($scope.board[idx].moveByPlayer !='O') && ($scope.turns[0].numMoves >= 0)){
					if ((($scope.turns[0].numMoves % 2) == 0) && ($scope.movesByPlayer[0].playerOne == true)) {
						console.log("it's X's turn");
						$scope.board[idx].moveByPlayer = "X";
						$scope.board.$save($scope.board[idx]);
					}
					else if ((($scope.turns[0].numMoves % 2) != 0) && ($scope.movesByPlayer[0].playerTwo == true)) {
						console.log("it's O's turn");
						$scope.board[idx].moveByPlayer = "O";
						$scope.board.$save($scope.board[idx]);
					}
		      $scope.winConditions();
		      $scope.turns[0].numMoves++;
					$scope.turns.$save($scope.turns[0]);
		   }
    };


// This describes the possible game end scenarios.

    	// If true, then X wins.
    	$scope.xWins = false;

    	// If true, then O wins.
    	$scope.oWins = false;


// This sets the possible win conditions, checks ending status of game and prevents further moves after win. Thanks Wendy for your assistance on this piece!

    $scope.winConditions = function() {
			if (($scope.turns[0].numMoves % 2) == 0) {
	    	if(($scope.board[0].moveByPlayer == "X") && ($scope.board[1].moveByPlayer == "X") && ($scope.board[2].moveByPlayer == "X") ) {
					$scope.xWins = true;
					alert('"Build your own dreams, or someone else will hire you to build theirs."');
	    		}
	    	else if(($scope.board[3].moveByPlayer == "X") && ($scope.board[4].moveByPlayer == "X") && ($scope.board[5].moveByPlayer == "X") ) {
	    		$scope.xWins = true;
					alert('"It does not matter how slowly you go as long as you do not stop."');
					}
	    	else if(($scope.board[6].moveByPlayer == "X") && ($scope.board[7].moveByPlayer == "X") && ($scope.board[8].moveByPlayer == "X") ) {
	    	  $scope.xWins = true;
					alert('"It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live."');
	    		}
	    	else if(($scope.board[0].moveByPlayer == "X") && ($scope.board[3].moveByPlayer == "X") && ($scope.board[6].moveByPlayer == "X") ) {
					$scope.xWins = true;
					alert('"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover."');
	    	  }
	    	else if(($scope.board[1].moveByPlayer =="X") && ($scope.board[4].moveByPlayer == "X") && ($scope.board[7].moveByPlayer == "X") ) {
	    	  $scope.xWins = true;
					alert('"You can never cross the ocean until you have the courage to lose sight of the shore."');
	    		}
	    	else if(($scope.board[2].moveByPlayer == "X") && ($scope.board[5].moveByPlayer == "X") && ($scope.board[8].moveByPlayer == "X") ) {
	    		$scope.xWins = true;
					alert('"Everything you’ve ever wanted is on the other side of fear."');
	    		}
	    	else if(($scope.board[0].moveByPlayer == "X") && ($scope.board[4].moveByPlayer == "X") && ($scope.board[8].moveByPlayer == "X") ) {
					$scope.xWins = true;
					alert('"Certain things catch your eye, but pursue only those that capture the heart."');
	    	 	}
	    	else if(($scope.board[2].moveByPlayer == "X") && ($scope.board[4].moveByPlayer == "X") && ($scope.board[6].moveByPlayer == "X") ) {
					$scope.xWins = true;
					alert('"Challenges are what make life interesting and overcoming them is what makes life meaningful."');
					}
			}
			else if (($scope.turns[0].numMoves % 2) != 0) {
				if(($scope.board[0].moveByPlayer == "O") && ($scope.board[1].moveByPlayer == "O") && ($scope.board[2].moveByPlayer == "O") ) {
					$scope.oWins = true;
					alert('"Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless."');
				}
				else if(($scope.board[3].moveByPlayer == "O") && ($scope.board[4].moveByPlayer == "O") && ($scope.board[5].moveByPlayer == "O") ) {
					$scope.oWins = true;
					alert('"You may be disappointed if you fail, but you are doomed if you don’t try."');
					}
				else if(($scope.board[6].moveByPlayer == "O") && ($scope.board[7].moveByPlayer == "O") && ($scope.board[8].moveByPlayer == "O") ) {
					$scope.oWins = true;
					alert('"When everything seems to be going against you, remember that the airplane takes off against the wind, not with it."');
					}
				else if(($scope.board[0].moveByPlayer == "O") && ($scope.board[3].moveByPlayer == "O") && ($scope.board[6].moveByPlayer == "O") ) {
					$scope.oWins = true;
					alert('"Either write something worth reading or do something worth writing."');
					}
				else if(($scope.board[1].moveByPlayer == "O") && ($scope.board[4].moveByPlayer == "O") && ($scope.board[7].moveByPlayer == "O") ) {
					$scope.oWins = true;
					alert('"You were born with potential. You were born with goodness and trust. You were born with ideals and dreams. You were born with greatness. You were born with wings. You are not meant for crawling, so don’t. You have wings. Learn to use them and fly."');
					}
				else if(($scope.board[2].moveByPlayer == "O") && ($scope.board[5].moveByPlayer == "O") && ($scope.board[8].moveByPlayer == "O") ) {
					$scope.oWins = true;
					alert('"You are far too smart to be the only thing standing in your way."');
					}
				else if(($scope.board[0].moveByPlayer == "O") && ($scope.board[4].moveByPlayer == "O") && ($scope.board[8].moveByPlayer == "O") ) {
					$scope.oWins = true;
					alert('"Tell the negative committee that meets inside your head to sit down and shut up."');
					}
				else if(($scope.board[2].moveByPlayer == "O") && ($scope.board[4].moveByPlayer == "O") && ($scope.board[6].moveByPlayer == "O") ) {
					$scope.oWins = true;
					alert('"Never let success get to your head, never let failure get to your heart."');
					}
			}
			if (($scope.turns[0].numMoves == 8) && ($scope.oWins != true) && ($scope.xWins != true) ) {
					alert("So sorry Charlie! You haven't outsmarted your opponent, and therefore do not deserve any wisdom. Request a redo, get out of your head, and show us why you merit some advice.");
				}
			if (($scope.oWins == true) || ($scope.xWins == true)) {
					location.reload();
				}

    };

  	// Winning combinations -- reference for notes. [0,1,2] [3,4,5] [6,7,8] [0,3,6] [1,4,7] [2,5,8] [0,4,8] [2,4,6]


// This is where the board is reset.

	$scope.reset = function(){
		location.reload();
	};

});
