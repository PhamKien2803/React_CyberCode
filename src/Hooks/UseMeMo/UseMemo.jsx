import React, { useMemo, useState } from "react";

function UseMemo() {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };
  function fibonacci(n) {
    if (n < 2) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }

  //nếu không dùng useMemO thì thời gian thực thi phép tính lên đến 4-5 giây
  //Nếu dùng useMemo thì thời gian thực thi chỉ còn 0,000 mili seconds, nó sẽ tối ưu hóa hiệu năng một lần render, tránh bị re render lại 
  //nhiều lần

  console.time(fibonacci)
  const result = useMemo(() => {
    return fibonacci(43)
  }, [])
  console.timeEnd(fibonacci)

  return (
    <div>
      <h1>{result}</h1>
      <h1>{count}</h1>
      <button onClick={handleCount}>Increase</button>
    </div>
  );
}

export default UseMemo;
