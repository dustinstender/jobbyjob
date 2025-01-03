import Image from "next/image";
import { jobs } from "./jobs"; 
import  Job from "./job"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-gray-300 mb-6">JobbyJob</h1>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Map over the jobs and render each Job component */}
        {jobs.map((job, index) => (
          <Job
            key={index}
            name={job.name}
            feelingFromCompany={job.feelingFromCompany}
            position="Software Engineer"
          />
        ))}
      </div>
    </div>
  );
}
