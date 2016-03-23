class Die {
    div: HTMLDivElement;
    value: number;
    
    constructor() {
        this.div = document.createElement('div');
        this.div.className = 'die'; // CSS class name, has nothing to do with Die TS class
        this.div.addEventListener('click', () => {
            this.roll();
        });
    }
    
    insert(): void {
        let diceContainer = document.getElementById('dice-container');
        diceContainer.appendChild(this.div);
        this.roll();
    }
    
    roll(): void {
        let randomNumber = Math.floor(Math.random() * 6) + 1;
        this.div.innerText = String(randomNumber);
        this.value = randomNumber;
    }
}

let dice: Array<Die> = [];

function addDie() {
    let die = new Die();
    die.insert();
    dice.push(die);
}

function rollAllDice() {
    for (let i = 0; i < dice.length; i++) {
        let die = dice[i];
        die.roll();
    }
}

function sumDice() {
    let sum = 0;
    for (let i = 0; i < dice.length; i++) {
        let die = dice[i];
        sum += die.value;
    }
    alert(`The sum of the dice is ${sum}.`);
}