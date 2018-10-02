// 1. Given the following array, write three different expressions, loops, or functions (or combination thereof) that will output true if 'bar' exists in the array.
console.log('ANSWER 1');

const arrWithBar = ['test1', 'test2', 'bar', 'test3'];
const arrWithNoBar = ['test1', 'test2', 'test3'];

console.log(arrWithBar.includes('bar'));
console.log(arrWithNoBar.includes('bar'));

console.log(arrWithBar.indexOf('bar') > -1);
console.log(arrWithNoBar.indexOf('bar') > -1);

console.log(arrWithBar.indexOf('bar') > -1);
console.log(arrWithNoBar.indexOf('bar') > -1);

const foundBar: string = arrWithBar.find((el) => el === 'bar');
foundBar ? console.log(true) : console.log(false);
const foundNoBar: string = arrWithNoBar.find((el) => el === 'bar');
foundNoBar ? console.log(true) : console.log(false);

// 2. Given that the Unicode characters for a-z are 65-90, write a self executing function that pushes the letters of the alphabet into an array.
console.log('ANSWER 2');

const abc: string[] = [];

for (let i = 65; i <= 90; i++) {
  abc.push(String.fromCharCode(i));
}

console.log(abc);

// 3. Write a function that deletes any properties from an object that are set to null, undefined or an empty string.
console.log('ANSWER 3');

const obj = {
  flower: 5,
  name: null,
  test: 'hi',
  sky: undefined,
  hat: '',
  active: true
};

for (let key in obj) {
  if (obj[key] === null || obj[key] === undefined || obj[key] === '') {
    delete obj[key];
  }
}

console.log(obj);

// 4. Given the following string '200:10,201:12,202:25', write a function that creates the following array:
// [
//   {id:200, price:10},
//   {id:201, price:12},
//   {id:202, price:25}
// ]
console.log('ANSWER 4');

const stringToConvert = '200:10,201:12,202:25';

const result = [
  {id:200, price:10},
  {id:201, price:12},
  {id:202, price:25}
];

const convertedData: any[] = [];

stringToConvert.split(',').forEach((el, i) => {

  const keyValueArr = el.split(':');
  convertedData.push({id: keyValueArr[0], price: keyValueArr[1]});

});

console.log(convertedData);

// 5. Assume that the string viewSettings is a value from a data source containing a list of all the active views. The "constant" VIEWS_CONST contains all the available views.
console.log('ANSWER 5');

// 1 means enabled: true
// 0 means enabled: false.

const VIEWS_CONST = ['pkg_headline', 'pkg_details', 'quick_sell', 'cal_pricing', 'matrix_wizard', 'cart'];
const viewSettings = 'pkg_headline:1,cal_pricing:1,matrix_wizard:0,cart:0';

const expectedResult = [
    {viewName: 'pkg_headline', enabled: true},
    {viewName: 'pkg_details', enabled: false},
    {viewName: 'quick_sell', enabled: false},
    {viewName: 'cal_pricing', enabled: true},
    {viewName: 'matrix_wizard', enabled: false},
    {viewName: 'cart', enabled: false}
];

const convertedArrayOfObj: any[] = [];

viewSettings.split(',').forEach((el, i) => {

    const keyValueArr = el.split(':');
    let isEnabled: boolean;

    if (keyValueArr[1] === '1') {
        isEnabled = true;
    } else {
        isEnabled = false;
    }

    convertedArrayOfObj.push({viewName: keyValueArr[0], enabled: isEnabled});

});

for (let availableView of VIEWS_CONST) {
    const foundView = convertedArrayOfObj.find((setting) => setting.viewName === availableView);
    if(!foundView) {
        convertedArrayOfObj.push({viewName: availableView, enabled: false});
    }

}

console.log(convertedArrayOfObj);

// 6. Write a function that outputs a message every 3 seconds. Stop the output after the 5th message.
console.log('ANSWER 6');

let cont = 1;

const listen = setInterval(function () {
  if (cont <= 5) {
    console.log('Message: ' + cont)
  } else {
    clearInterval(listen);
  }
  cont++;
}, 3000);

// 7. Write a function that alerts a message after 1 second.
console.log('ANSWER 7');

function myFunction() {
  setTimeout(() => { alert('A message'); }, 1000);
}

myFunction();

// 8.  Given the following array, output each items key and value eg: fname John lname doe age 34. The output data should only consist of the user object.
console.log('ANSWER 8');

Object.prototype.foo = 'foo';
Object.prototype.bar = 'bar';
Object.prototype.baz = 'baz';

const myObject: any =
  [
    { fname: "John", lname: "Doe", age: 34 }, // user object
    { fname: "Jane", lname: "Doe", age: 30 }  // user object
  ];


for (let k in myObject) {
  if(k.indexOf(myObject[k]) === -1) {
    console.log(myObject[k]);
  }
}

// 9. Write a sum() function that accepts any number of arguments, and returns their sum.
console.log('ANSWER 9');

function sum(...theArgs: any[]) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}

console.log( sum(1,2) ); // 3
console.log( sum(1,2,3) ); // 6
console.log( sum(1,2,3,4) ); // 10
console.log( sum(1,2,3,4,5,6) ); // 10 + ...n

// 10. Write a function that will replace all the instances of '@@price' with '$10.00' from the string
console.log('ANSWER 10');

const str = 'This is a @@price that is not fair, this @@price is just a very high @@price';

function replaceAll(str: string, find: string, replace: string) {
  return str.replace(new RegExp(find, 'g'), replace);
}

const replacedString = replaceAll(str, '@@price', '$10.00');
console.log(replacedString);
