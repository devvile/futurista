'use client';

import { useEffect, useState } from 'react';

const SocialsBots = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center pointer-events-none select-none">
      <img 
        src={isMobile ? "/socials_mobile3.svg" : "/socials_desktop2.svg"} 
        alt="Social Bots Mockup" 
        className={
          isMobile 
            ? "w-full max-w-[280px] pointer-events-none" 
            : "w-full max-w-[100px] lg:max-w-[800px] pointer-events-none"
        }
      />
    </div>
  );
}

export default SocialsBots