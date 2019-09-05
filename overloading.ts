//signatures
function adding(x: number, y: number, z: number): number;
function adding(x: string, y: string, z: string): string;

// Implementation or u can say definition
function adding(x: any, y: any, z: any): any {
    let result: any;
    if(typeof x=="number" && typeof y=="number" && typeof z=="number") {
        result = x + y + z;
    }
    else {
        result = x + y + " " + z;
    }
    return result;
}

let result1 = add(4, 3, 8);//15
let result2 = add("gurukul", "sight", "website");//gurukulsight website
