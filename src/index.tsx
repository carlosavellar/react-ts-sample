import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles/main.css";

const Teste = () => {
  return <div>e</div>;
};

ReactDOM.render(<App />, document.getElementById("myapp"));

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
