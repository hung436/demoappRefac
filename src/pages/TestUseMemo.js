import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
// Component con sử dụng React.memo để tránh render không cần thiết
const ChildComponent = React.memo(({ data }) => {
  console.log('ChildComponent render');
  return <div>{data}</div>;
});
ChildComponent.propTypes = {
  data: PropTypes.string.isRequired,
};
// Component chính sử dụng useMemo để tính toán giá trị phức tạp
const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  // useMemo để tính toán giá trị phức tạp
  //   const computedValue = useMemo(() => {
  //     console.log('Computing value');
  //     return count * 2;
  //   }, [count]);

  //    useMemo để tính toán giá trị phức tạp
  const computedValue = () => {
    console.log('Computing value');
    return count * 2;
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <ChildComponent />
    </div>
  );
};

export default ParentComponent;
