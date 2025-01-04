"use client"
import { jobs } from "./jobs"; 
import  Job from "./job"
import { useState } from "react";
import { JobDetails } from "./jobDetails";

export default function Home() {
  const [isJobDetailsOpen, setIsJobDetailsOpen] = useState(false)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-gray-300 mb-6">JobbyJob</h1>

      {/* Grid Container */}
      {!isJobDetailsOpen ? <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Map over the jobs and render each Job component */}
        {jobs.map((job, index) => (
          <Job
            key={index}
            name={job.name}
            feelingFromCompany={job.feelingFromCompany}
            position="Software Engineer"
            setIsJobDetailsOpen={setIsJobDetailsOpen}
          />
          
        )) }
      </div> : <JobDetails setIsJobDetailsOpen={setIsJobDetailsOpen}/>}
    </div>
  );
}
