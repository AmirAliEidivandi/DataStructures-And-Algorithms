class Cookie {
    constructor(color) {
        this.color = color;
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }
}

const cookieOne = new Cookie("brown");
const cookieTwo = new Cookie("blue");

console.log(cookieOne.setColor('red'));
console.log(cookieOne.getColor());
