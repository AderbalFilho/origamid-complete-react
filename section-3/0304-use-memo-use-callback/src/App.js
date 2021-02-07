import React, { useCallback, useState } from 'react';

// function slowOperation() {
//   let c;

//   for (let i = 0; i < 100000000; i++) {
//     c = i + i / 10;
//   }

//   return c;
// }

const set1 = new Set();
const set2 = new Set();

const Produto = () => {
  const func1 = () => {
    console.log('Teste');
  }

  const func2 = useCallback(() => {
    console.log('Teste');
  }, []);

  set1.add(func1);
  set2.add(func2);

  console.log('Set1', set1);
  console.log('Set2', set2);

  return (
    <div>
      <p onClick={func1}>Produto 1</p>
      <p onClick={func2}>Produto 2</p>
    </div>
  );
};

const App = () => {
  const [counter, setCounter] = useState(0);
  // const t1 = performance.now();
  // const value = useMemo(() => slowOperation(), []);

  // console.log(performance.now() - t1);

  // const handleClick = useCallback(() => {
  //   setCounter(counter => counter + 1)
  // }, []);

  return (
    <div>
      <Produto />
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
    </div>
  );
};

export default App;
