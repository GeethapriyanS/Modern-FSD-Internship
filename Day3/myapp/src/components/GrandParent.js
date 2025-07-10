import Parent from "./Parent";
const GrandParent = () => {
  return (
    <div>
      <h1>Grandparent Component</h1>
      <Parent message="Hello from Grandparent" />
    </div>
  );
};

export default GrandParent;
