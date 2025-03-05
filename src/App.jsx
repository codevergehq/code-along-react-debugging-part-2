import { Routes, Route} from 'react-router';
import { Home, ShoppingList, UserDashboard, Settings } from './routes';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shopping" element={<ShoppingList />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;