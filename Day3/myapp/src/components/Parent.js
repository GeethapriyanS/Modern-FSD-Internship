import Child from './Child';
const Parent = (props) => {
  return (
    <div>
      <h1>Parent Component</h1>
      <Child message={props.message} />
    </div>
  );
};

export default Parent;