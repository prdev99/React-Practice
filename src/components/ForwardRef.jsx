import React, { forwardRef } from "react";
function ForwardRef(props, ref) {
  return (
    <>
      <input type="text" ref={ref}></input>
    </>
  );
}
export default forwardRef(ForwardRef);
