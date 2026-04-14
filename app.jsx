import { useState } from "react";

/**
 * Main Application Component
 * Strictly compliant with Biome v2 (no unused vars, strict const, low complexity)
 */
export function App() {
  const [clickCount, setClickCount] = useState(0);
  const incrementValue = 1;
  const targetSystem = "Polyglot CI Pipeline";

  return (
    <div className="app-wrapper">
      <h1>{targetSystem} Validated</h1>
      <p>Your React environment is correctly parsing JSX and enforcing Biome rules.</p>
      
      <button 
        type="button" 
        onClick={() => setClickCount(clickCount + incrementValue)}
      >
        Test CI Clicks: {clickCount}
      </button>
    </div>
  );
}