import React from 'react';

const CallerCard = ({ onEndCall }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-5 rounded-lg">
                <h2>Calling...</h2>
                <button onClick={onEndCall}>End Call</button>
            </div>
        </div>
    );
};

export default CallerCard;
