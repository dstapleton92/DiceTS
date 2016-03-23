var Die = (function () {
    function Die() {
        var _this = this;
        this.div = document.createElement('div');
        this.div.className = 'die';
        this.div.addEventListener('click', function (e) {
            _this.roll();
        });
    }
    Die.prototype.insert = function () {
        var diceContainer = document.getElementById('dice-container');
        diceContainer.appendChild(this.div);
        this.roll();
    };
    Die.prototype.roll = function () {
        var randomNumber = Math.floor(Math.random() * 6) + 1;
        this.div.innerText = String(randomNumber);
        this.value = randomNumber;
    };
    return Die;
})();
var dice = [];
function addDie() {
    var die = new Die();
    die.insert();
    dice.push(die);
}
function rollAllDice() {
    for (var i = 0; i < dice.length; i++) {
        var die = dice[i];
        die.roll();
    }
}
function sumDice() {
    var sum = 0;
    for (var i = 0; i < dice.length; i++) {
        var die = dice[i];
        sum += die.value;
    }
    alert("The sum of the dice is " + sum + ".");
}
