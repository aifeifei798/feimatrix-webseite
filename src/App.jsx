// src/App.jsx

import React, { Suspense } from 'react';
import { BrowserRouter as Router, Link, useRoutes } from 'react-router-dom';
import routes from '~react-pages';

// --- ADD THIS LINE FOR DEBUGGING ---
console.log('Generated Routes:', routes);

const AppRoutes = () => {
  return useRoutes(routes);
};

function App() {
  // ... the rest of your App component remains the same
  return (
    <Router>
      {/* ... header, nav, etc ... */}
      <main>
        <Suspense fallback={<p>页面加载中...</p>}>
          <AppRoutes />
        </Suspense>
      </main>
      {/* ... footer ... */}
    </Router>
  );
}

export default App;