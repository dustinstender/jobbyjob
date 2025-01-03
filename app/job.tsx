import React from 'react';

interface JobProps {
  name: string; // Company name
  logoUrl?: string; // Optional logo URL
  feelingFromCompany: 'bad' | 'okay' | 'good' | 'great'; // Feeling categories
  position: string; // Job position/title
}

const Job: React.FC<JobProps> = ({ name, logoUrl, feelingFromCompany, position }) => {
  // Map feelings to colors
  const feelingColors: Record<typeof feelingFromCompany, string> = {
    bad: 'bg-red-500',
    okay: 'bg-yellow-500',
    good: 'bg-blue-500',
    great: 'bg-green-500',
  };

  return (
    <div className="flex items-center p-4 bg-white shadow rounded-lg max-w-sm">
      <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden mr-4">
        {logoUrl ? (
          <img
            src={logoUrl}
            alt={`${name} Logo`}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-lg font-bold text-gray-700">
            {name.charAt(0).toUpperCase()}
          </span>
        )}
      </div>
      <div className="flex flex-col">
        <div className="flex items-center mb-1">
          <span className="text-lg font-semibold text-gray-800 mr-2">{name}</span>
          <span
            className={`text-xs text-white rounded-full px-2 py-0.5 ${
              feelingColors[feelingFromCompany]
            }`}
          >
            {feelingFromCompany.charAt(0).toUpperCase() + feelingFromCompany.slice(1)}
          </span>
        </div>
        <span className="text-sm text-gray-500">{position}</span>
      </div>
    </div>
  );
};

export default Job;
