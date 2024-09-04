// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import Login from './Pages/auth/Login';
import Signup from './Pages/auth/SignUp';
import Dashboard from './Pages/Dashboard';
import GroupDetailView from './Pages/GroupPage'; import GroupGoalsPage from "./Pages/GroupGoalsPage";
import { GroupsProvider } from './contexts/GroupsContext';

const App = () => {
  return (
    <GroupsProvider>
      <Router>
        <Routes>
          {/* Define all routes */}
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/home" element={<Dashboard />} />
          <Route exact path="/group/:id/goals" element={<GroupGoalsPage />} />

          {/* Use group name as URL parameter */}
          <Route exact path="/group/:name" element={<GroupDetailView />} />
        </Routes>
      </Router>
    </GroupsProvider>
  );
};

export default App;
