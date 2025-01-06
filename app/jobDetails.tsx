import React, { Dispatch, SetStateAction } from 'react';
import { Job } from './jobs';
import { Logo } from './logo';

interface JobDetailsProps {
    job: Job
}

export const JobDetails: React.FC<JobDetailsProps> = ({job}) => {

    console.log({job})
    return (
        <div className="bg-gray-800 shadow-lg rounded-lg" style={{padding: 10}}>
            <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden mr-4">
                <Logo name={job.name}  logoUrl={job.logoUrl}/>
            </div>
        </div>
    );
    
}