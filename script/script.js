var app = angular.module("ticTacToeApp", []);

app.controller("ticTacToeCtrl", function($scope){

	// This array describes the 9 possible places on the board.
	$scope.board = ["", "", "", "", "", "", "", "", ""];

	// This defines that the turn number starts at 0.
	$scope.turnNumber = 0;

	// This function allows for alternating turns and inserting X & 0.
    $scope.makeMove = function(idx){
        $scope.board[idx] = (($scope.turnNumber % 2) == 0 ? "X" : "O");
        $scope.turnNumber++;
    };

    // This limits the number of turns to 9.

    // This sets the possible win conditions.

    

    // This describes the possible game end scenarios.

    	// If true, then X wins.
    	$scope.xWins = false;

    	// If true, then O wins.
    	$scope.oWins = false;

    	// If true, it's a cat's game.
    	$scope.tie = false;

    // This function starts to find the winning status (or lack thereof).

    $scope.winningStatus = function() {

    };
    
    // This 


});
