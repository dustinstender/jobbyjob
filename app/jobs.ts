type Person = {
    name: string;
    details: string;
  };
  
  type Job = {
    name: string;
    description: string;
    location: string;
    contacts: Person[];
    firstContact: Date;
    latestContact: Date;
    nextSteps: string;
    feelingFromCompany: "bad" | "okay" | "good" | "great";
    opinionOnOpportunity: string;
  };
  
  export const jobs: Job[] = [
    {
      name: "Software Engineer",
      description: "Develop and maintain scalable web applications.",
      location: "San Francisco, CA",
      contacts: [
        {
          name: "Jane Smith",
          details: "Hiring Manager, Technical Recruiter"
        },
        {
          name: "John Doe",
          details: "Lead Developer, Front-End Team"
        }
      ],
      firstContact: new Date("2023-12-01"),
      latestContact: new Date("2023-12-20"),
      nextSteps: "Second interview scheduled for 2023-12-25.",
      feelingFromCompany: "good",
      opinionOnOpportunity: "Great company culture and strong growth potential."
    },
    {
      name: "Product Manager",
      description: "Lead product strategy and manage product lifecycle.",
      location: "Remote",
      contacts: [
        {
          name: "Sarah Lee",
          details: "Senior Product Manager"
        },
        {
          name: "Mike Johnson",
          details: "CEO"
        }
      ],
      firstContact: new Date("2023-11-15"),
      latestContact: new Date("2023-12-18"),
      nextSteps: "Awaiting feedback after first round of interviews.",
      feelingFromCompany: "okay",
      opinionOnOpportunity: "Good role, but I'm unsure about the company's growth trajectory."
    },
    {
      name: "Data Scientist",
      description: "Analyze and interpret complex datasets to drive business decisions.",
      location: "New York, NY",
      contacts: [
        {
          name: "Alice Brown",
          details: "Hiring Manager, Data Science Team"
        }
      ],
      firstContact: new Date("2023-11-10"),
      latestContact: new Date("2023-11-22"),
      nextSteps: "Offer extended, awaiting response.",
      feelingFromCompany: "great",
      opinionOnOpportunity: "Great potential for career growth and learning new technologies."
    },
    {
      name: "Marketing Specialist",
      description: "Develop and implement marketing campaigns to increase brand awareness.",
      location: "Austin, TX",
      contacts: [
        {
          name: "David Green",
          details: "Marketing Manager"
        },
        {
          name: "Emma White",
          details: "HR Specialist"
        }
      ],
      firstContact: new Date("2023-11-30"),
      latestContact: new Date("2023-12-15"),
      nextSteps: "No immediate next steps. Awaiting updates on job opening.",
      feelingFromCompany: "okay",
      opinionOnOpportunity: "Excited about the team but the role is a bit less creative than I'd hoped."
    },
    {
      name: "UX Designer",
      description: "Design user interfaces and experiences for web and mobile applications.",
      location: "Los Angeles, CA",
      contacts: [
        {
          name: "Karen Harris",
          details: "UX Design Lead"
        },
        {
          name: "Steve Clark",
          details: "Head of Product"
        }
      ],
      firstContact: new Date("2023-12-05"),
      latestContact: new Date("2023-12-12"),
      nextSteps: "Portfolio review scheduled for 2023-12-18.",
      feelingFromCompany: "good",
      opinionOnOpportunity: "The company is known for good design, but the team seems stretched thin."
    },
    {
      name: "Sales Executive",
      description: "Drive sales growth and build relationships with key clients.",
      location: "Chicago, IL",
      contacts: [
        {
          name: "Tom Davis",
          details: "Sales Manager"
        },
        {
          name: "Julia Black",
          details: "Regional Director"
        }
      ],
      firstContact: new Date("2023-10-20"),
      latestContact: new Date("2023-12-10"),
      nextSteps: "Phone interview scheduled for 2023-12-22.",
      feelingFromCompany: "bad",
      opinionOnOpportunity: "The role seems to lack long-term potential and is too commission-driven."
    }
  ];
  