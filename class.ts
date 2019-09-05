export interface I1 {
    Show();
}

class Human {
    protected id: number;
    constructor(id: number);
    constructor(id: string);
    constructor(id: any) {
        this.id=id;
    }
    Greet() {
        console.log('Hello');
    }
}

export class Employee extends Human implements I1{
    private id:number;
    name:string;
    address: string;
    constructor(id:number, name:string, address:string) {
        super(id);
        this.name=name;
        this.id=id;
        this.address=address;
    }
    Show() {
        // console.log('ID: '+this.id+', Name: '+this.name+', Address'+this.address);
        console.log(`ID: ${this.id}, Name: ${this.name}, Address: ${this.address}`);
    }
}
const e1:Employee = new Employee(1, 'Mohan', 'Noida');
e1.Show();

const h1: Human = new Employee(1, 'Hari', 'Delhi');
h1.Greet();

const i1: I1 = new Employee(1, 'Mittul', 'Nagpur');
i1.Show();