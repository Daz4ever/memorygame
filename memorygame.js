var app = angular.module('my-app', []);

function Card(url) {
  this.url = url;
  this.backCard = 'images/logo.png';
  this.open = false;
  this.matched = false;
}

var card1 = new Card("images/monsters-01.png");
var card2 = new Card("images/monsters-02.png");
var card3 = new Card("images/monsters-03.png");
var card4 = new Card("images/monsters-05.png");

app.controller('MemoryGame', function($scope, $timeout) {
  $scope.state = "first";
  $scope.firstCard =  null;

  $scope.cards = [
    [
      { url: card1.url, backCard: card1.backCard, open: card1.open, matched: card1.matched },
      { url: card2.url, backCard: card2.backCard, open: card2.open, matched: card2.matched },
      { url: card3.url, backCard: card3.backCard, open: card3.open, matched: card3.matched },
      { url: card4.url, backCard: card4.backCard, open: card4.open, matched: card4.matched }

    ],
    [
      { url: card1.url, backCard: card1.backCard, open: card1.open, matched: card1.matched },
      { url: card2.url, backCard: card2.backCard, open: card2.open, matched: card2.matched },
      { url: card3.url, backCard: card3.backCard, open: card3.open, matched: card3.matched },
      { url: card4.url, backCard: card4.backCard, open: card4.open, matched: card4.matched }  ]
    ];

    $scope.playerWins = function() {
      return $scope.cards.every(function(row) {
        var wholeRowMatched = row.every(function(card) {
          return card.matched;
        });
        return wholeRowMatched;
      });
    };

    $scope.openClosed = function(parentIdx, idx) {
      // debugger
      if ($scope.state === 'first') {
        if ($scope.cards[parentIdx][idx].open === false) {
          var currentCard = $scope.cards[parentIdx][idx];
          console.log("Current card is: ", currentCard);
          $scope.firstCard = currentCard;
          console.log("$scope.firstCard is: ", $scope.firstCard);
          $scope.cards[parentIdx][idx].open = true;
          $scope.state = "second";
        } else if ($scope.cards[parentIdx][idx].open === true) {
          var urlSecondCard = $scope.cards[parentIdx][idx].url;
          $scope.cards[parentIdx][idx].open = false;
          $scope.state = "first";
        }
      } else if ($scope.state === "second") {
        // var secondCurrentCard = "";


        if ($scope.cards[parentIdx][idx].open === false) {
          console.log("$scope.firstCard when $scope.state is second: ", $scope.firstCard);


          console.log("second state and card open is false");
          $scope.cards[parentIdx][idx].open = true;

          var secondCurrentCard = $scope.cards[parentIdx][idx];
          var urlSecondCurrentCard = $scope.cards[parentIdx][idx].url;
          if(urlSecondCurrentCard === $scope.firstCard.url) {
            console.log("$scope.firstCard.url is: ", $scope.firstCard.url);
            $scope.firstCard.matched = true;
            secondCurrentCard.matched = true;
            console.log("match true" + $scope.firstCard.matched);
            console.log("match true" + $scope.firstCard.matched);
            if($scope.playerWins()) {
              console.log('You win!');
            }
            $scope.state = "first";
          } else {
            $scope.state = "showing-cards";
            $timeout(function() {
              // debugger
                console.log('The cards do match');
                $scope.firstCard.open = false;
                secondCurrentCard.open = false;
                $scope.state = "first";
            }, 1000);
          }




          console.log(secondCurrentCard);
          console.log($scope.firstCard);
          console.log($scope.cards);

          // $scope.state = "first";
          console.log("second state true" + $scope.cards[parentIdx][idx].open);
        } else if ($scope.cards[parentIdx][idx].open === true) {
          console.log("match true" + $scope.firstCard.matched);
          $scope.cards[parentIdx][idx].open = false;
        }
        $scope.state = "first";




      }

      else if ($scope.state === "showing-cards") {
        // do nothing
      }


    };










});
