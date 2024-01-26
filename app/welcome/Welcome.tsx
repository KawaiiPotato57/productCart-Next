import React from 'react';

const Welcome: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen space-y-12">
      <h1 className="text-4xl font-light mb-4 mt-0">Ecommerce</h1>
      <div className="flex flex-col items-center">
        <button className="bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700">Shop Now</button>
      </div>
    </div> 
    );
};

export default Welcome;
