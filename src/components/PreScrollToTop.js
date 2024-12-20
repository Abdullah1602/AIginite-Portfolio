import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function PreScrollToTop({ load }) {
  const [loading, setLoading] = useState(load);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Loader logic
  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false); // Stop showing the loader
        navigate("/"); // Navigate to the Home page after loader ends
      }, 2000); // Loader duration: 2 seconds

      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [loading, navigate]);

  // Scroll to top logic
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the route changes
  }, [pathname]);

  return <div id={loading ? "preloader" : "preloader-none"}></div>;
}

export default PreScrollToTop;
