'use client';

import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check on mount
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const videoSource = isMobile 
    ? "/hero/MOBILE/hero-mobile.mp4"
    : "/hero/LAPTOP/video (2).mp4";

  return (
    <div className={`w-full relative ${isMobile ? 'mt-20' : 'mt-16'}`}>
      <div className={`relative mx-auto ${
        isMobile 
          ? 'h-[500px] w-full'
          : 'aspect-[2/1] w-full'
      }`}>
        {/* Video Container */}
        <div className="absolute inset-0">
          <video
            key={videoSource}
            autoPlay
            muted
            loop
            playsInline
            className={`w-full h-full ${isMobile ? 'object-fill' : 'object-cover'}`}
          >
            <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
} 