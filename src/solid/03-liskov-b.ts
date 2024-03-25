
export interface Movil {
    getNumberOfSeats(): number;
}
export class Tesla implements Movil {

    constructor( private numberOfSeats: number ) {}

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Audi {

    constructor( private numberOfSeats: number ) {}

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Toyota {

    constructor( private numberOfSeats: number ) {}

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Honda {

    constructor( private numberOfSeats: number ) {}

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}


