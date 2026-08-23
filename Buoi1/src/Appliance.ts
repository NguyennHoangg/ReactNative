export abstract class Appliance {
    protected brand: string;
    protected isOn: boolean = false;

    constructor(brand: string) {
        this.brand = brand;
    }

    abstract turnOn(): void;
    abstract turnOff(): void;

    getStatus(): string {
        return this.isOn ? "ON" : "OFF";
    }
}

export class Fan extends Appliance {
    private speed: number;

    constructor(brand: string, speed: number = 1) {
        super(brand);
        this.speed = speed;
    }

    turnOn(): void {
        this.isOn = true;
        console.log(`${this.brand} Fan turned ON at speed ${this.speed}.`);
    }

    turnOff(): void {
        this.isOn = false;
        console.log(`${this.brand} Fan turned OFF.`);
    }

    setSpeed(speed: number): void {
        if (!this.isOn) console.log("Turn on the fan first.");
        else {
            this.speed = speed;
            console.log(`Fan speed set to ${speed}.`);
        }
    }
}

export class AirConditioner extends Appliance {
    private temperature: number;

    constructor(brand: string, temperature: number = 25) {
        super(brand);
        this.temperature = temperature;
    }

    turnOn(): void {
        this.isOn = true;
        console.log(`${this.brand} AC turned ON at ${this.temperature}°C.`);
    }

    turnOff(): void {
        this.isOn = false;
        console.log(`${this.brand} AC turned OFF.`);
    }

    setTemperature(temp: number): void {
        if (!this.isOn) console.log("Turn on the AC first.");
        else {
            this.temperature = temp;
            console.log(`AC temperature set to ${temp}°C.`);
        }
    }
}

const fan = new Fan("Panasonic", 2);
fan.turnOn();
fan.setSpeed(3);
fan.turnOff();

console.log("---");

const ac = new AirConditioner("Daikin", 26);
ac.turnOn();
ac.setTemperature(20);
ac.turnOff();
