import React, { useEffect, useRef } from 'react';

const AngularWrapper: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const loadAngularComponent = async () => {
      try {
        // Import the Angular component from the federated module
        const { RandomCounter } = await import('myAngularApp/AngularApp');

        // Create the Angular element and append it to the container
        const element = document.createElement('app-random-counter');
        if (containerRef.current) {
          containerRef.current.appendChild(element);
        }
      } catch (error) {
        console.error('Error loading Angular component:', error);
      }
    };

    loadAngularComponent();

    return () => {
      // Clean up the Angular component
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return <div ref={containerRef}></div>;
};

export default AngularWrapper;
