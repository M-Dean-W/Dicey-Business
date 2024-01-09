
let button = document.createElement("button")
let btnText = document.createTextNode("Generate Die")

button.appendChild(btnText)
this.document.body.appendChild(button)

let container = document.createElement('container')
document.body.appendChild(container)

container.className = "con"


const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


class Die {
    constructor() {
        this.div = document.createElement('div');
        this.value = document.createTextNode(getRandomNumber(1,6));
        this.div.className = 'box';
        this.div.appendChild(this.value)
        container.appendChild(this.div);
        let reRoll = document.getElementById("Roll")
        reRoll.addEventListener('click', () => this.rollDice())
    }

    rollDice() {
       
             this.value.nodeValue = (getRandomNumber(1,6));
             this.div.appendChild(this.value)
    
    }

}

button.addEventListener("click", function () {
    new Die()
    
})