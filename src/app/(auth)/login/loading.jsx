import React from 'react';

const loadingPage = () => {
    return (
        <div className = 'flex h-[85vh] items-center justify-center'>
                <span className="loading loading-spinner text-error"></span>
        </div>
    );
};

export default loadingPage;