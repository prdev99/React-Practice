function ChildToParent(props) {
  const name = 'Anil'
  return (
    <>
      <h1>Child components</h1>
      <button onClick={()=>{props.alert(name)}}>Click</button>
    </>
  );
}
export default ChildToParent;
