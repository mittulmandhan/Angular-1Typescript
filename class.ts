class Human {
    protected id: number;
    Greet() {
        console.log('Hello');
    }
}

class Employee extends Human{
    private id:number;
    name:string;
    address: string;
    constructor(id:number, name:string, address:string) {
        super();
        this.name=name;
        this.id=id;
        this.address=address
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