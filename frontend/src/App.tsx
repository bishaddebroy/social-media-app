// src/app.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import PasswordReset from './components/Auth/PasswordReset';
import Feed from './components/Feed/Feed';
import NotificationList from './components/Notification/NotificationList';
import CommentList from './components/Comment/CommentList';
import CommentForm from './components/Comment/CommentForm';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-password" element={<PasswordReset />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/notifications" element={<NotificationList />} />
        <Route path="/comments/:postId" element={<CommentList postId='' />} />
        {/* You may add more routes for other components/pages */}
      </Routes>
    </Router>
  );
};

export default App;
