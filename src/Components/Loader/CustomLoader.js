import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './CustomLoader.css';

const CustomLoader = (props) => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 800);

    // Cleanup function
    return () => {
      clearTimeout(timeoutId);
    };
  }, [location.pathname]);

  return (
    <div className={`loader${!loading ? ' shrink' : ''}`}>
      <div className="top-side"></div>
      <div className="bottom-side"></div>
      {!loading && <div className="show">{props.children}</div>}
    </div>
  );
};

export default CustomLoader;



