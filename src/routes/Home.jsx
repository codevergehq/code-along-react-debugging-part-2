import React from 'react';

export function Home() {
  const [count, setCount] = React.useState(0);
  
  // Intentionally inefficient render
  const items = Array.from({ length: 50 }, (_, i) => `Item ${i}`);
  
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Welcome to Performance Demo</h1>
      <p className="text-xl text-gray-600">
        This demo contains intentional performance issues to demonstrate React Profiler usage.
      </p>
      
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Counter Demo</h2>
        <p className="mb-4">Count: {count}</p>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setCount(c => c + 1)}
        >
          Increment
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <div key={index} className="p-4 bg-white rounded shadow">
            {new Array(100).fill(0).map((_, i) => (
              <span key={i} className="hidden">{item}</span>
            ))}
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}