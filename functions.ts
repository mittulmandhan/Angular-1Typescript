let r1=Add(2,3);
function Add(x: number,y: number): number {
    return x+y;
}

//false calling of anonymous function
//let r2 = sum(2,5);

let sum = function (x: number, y: number) {
    return x+y;
}
let r2 = sum(2,3);

let add = (x: number, y: number) => {
    return x+y;
}
let r3 = add(3,6);