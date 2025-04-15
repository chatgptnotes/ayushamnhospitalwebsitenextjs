"use client";

import { useState, useEffect } from "react";

export default function BachaoBachaoButton() {
  const [isRequested, setIsRequested] = useState(false);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (isRequested) {
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            window.open("https://bachaobachao.in", "_blank");
            setTimeout(() => {
              setIsRequested(false);
              setCountdown(5);
            }, 1000);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isRequested]);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        onClick={() => setIsRequested(true)}
        disabled={isRequested}
        className={`
          ${isRequested ? 'bg-gray-500' : 'bg-red-600 hover:bg-red-700'}
          text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all
          ${isRequested ? 'animate-pulse' : 'transform hover:scale-105'}
        `}
      >
        {isRequested ? (
          <span>Opening in {countdown}s...</span>
        ) : (
          <span className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            bachaobachao.in
          </span>
        )}
      </button>
    </div>
  );
} 