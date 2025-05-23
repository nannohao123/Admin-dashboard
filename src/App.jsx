import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginAdmin from './component/LoginAdmin';
import Dashboard from './component/Dashboard';
import Masjid from './assets/Masjid.png';


import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="main-login">
              <img
                src={Masjid}
                alt="Masjid"
                style={{ width: '100%', height: '100vh' }}
              />
              <div className="LoginAdmin">
                <LoginAdmin />
              </div>
            </div>
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
