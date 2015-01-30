var app = angular.module("ticTacToeApp", []);

app.controller("ticTacToeCtrl", function($scope){

	//var ref = new Firebase("https://angular-tic-tac-toe.firebaseio.com/");
    // create an AngularFire reference to the data
    //var sync = $firebase(ref);
    // download the data into a local object
    // DON'T FORGET TO DO!  $scope.names = sync.$asArray();

	// This array describes the 9 possible places on the board.
	$scope.board = ["", "", "", "", "", "", "", "", ""];

	// This defines that the turn number starts at 0.
	$scope.turnNumber = 0;

	// This defines the two different players.
	//$scope.playerOne = "X";
	//$scope.playerTwo = "0";

	// Change background colors of each square

	// This function allows for alternating turns, a max of 9, no duplicating turns, and inserting X & 0.
    $scope.makeMove = function(idx){
    	if ($scope.turnNumber < 9) {
    		if (($scope.board[idx] !='X') && ($scope.board[idx] !='O')){
		        var play = (($scope.turnNumber % 2) == 0 ? "X" : "O");
		        $scope.board[idx] = play;
		        $scope.winConditions(play);
		        $scope.turnNumber++;
		    }
		}
    };

    // This describes the possible game end scenarios.

    	// If true, then X wins.
    	$scope.xWins = false;

    	// If true, then O wins.
    	$scope.oWins = false;

    	// If true, it's a cat's game.
    	//$scope.tie = false;

     // This function starts to find the winning status (or lack thereof).

    $scope.checkGameStatus = function(play){
		if(play == "X"){
			$scope.xWins = true;
			alert("X Wins!");
		}
		else if(play == "O"){
			$scope.oWins = true;
			alert("O Wins!");
		}
		//else {
			//$scope.makeMove != null;
			//alert("it's a tie!")
		//}
	};


    // This sets the possible win conditions.

    $scope.winConditions = function(play) {
	    	if($scope.board[0] && $scope.board[1] && $scope.board[2] ) {
	    		$scope.checkGameStatus(play);
	    	}
	    	else if($scope.board[3] && $scope.board[4] && $scope.board[5] ) {
	    		$scope.checkGameStatus(play);
	    	}
	    	else if($scope.board[6] && $scope.board[7] && $scope.board[8] ) {
	    		$scope.checkGameStatus(play);
	    	}
	    	else if($scope.board[0] && $scope.board[3] && $scope.board[6] ) {
	    		$scope.checkGameStatus(play);
	    	}

	    	else if($scope.board[1] && $scope.board[4] && $scope.board[7] ) {
	    		$scope.checkGameStatus(play);
	    	}
	    	else if($scope.board[2] && $scope.board[5] && $scope.board[8] ) {
	    		$scope.checkGameStatus(play);
	    	}
	    	else if($scope.board[0] && $scope.board[4] && $scope.board[8] ) {
	    		$scope.checkGameStatus(play);
	    	}
	    	else if($scope.board[2] && $scope.board[4] && $scope.board[6] ) {
	    		$scope.checkGameStatus(play);
	    	}
	    	else  {
	    		//alert("It's a tie!")
	    	}
    };

  	// [0,1,2] [3,4,5] [6,7,8] [0,3,6] [1,4,7] [2,5,8] [0,4,8] [2,4,6]

// This is where you reset the board.

	$scope.reset = function(){
		location.reload();
	};

});
