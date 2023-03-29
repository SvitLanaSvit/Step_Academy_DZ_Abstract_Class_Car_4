abstract class Car{
    protected id: number;
    protected model: string;
    protected power: number;
    protected price: number;
    
    constructor(id: number, model: string, power: number, price: number){
        this.id = id;
        this.model = model;
        this.power = power;
        this.price = price;
    }

    protected abstract getId(): number;
    protected abstract getModel(): string;
    protected abstract getPower(): number;
    protected abstract getPrice(): number;
    protected abstract getInfo(): void;
}

class Bugatti extends Car{
    private manufacturerCountry: string = "France";

    constructor(id: number, model: string, power: number, price: number){
        super(id, model, power, price);
    }

    public getId(): number {
        return this.id;
    }

    public getModel(): string {
        return this.model;
    }

    public getPower(): number {
        return this.power;
    }

    public getPrice(): number {
        return this.price;
    }

    public getCountry(): string{
        return this.manufacturerCountry;
    }

    public getInfo(): void {
        console.log(`
        id:\t${this.id}\n
        model:\t${this.model}\n
        country of manufacture:\t${this.manufacturerCountry}\n
        power:\t${this.power} PS\n
        year:\t${this.price} \u20AC`)
    }
}

class Maybach extends Car{
    private manufacturerCountry: string = "Germany";

    constructor(id: number, model: string, power: number, price: number){
        super(id, model, power, price);
    }

    public getId(): number {
        return this.id;
    }

    public getModel(): string {
        return this.model;
    }

    public getPower(): number {
        return this.power;
    }

    public getPrice(): number {
        return this.price;
    }

    public getCountry(): string{
        return this.manufacturerCountry;
    }

    public getInfo(): void {
        console.log(`
        id:\t${this.id}\n
        model:\t${this.model}\n
        country of manufacture:\t${this.manufacturerCountry}\n
        power:\t${this.power} PS\n
        year:\t${this.price} \u20AC`)
    }
}

class Pagani extends Car{
    private manufacturerCountry: string = "Italy";

    constructor(id: number, model: string, power: number, price: number){
        super(id, model, power, price);
    }

    public getId(): number {
        return this.id;
    }

    public getModel(): string {
        return this.model;
    }

    public getPower(): number {
        return this.power;
    }

    public getPrice(): number {
        return this.price;
    }

    public getCountry(): string{
        return this.manufacturerCountry;
    }

    public getInfo(): void {
        console.log(`
        id:\t${this.id}\n
        model:\t${this.model}\n
        country of manufacture:\t${this.manufacturerCountry}\n
        power:\t${this.power} PS\n
        year:\t${this.price} \u20AC`)
    }
}

const veyron = new Bugatti(1, 'Veyron', 1001, 1490000);
const exelero = new Maybach(2, 'Exelero', 690, 7800000);
const huayra_tricolore = new Pagani(3, 'Huayra Tricolore', 840, 6500000);
veyron.getInfo();
exelero.getInfo();
huayra_tricolore.getInfo();
const cars = [veyron, exelero, huayra_tricolore];


const container = document.getElementById("table-container");

// Create the table element
const table = document.createElement("table");

// Add table headers
const headerRow = table.insertRow();
const headers = ["id", "model", "country of manufacturer", "power, PS", "price, \u20AC"];
for(let header of headers){
    const headerCell = headerRow.insertCell();
    headerCell.setAttribute("class", "header_cell")
    headerCell.textContent = header;
}

// Add table rows with car data
for(let car of cars){
    const row = table.insertRow();
    const idCell = row.insertCell();
    idCell.setAttribute("style", "text-align: center;");
    const modelCell = row.insertCell();
    const countryCell = row.insertCell();
    const powerCell = row.insertCell();
    powerCell.setAttribute("style", "text-align: center;");
    const priceCell = row.insertCell();
    priceCell.setAttribute("style", "text-align: center;");

    idCell.textContent = car.getId().toString();
    modelCell.textContent = car.getModel().toString();
    countryCell.textContent = car.getCountry().toString();
    powerCell.textContent = car.getPower().toString();
    priceCell.textContent = car.getPrice().toString() + ',00';
}

// Append the table to the div
container?.appendChild(table);