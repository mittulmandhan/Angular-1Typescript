// importing non-default export classes from class.ts
import {I1, Employee} from './class';
// importing the default export class of generics.ts
import Customer from './generics';

const i1: I1 = new Employee(1, 'Mohan', 'Noida');
i1.Show();
