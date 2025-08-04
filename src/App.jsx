// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './Menu'; // Импорт меню
import HomePage from './scenes/Home'; // Главная страница
import Stories from './scenes/Stories'; // Страница Истории
import Test from './scenes/Test'; // Страница Пройти тест
import Settings from './scenes/Settings'; // Страница Настройки
import Register from './scenes/Register'; // Страница Регистрации
import PasswordReset from './scenes/PasswordReset'; // Страница Восстановления пароля
import Autorization from './scenes/Autorization'; // Страница Авторизации
import HR from './scenes/HR'; // Главная страница для эйчара
import HRstories from './scenes/HRstories'; // Главная страница для эйчара
import Sotrudniki from './scenes/Sotrudniki'; // Сотрудники

const App = () => {
  return (
    <Router>
      <div
        style={{
          display: 'flex',
          backgroundColor: '#F4F7FE',
          minHeight: '100vh',
        }}
      >
        <Menu />
        <main
          style={{
            flexGrow: 1,
            padding: 20,
            maxWidth: '100%',
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hr" element={<HR />} />
            <Route path="/hrstories" element={<HRstories />} />
            <Route path="/sotrudniki" element={<Sotrudniki />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/test" element={<Test />} />
            <Route path="/register" element={<Register />} />
            <Route path="/autorization" element={<Autorization />} />
            <Route path="/passwordreset" element={<PasswordReset />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
