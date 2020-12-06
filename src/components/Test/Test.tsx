import { h } from '../../createElement';
import Test2 from '../Test2/Test2';

const Test = (props: { name: string }) => (
  <div className="test" anObject={null}>
    Hello {props.name} !
    <img src="beautiful.jpg" />
    <span className="my-class" alt="hello" onClick={() => console.log('bim')}>
      Hello {props.name} !
      <img src="beautiful.jpg" />
      <div>
        {[1, 2, 3, 4, 5].map(() => (
          <Test2 name={props.name} />
        ))}
      </div>
    </span>
  </div>
);

export default Test;
