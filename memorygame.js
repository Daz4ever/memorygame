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
var card4 = new Card("images/monsters-04.png");

app.controller('MemoryGame', function($scope, $timeout) {
$scope.state = "first";
$scope.firstCard = [];

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

$scope.openClosed = function(parentIdx, idx) {
  // debugger
  if ($scope.state === 'first') {
    if ($scope.cards[parentIdx][idx].open === false) {
      var currentCard = $scope.cards[parentIdx][idx];
      $scope.firstCard.push(currentCard);
      $scope.cards[parentIdx][idx].open = true;
      $scope.state = "second";
    } else if ($scope.cards[parentIdx][idx].open === true) {
      var urlSecondCard = $scope.cards[parentIdx][idx].url;
      $scope.cards[parentIdx][idx].open = false;
      $scope.state = "first";
    }
  } else if ($scope.state === "second") {
    if ($scope.cards[parentIdx][idx].open === false) {
      var secondCurrentCard = $scope.cards[parentIdx][idx];
      $scope.cards[parentIdx][idx].open = true;
    } else if ($scope.cards[parentIdx][idx].open === true) {
      var urlSecondCurrentCard = $scope.cards[parentIdx][idx].url;
      $scope.cards[parentIdx][idx].open = false;
    }
  }

};










});
