"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var App_1 = require("./components/App");
require("./styles/main.css");
var Teste = function () {
    return <div>e</div>;
};
react_dom_1["default"].render(<App_1["default"] />, document.getElementById("myapp"));
// export function log(str: string): void {
//   console.log(str);
// }
// class A {
//   myText = "Basketball";
// }
// log(new A().myText);
// function identity<Type>(arg: Type): Type {
//   return arg;
// }
// const maslow = identity<number>("Lower");
// class GenericNumber<NumType> {
//   zeroValue: NumType;
//   add: (x: NumType, y: NumType) => NumType;
// }
// let myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function (x, y) {
//   return x + y;
// };
