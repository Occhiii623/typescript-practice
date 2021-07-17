// import World from './world';
//
// const root = document.getElementById('root');
// const world = new World('Hello World!');
//
// world.sayHello(root);

// 03. 基本の定義

// import { primitiveSample } from "./basic";
// import { notExistSample } from "./basic";
// import { anySample } from "./basic";
// import { unknownSample } from "./basic";

// primitiveSample();
// notExistSample();
// anySample();
// unknownSample();

// 04. 関数の型定義

// import { logMessage } from "./function/basic"
// logMessage("Hello TypeScript!");

import { inUserSignedIn, inUserSignedIn2, sumProductsPrice } from './function/new';

inUserSignedIn('ABC', 'mayumi');
inUserSignedIn2('ABC');

const sum: number = sumProductsPrice(100, 200, 300, 800, 304);
console.log('Function parameters sample 5:', sum);
