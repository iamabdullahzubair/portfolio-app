import React from 'react';

const LoadingOverlay: React.FC = () => {
    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-20 w-20 mb-4"></div>
            <span className="text-white text-xl">Loading...</span>
        </div>
    );
};

export default LoadingOverlay;
