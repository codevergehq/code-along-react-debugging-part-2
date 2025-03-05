import { useState } from 'react';
import { UserCard } from '../components/UserCard';

export function UserDashboard() {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', lastSeen: new Date() },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', lastSeen: new Date() },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', lastSeen: new Date() },
  ]);

  // Intentionally creating new function on every render
  const handleUpdate = (updatedUser) => {
    setUsers(users.map(user => 
      user.id === updatedUser.id ? updatedUser : user
    ));
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">User Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map(user => (
          <UserCard
            key={user.id}
            user={user}
            // New object created on every render
            onUpdate={handleUpdate}
          />
        ))}
      </div>
    </div>
  );
}