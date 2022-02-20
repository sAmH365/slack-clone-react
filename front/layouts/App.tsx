import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import loadable from '@loadable/component';
// import LogIn from '@pages/LogIn';
// import SignUp from '@pages/SignUp';

const LogIn = loadable(() => import('@pages/LogIn'))
const SignUp = loadable(() => import('@pages/SignUp'))

// Route는 컴포넌트를 화면에 띄어주는 역할

const App = () => {
  return (
  <Routes>
    <Route path="/" element={<Navigate replace to="/login"/>} />
    <Route path="/login" element={<LogIn />} />
    <Route path="/signup" element={<SignUp />} />
  </Routes>
  )
}

export default App