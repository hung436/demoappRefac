import React, { useCallback, useState } from 'react';

const Child = React.memo(({ onClick }) => {
  console.log('abc');
  return (
    <div>
      {/* <button onClick={onClick}>Click me</button> */}
      react memo
    </div>
  );
});

const Parent = () => {
  const [count, setCount] = useState(0);

  //   const increment = useCallback(() => {
  //     setCount((prevCount) => prevCount + 1);
  //   }, []);
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      {/* <Child onClick={increment} /> */}
      <button onClick={increment}>Click me</button>
      <Child />
    </div>
  );
};
const TestPage = () => {
  return (
    <div>
      <h1>TestPage Page</h1>
      <Parent />
    </div>
  );
};

export default TestPage;
