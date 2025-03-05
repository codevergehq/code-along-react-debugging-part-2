export function ExpensiveList({ items }) {
 // Expensive calculation that should be memoized
  const processedItems = items.map(item => {
    let result = item;
    for (let i = 0; i < 1000000; i++) {
      result = `${result}${i}`.slice(0, 20);
    }
    return result;
  });

  return (
    <ul className="space-y-2">
      {processedItems.map((item, index) => (
        <li key={index} className="p-4 bg-white rounded shadow">
          {item}
        </li>
      ))}
    </ul>
  );
}