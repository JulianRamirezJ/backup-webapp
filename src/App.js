import React from 'react';
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import BackupForm from './BackupForm';
import RestoreForm from './RestoreForm';

function App() {
  return (
    <Router>
      <div>
        <h1>Welcome to My Backup App</h1>
        <Link to="/backup">Create Backup</Link>
        <br />
        <Link to="/restore">Restore Backup</Link>
      </div>
      <Routes>
        <Route path='/backup' element={<BackupForm/>} />
        <Route path='/restore' element={<RestoreForm/>} />
      </Routes>
    </Router>
  );
}

export default App;
