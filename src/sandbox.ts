type StringOrNum = string | number;

type UserInfo = {
    name: string;
    uid: StringOrNum
}

const logDetails = (uid: StringOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`)
}

const greet = (user: UserInfo) => {
    console.log(`${user.name} says hello`)
}












// const returnPassed = (param: string | number | boolean) : string | number | boolean => {
//     return param;
// }

// console.log(returnPassed("kuba"));
// console.log(returnPassed(12));
// console.log(returnPassed(false));

// const returnPassedGeneric = <T>(param: T): T => {
//     return param;
// }
// console.log(returnPassedGeneric("kuba"));
// console.log(returnPassedGeneric(12));
// console.log(returnPassedGeneric(false));
