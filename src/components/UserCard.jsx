// This component re-renders unnecessarily due to object recreation
export function UserCard({ user, onUpdate }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-semibold">{user.name}</h3>
      <p className="text-gray-600">{user.email}</p>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => onUpdate({ ...user, lastSeen: new Date() })}
      >
        Update Last Seen
      </button>
    </div>
  );
}