import Test from './components/Test/Test';
import { render } from './createElement';

const start = window.performance.now();

// task starts
const test = Test({ name: 'M. Pleasant' });
for (let i = 0; i < 100000; i++) {
  render(test);
}
// task ends

const end = window.performance.now();
console.log(`Execution time: ${end - start} ms`);

// const test = Test({name: 'M. Pleasant'});

console.log(render(test));
