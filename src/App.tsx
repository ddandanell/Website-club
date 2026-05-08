import { Routes, Route } from 'react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import ApplyPage from './pages/ApplyPage';
import PartnersPage from './pages/PartnersPage';
import EventsPage from './pages/EventsPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import SupportPage from './pages/SupportPage';
import ConciergePage from './pages/ConciergePage';
import MemberDashboard from './pages/MemberDashboard';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<ApplyPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/concierge" element={<ConciergePage />} />
        <Route path="/dashboard" element={<MemberDashboard />} />
      </Route>
    </Routes>
  );
}
