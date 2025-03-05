import { useState } from 'react';
import { ExpensiveList } from '../components/ExpensiveList';

export function ShoppingList() {
  const [items, setItems] = useState([
    'Apples', 'Bananas', 'Oranges', 'Milk', 'Bread'
  ]);
  const [newItem, setNewItem] = useState('');

  // Intentionally creating new function on every render
  const handleAdd = () => {
    if (newItem.trim()) {
      setItems([...items, newItem.trim()]);
      setNewItem('');
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Shopping List</h1>
      
      <div className="flex space-x-4">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          className="flex-1 px-4 py-2 border rounded"
          placeholder="Add new item"
        />
        <button
          onClick={handleAdd}
          className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Add
        </button>
      </div>

      {/* Using the expensive list component */}
      <ExpensiveList items={items} />
    </div>
  );
}