import {IUserShortInfo} from "./interfaces";

const user: IUserShortInfo = {
    name:"Max",
    age:12,
    gender:'male'
}

function sum(a: number, b: number): number {
    return a + b
}

const showSum = (a: number, b: number): void => {
    console.log(a + b);
};

const incAge = (someUser: IUserShortInfo, inc: number): IUserShortInfo => {
    someUser.age += inc
    return someUser
};

console.log(sum(1, 2));
showSum(2, 3)
console.log(incAge(user, 2));