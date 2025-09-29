import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant', // Optional: Use 'auto' or 'smooth' for a different scroll effect
    });
  }, [pathname]);

  return null;
}