import { h } from '../../createElement';
import Test3 from '../Test3/Test3';

const Test2 = (props: { name: string }) => (
  <div className="test2">
    I am the son and the <span>heir</span> of {props.name}
    <div>
      {new Array(100).fill('').map((_, i) => (
        <Test3 i={i}>bob</Test3>
      ))}
    </div>
  </div>
);

export default Test2;
