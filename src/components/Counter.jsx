import React from "react";

function Counter() {
  let [num, setNum] = React.useState(0);
  function minus() {
    if (num <= 0) {
      num = 11;
    } else {
      setNum(num - 1);
    }
  }
  function plus() {
    if (num >= 10) {
      num = -1;
    } else {
      setNum(num + 1);
    }
  }
  return (
    <div className="container-counter">
      <div className="counter-btn">
        <div>
          <button type="button" onClick={minus}>
            -
          </button>
        </div>
        <div>{num}</div>
        <div>
          <button type="button" onClick={plus}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
