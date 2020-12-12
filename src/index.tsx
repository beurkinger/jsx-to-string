import Test from './components/Test/Test';
import { render } from './createElement';

const start = window.performance.now();

// let str= '';
// task starts
// for (let i = 0; i < 100; i++) {
  const test = Test({ name: 'M. Pleasant' });
  render(test);
// }
// task ends

const end = window.performance.now();
console.log(`Execution time: ${end - start} ms`);
// console.log(str)
// const test = Test({ name: 'M. Pleasant' });
console.log(test);
const html = render(test);
console.log(html);
document.body.innerHTML = html;
