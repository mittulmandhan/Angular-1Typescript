function doReverse<T>(list: T[]): T[] {
    let revList: T[]=[];
    for (let i = (list.length-1);i>=0;i--) {
        revList.push(list[i]);
    }
    return revList;
}
let letters = ['a', 'b', 'c', 'd', 'e'];
let reversedLetters = doReverse<string>(letters);
console.log(reversedLetters);// e, d, c, b, a

let numbers = [1,2,3,4,5];
let reversedNumbers = doReverse<number>(numbers);
console.log(reversedNumbers);// 5, 4, 3, 2, 1

class Customer {
    customers: any[];
    Add<T>(item: T) {
        return this.customers.push(item);
    }
}

const c1 = new CustomElementRegistry();
c1.Add<string>('Mittul');