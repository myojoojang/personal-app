import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Works from './components/Works';

import './App.css';

export default function App() {
  return (
    <main className="main">
      <Navbar />
      <Profile />
      <Works />
    </main>
  );
}
