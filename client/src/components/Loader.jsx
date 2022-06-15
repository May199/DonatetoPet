import React, { useState, useEffect } from 'react';
  
const Loader = () => {
  
  // Loading state 
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  
  return (

    <div className='flex-justify items-center py-3' isLoading={isLoading}> 
      <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-red-700'/>
    </div>
  );
}
  
export default Loader;
