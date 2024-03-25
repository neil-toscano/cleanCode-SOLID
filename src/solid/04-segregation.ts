interface Bird {
    eat(): void;
    run(): void;
}

interface FlyingBird {
    fly(): void;
}

interface SwimmingBird {
    swim(): void;
}
class Tucan implements Bird, FlyingBird{
    public fly() {

    }

    public eat() {

    }
    public run() {}
}

class Humminbird {
    public fly() {}
    public eat() {}
    public run() {}
}

class Ostrich implements Bird {
    public eat() {}
    public run() {}
}