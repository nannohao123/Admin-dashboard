import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginAdmin from './component/LoginAdmin';
import Dashboard from './component/Dashboard';
import Sidebar from './component/Sidebar';
import Layout from './component/Layout';
import LayoutWrapper from './component/LayoutWrapper';

import Masjid from './assets/Masjid.png';

import Geolokasi from './pages/geolokasi';
import Orang from './pages/orang';
import KartuKeluarga from './pages/kartukeluarga';
import Kepegawaian from './pages/Kepegawaian';
import Users from './pages/Users';
import Keuangan from './pages/Keuangan';
import Akademik from './pages/Akademik';
import Utilitas from './pages/Utilitas';

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
        <Route
          path="/*"
          element={
            <div className="app-container" style={{ display: 'flex' }}>
              <Sidebar />
              <div>
                <Routes>
                  <Route path="dashboard" element={<Layout><Dashboard /></Layout>} />
                  <Route path="geolokasi" element={<Geolokasi />} />
                  <Route path="orang" element={<Orang />} />
                  <Route path="kartu-keluarga" element={<KartuKeluarga />} />
                  <Route path="kepegawaian" element={<Kepegawaian />} />
                  <Route path="users" element={<Users />} />
                  <Route path="keuangan" element={<Keuangan />} />
                  <Route path="akademik" element={<Akademik />} />
                  <Route path="utilitas" element={<Utilitas />} />
                </Routes>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
