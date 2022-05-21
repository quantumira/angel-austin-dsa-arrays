(function($) {
    var board;
    var cats = [];
    var elemTypes = ['toy', 'food', 'water', 'litter'];
    var feelings = ['bored', 'hungry', 'thirsty', 'dirty', 'content'];
    var activeElem;

    var randElem = function(arr) {
        return arr[Math.floor(Math.random()*arr.length)];
    };

    var Cat = function(index) {
        var _cat = {
            div: $("<div class='tile cat'></div>").css("left", board.width()*index/4),
            state: randElem(feelings)
        };
        _cat.otherStates = function() 