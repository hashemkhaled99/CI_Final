import React, { useState } from 'react';

/**
 * A clean React component designed to pass ESLint checks.
 * No unused variables, proper exports, and standard JSX.
 */
function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Polyglot CI Test</h1>
      <p>React Validation: <strong>Passed</strong></p>
      <div className="card">
        <button onClick={increment}>
          Count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;