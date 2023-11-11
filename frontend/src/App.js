import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import DashboardView from './views/DashboardView';
import RootView from './views/RootView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import SettingsView from './views/SettingsView';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<RootView />} />
        <Route path="/login" exact element={<LoginView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/dashboard" exact element={<DashboardView />} />
        <Route path="/settings" exact element={<SettingsView />} />

      </Routes>
    </div>
  );
}

export default App;
