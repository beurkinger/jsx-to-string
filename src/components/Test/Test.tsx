import { h } from '../../createElement';
import Test2 from '../Test2/Test2';

const Test = (props: { name: string }) => (
  <div className="test">
    <span className="my-class" alt="hello">
      Hello {props.name} !
      <img src="beautiful.jpg" />
      <Test2 name={props.name} />
    </span>
  </div>
);

export default Test;
