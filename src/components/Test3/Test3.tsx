import { h, Component } from '../../createElement';

const Test3: Component = (props: { i: number; children }) => (
  <div className="test3">
    I am the grandchildren #{props.i} of {props.children}
  </div>
);

export default Test3;
