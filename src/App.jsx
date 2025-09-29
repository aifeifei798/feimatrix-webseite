// src/App.jsx

import React, { Suspense } from 'react';
import { BrowserRouter as Router, Link, useRoutes } from 'react-router-dom';
import routes from '~react-pages';

import ScrollToTop from './components/ScrollToTop';

const AppRoutes = () => {
  return useRoutes(routes);
};

function App() {
  // ... the rest of your App component remains the same
  return (
    <Router>
      {/* ... header, nav, etc ... */}
	  <ScrollToTop />
      <main>
        <AppRoutes />
      </main>
      {/* ... footer ... */}
    </Router>
  );
}

export default App;