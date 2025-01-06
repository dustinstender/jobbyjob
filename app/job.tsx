import React, { Dispatch, SetStateAction } from 'react';
import { Logo } from './logo';

interface JobProps {
  name: string; // Company name
  logoUrl?: string; // Optional logo URL
  feelingFromCompany: 'bad' | 'okay' | 'good' | 'great'; // Feeling categories
  position: string; // Job position/title
  setJobOpen: Dispatch<SetStateAction<number>>
  index: number

}

const Job: React.FC<JobProps> = ({ name, logoUrl, feelingFromCompany, position, setJobOpen, index }) => {
  // Map feelings to colors
  const feelingColors: Record<typeof feelingFromCompany, string> = {
    bad: 'bg-red-500',
    okay: 'bg-yellow-500',
    good: 'bg-blue-500',
    great: 'bg-green-500',
  };

  return (
    <button className="flex items-center p-4 bg-gray-800 shadow-lg rounded-lg max-w-sm" onClick={() => setJobOpen(index)}>
    <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden mr-4">
    <Logo name={name} logoUrl={logoUrl} />
  </div>
  <div className="flex flex-col">
    <div className="flex items-center mb-1">
      <span className="text-lg font-semibold text-gray-100 mr-2">{name}</span>
      <span
        className={`text-xs text-white rounded-full px-2 py-0.5 ${feelingColors[feelingFromCompany]}`}
      >
        {feelingFromCompany.charAt(0).toUpperCase() + feelingFromCompany.slice(1)}
      </span>
    </div>
    <span className="text-sm text-gray-400">{position}</span>  
  </div>
</button>

  );
};

export default Job;
