class Marker {
    constructor(color, ink) {
        this.color = color;
        this.ink = ink;
    }

    print(text) {
        let printedText = "";
        for (let i = 0; i < text.length; i++) {
            if (this.ink >= 0.5 && text[i] !== " ") {
                printedText += text[i];
                this.ink -= 0.5;
            } else {
                printedText += " ";
            }
        }
        console.log("%c" + printedText, "color:" + this.color);
    }
}

class RefillableMarker extends Marker {
    refill() {
        this.ink = 100;
    }
}
// Створення об'єкту простого маркера
const simpleMarker = new Marker("blue", 50);

// Друк тексту за допомогою простого маркера
simpleMarker.print("Hello world!");

// Створення об'єкту маркера, що заправляється
const refillableMarker = new RefillableMarker("red", 20);

// Друк тексту за допомогою маркера, що заправляється
refillableMarker.print("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");

// Заправка маркера
refillableMarker.refill();

// Друк тексту після заправки маркера
refillableMarker.print("Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");