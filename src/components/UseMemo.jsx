import { useMemo, useState } from "react";

function UseMemo() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);

  const multiCountMemo = useMemo(() => {
    console.log("multiCount");
    return count * 2;
  }, [count]);
  return (
    <>
      <h1>Count: {count}</h1>
      <h1>Item: {item}</h1>
      <h1>{multiCountMemo}</h1>
      <button onClick={() => setCount(count + 1)}>Update count</button>
      <button onClick={() => setItem(item * 2)}>Update Item</button>
    </>
  );
}
export default UseMemo;
