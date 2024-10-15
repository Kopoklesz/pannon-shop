import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useTranslation, I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Shop from './components/Shop';
import Nav from './components/Nav';
import TeacherDashboard from './components/TeacherDashboard';
import Cart from './components/Cart';
import WebshopList from './components/WebshopList';
import ManageProducts from './components/ManageProducts';
import './App.css';

const LANGUAGES = { HU: 'hu', EN: 'en' };

function App() {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(LANGUAGES.HU);
  const [userId, setUserId] = useState(null);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
  };

  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <Nav currentLanguage={currentLanguage} changeLanguage={changeLanguage} />
        <Routes>
          <Route path="/" element={<Navigate replace to="/webshops" />} />
          <Route path="/webshops" element={<WebshopList />} />
          <Route path="/shop/:webshopId?" element={<Shop />} />
          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
          <Route path="/cart/:webshopId" element={<Cart userId={userId} />} />
          <Route path="/manage-products/:webshopId" element={<ManageProducts />} />
        </Routes>
      </Router>
    </I18nextProvider>
  );
}

export default App;