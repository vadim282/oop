
//1
// 1 option
function Worker(name, surname, rate, days){
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
    this.getSalary = function() {
        return this.rate * this.days + ' $';
    }
};

let worker = new Worker('Иван', 'Иванов', 10, 31);


// 2 option

class Worker2 {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary() {
        return this.rate * this.days + ' $';
    }
};

let worker2 = new Worker2 ('Иван', 'Иванов', 10, 31);


//2

function Worker(name, surname, rate, days){

    this.getName = function() {
        return name;
    }
    this.getSurname = function() {
        return surname;
    }
    this.getRate = function() {
        return rate;
    }
    this.getDays = function() {
        return days;
    }
    this.getSalary = function() {
        return rate * days + ' $';
    }
};

//3

function Worker(name, surname, rate, days){

    this.getName = function() {
        return name;
    }
    this.getSurname = function() {
        return surname;
    }

    this.getRate = function() {
        return rate;
    }
    this.getDays = function() {
        return days;
    }
    this.getSalary = function() {
        return rate * days + ' $';
    }
    this.setRate = function(newRate) {
        rate = newRate;
    }
    this.setDays = function(newDays) {
        days = newDays;
    }
};


//4
//4.1
function MyString() {
    this.reverse = function(str) {
        let newStr = "";
        for (let i = str.length-1; i >= 0; i--){
            newStr += str[i];
        }
        return newStr;
    }
    this.ucFirst = function(str) {
        let newStr = str[0].toUpperCase() + str.slice(1);
        return newStr;
    }
    this.ucWords = function (str) {
        let arr = str.split(' ');
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
        }
        return arr.join(' ');
    }

};


//4.1

function Validator () {
    this.isEmail = function(str) {
        let isAt = str.indexOf('@');
        let isDot = str.lastIndexOf('.');

        if(isAt < 0 || str.indexOf('.') < 0) return false;
        if(isDot < isAt)  return false;
        if(isAt < 3) return false;
        if(isDot - isAt < 4) return false;
        if(str.slice(isDot + 1).length < 2) return false;

        return true;
    }
    this.isDomain = function(str) {
        let lisDot = str.lastIndexOf('.');

        if(str.slice(isDot + 1).length < 2) return false;
        if(str.slice(0, isDot).length < 2) return false;

        return true;
    }
    this.isDate = function (str) {
        if (new Date(str) == 'invalid date') return false;

        return true;
    }
    this.isPhone = function (str) {
        let phoneNum = str.match(/\d/g).join('');
        if(phoneNum.indexOf('380') != 0 || phoneNum.length != 12) return false;

        return true;
    }
};

//5

class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    getFullName() {
        return this.name + ' ' + this.surname;
    }
};

class  Student  extends User{
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }
    getCourse () {
        let courseDate = new Date();
        return courseDate.getFullYear() - this.year;
    }
};

//6

function  func() {
    let count = 1;

    return function() {
        return count++;
    };
}

var counter =  func();

console.log(counter());
console.log(counter());
console.log(counter());

