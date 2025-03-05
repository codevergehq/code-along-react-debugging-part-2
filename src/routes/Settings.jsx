import { useState, useEffect } from 'react';

export function Settings() {
  const [settings, setSettings] = useState({
    notifications: true,
    theme: 'light',
    fontSize: 14,
  });

  // Intentionally inefficient effect
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Checking settings...', settings);
    }, 1000);

    return () => clearInterval(interval);
  }); // Missing dependency array intentionally

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Settings</h1>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-white rounded shadow">
          <span>Notifications</span>
          <input
            type="checkbox"
            checked={settings.notifications}
            onChange={(e) => setSettings({ ...settings, notifications: e.target.checked })}
          />
        </div>

        <div className="flex items-center justify-between p-4 bg-white rounded shadow">
          <span>Theme</span>
          <select
            value={settings.theme}
            onChange={(e) => setSettings({ ...settings, theme: e.target.value })}
            className="px-3 py-1 border rounded"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        <div className="flex items-center justify-between p-4 bg-white rounded shadow">
          <span>Font Size</span>
          <input
            type="number"
            value={settings.fontSize}
            onChange={(e) => setSettings({ ...settings, fontSize: parseInt(e.target.value) })}
            className="w-20 px-3 py-1 border rounded"
          />
        </div>
      </div>
    </div>
  );
}