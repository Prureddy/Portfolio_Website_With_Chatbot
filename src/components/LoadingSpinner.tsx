import { useEffect, useState } from 'react';

const LoadingSpinner = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <div className="loader mx-auto"></div>
        <div className="gradient-text text-xl font-medium">
          Loading Portfolio...
        </div>
        <div className="text-muted-foreground text-sm">
          Initializing AI Systems
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;