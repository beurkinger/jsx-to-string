import { h, Component } from '../../createElement';

const Test3: Component = (props: { i: number; children }) => (
  <div className="test3">
    I am the grandchildren #{props.i} of {props.children}
    {/* {['', 1, null, undefined, { test: 'test' }, false, [1], 'ok']} */}
    <div>
      {new Array(100).fill('').map(() => (
        <span>that will do</span>
      ))}
    </div>
  </div>
);

export default Test3;
