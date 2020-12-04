import Test from './components/Test/Test';
import { render } from './createElement';


var start = window.performance.now();
 
// task starts
let test = Test({name: 'M. Pleasant'});
for (var i = 0; i < 100000;i++) {
    render(test)
}
// task ends
 
var end = window.performance.now();
console.log(`Execution time: ${end - start} ms`);


// const test = Test({name: 'M. Pleasant'});

console.log(render(test))