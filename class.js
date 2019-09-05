"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Human = /** @class */ (function () {
    function Human(id) {
        this.id = id;
    }
    Human.prototype.Greet = function () {
        console.log('Hello');
    };
    return Human;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, address) {
        var _this = _super.call(this, id) || this;
        _this.name = name;
        _this.id = id;
        _this.address = address;
        return _this;
    }
    Employee.prototype.Show = function () {
        // console.log('ID: '+this.id+', Name: '+this.name+', Address'+this.address);
        console.log("ID: " + this.id + ", Name: " + this.name + ", Address: " + this.address);
    };
    return Employee;
}(Human));
exports.Employee = Employee;
var e1 = new Employee(1, 'Mohan', 'Noida');
e1.Show();
var h1 = new Employee(1, 'Hari', 'Delhi');
h1.Greet();
var i1 = new Employee(1, 'Mittul', 'Nagpur');
i1.Show();
