import Test from './components/Test/Test';
// import { render2 as render } from './createElement';
import { render } from './createElement';

const start = window.performance.now();

// task starts
for (let i = 0; i < 100; i++) {
  const test = Test({ name: 'M. Pleasant' });
  render(test);
}
// task ends

const end = window.performance.now();
console.log(`Execution time: ${end - start} ms`);

const test = Test({ name: 'M. Pleasant' });
console.log(test);
console.log(render(test));
