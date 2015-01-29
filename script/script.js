var app = angular.module("ticTacToeApp", []);

app.controller("ticTacToeCtrl", function($scope){

	// This array describes the 9 possible places on the board.
	$scope.board = ["", "", "", "", "", "", "", "", ""];

	// This defines that the turn number starts at 0.
	$scope.turnNumber = 0;

	// This function allows for alternating turns, a max of 9, and inserting X & 0.
    $scope.makeMove = function(idx){
    	if ($scope.turnNumber < 9) {
	        var play = (($scope.turnNumber % 2) == 0 ? "X" : "O");
	        $scope.board[idx] = play;
	        $scope.winConditions(play);
	        $scope.turnNumber++;
	    }
    };

    // This describes the possible game end scenarios.

    	// If true, then X wins.
    	$scope.xWins = false;

    	// If true, then O wins.
    	$scope.oWins = false;

    	// If true, it's a cat's game.
    	$scope.tie = false;


    // This sets the possible win conditions.

    $scope.winConditions = function(play) {
    	
    	if($scope.board[0] && $scope.board[1] && $scope.board[2]) {
    		alert("it's a win!");
    	}
    	else if($scope.board[3] && $scope.board[4] && $scope.board[5] ) {
    		alert("it's a win!");
    	}
    	else if($scope.board[6] && $scope.board[7] && $scope.board[8] ) {
    		alert("it's a win!");
    	}
    	else if($scope.board[0] && $scope.board[3] && $scope.board[6] ) {
    		alert("it's a win!");
    	}

    	else if($scope.board[1] && $scope.board[4] && $scope.board[7] ) {
    		alert("it's a win!");
    	}
    	else if($scope.board[2] && $scope.board[5] && $scope.board[8] ) {
    		alert("it's a win!");
    	}
    	else if($scope.board[0] && $scope.board[4] && $scope.board[8] ) {
    		alert("it's a win!");
    	}
    	else if($scope.board[2] && $scope.board[4] && $scope.board[6] ) {
    		alert("it's a win!");
    	}
    	else  {
    		// it's a tie
    	}

    };

  	// [0,1,2] [3,4,5] [6,7,8] [0,3,6] [1,4,7] [2,5,8] [0,4,8] [2,4,6]

    
    // This function starts to find the winning status (or lack thereof).

    


});
