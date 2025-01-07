import React from 'react';
import { Job } from './jobs';
import { Logo } from './logo';

interface JobDetailsProps {
    job: Job
}

export const JobDetails: React.FC<JobDetailsProps> = ({job}) => {

    return (
        <div className="bg-gray-800 shadow-lg rounded-lg" style={{padding: 10, height: "80vh"}}>
            <div style={{display: "flex", justifyContent: "flex-start", alignItems: "center"}}>
            <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden mr-4">
                <Logo name={job.name}  logoUrl={job.logoUrl}/>
            </div>
            <h1 className="text-3xl font-semibold text-gray-300">{job.name}</h1>
            </div>
           <div style={{display: "flex", flexDirection: "column", paddingTop: 20}}>
           <h3 className="text-2xl font-semibold text-gray-300 mb-6">Position: {job.name}</h3>
           <p>Description: {job.description}</p>
           </div>
        </div>
    );
    
}