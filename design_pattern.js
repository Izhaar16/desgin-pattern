/*

/////////////////////////////////////////////// Introduction ////////////////////////////////////////////////////

Ceci est un fichier concernant l'apprentissage de design pattern en collboration avec Brice
*/

class Car {
    // définir le constructeur
    colour = null;
    doors = null;
    seats = null;

    constructor(colour, doors, seats){
        this.colour = colour;
        this.doors = doors;
        this.seats = seats;
    }
    //Création de la classe builder
    static builder = class {
        colour = null;
        doors = null;
        seats = null;

        setColour(colour){
            this.colour = colour
            return this
        }
        setDoors(doors){
            this.doors = doors
            return this
        }
        setSeats(seats){
            this.seats = seats
            return seats
        }
        build (){
            let car = new Car(
                this.colour,
                this.doors,
                this.seats)
            return car
        }


    }

    affiche() {
        return "Car [ Colour = " + this.colour + "," + "Nombre de portes = " + this.doors + " Nombre de siège ="+ this.seats + "]"
        }
}

let car = new Car.builder()
    .setColour('Rouge')
    setDoors(4)
    .setSeats(5)
    .build()

console.log(car.affiche)
