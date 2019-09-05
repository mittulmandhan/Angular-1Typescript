class User {
    constructor(){}

    //signatures
    adding = (x: number, y: number, z: number): number;
    adding = (x: string, y: string, z: string): string;

    // Implementation or u can say definition
    adding = (x: any, y: any, z: any): any => {
        let result: any;
        if(typeof x=="number" && typeof y=="number" && typeof z=="number") {
            result = x + y + z;
        }
        else {
            result = x + y + " " + z;
        }
        return result;
    }

    

}