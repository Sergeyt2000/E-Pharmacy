// import { useState } from 'react'
import './App.css'
import { Routes, Route, Navigate } from "react-router-dom";
import Header from './components/Header/Header.jsx';
// import Main from './components/Main/Main';
// import Footer from './components/Footer/Footer';
import RegisterPage from './pages/RegisterPage/RegisterPage.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      {/* <Main />
      <Footer /> */}
    </>
  );
}

export default App
