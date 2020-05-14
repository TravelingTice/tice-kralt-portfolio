import { useState, useEffect } from 'react';

const useViewportWidth = () => {
  const [vw, setVw] = useState(300);

  useEffect(() => {
    // set the vw with the current window viewport width
    window.addEventListener('resize', () => {
      setVw(window.innerWidth);
    });

    setVw(window.innerWidth);

    // return () => { window.removeEventListener('resize') };

  }, []);

  return { vw }
}

export default useViewportWidth;