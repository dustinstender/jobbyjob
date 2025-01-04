import React, { Dispatch, SetStateAction } from 'react';

interface JobDetailsProps {
    setIsJobDetailsOpen: Dispatch<SetStateAction<boolean>>
}

export const JobDetails: React.FC<JobDetailsProps> = ({setIsJobDetailsOpen}) => {
    return (
        <div className="flex items-center p-4 bg-gray-800 shadow-lg rounded-lg max-w-sm">
            <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden mr-4">
                <button onClick={() => setIsJobDetailsOpen(false)}>
                    hello
                </button>
            </div>
        </div>
    );
    
}