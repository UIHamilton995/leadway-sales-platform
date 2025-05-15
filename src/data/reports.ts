interface Report {
  id: string;
  createdBy: string;
  dateCreated: string;
  lastModified: string;
  requestedBy: string;
  status: 'Active' | 'Inactive';
}

const reports: Report[] = [
  {
    id: '#1234tcds',
    createdBy: 'Michael Samuel',
    dateCreated: '25th April 2025',
    lastModified: '31st April 2025',
    requestedBy: 'Sales Department',
    status: 'Active',
  },
  {
    id: '#5678abcd',
    createdBy: 'Favour Komoni',
    dateCreated: '12th March 2025',
    lastModified: '18th March 2025',
    requestedBy: 'HR Department',
    status: 'Inactive',
  },
  {
    id: '#9876xyz',
    createdBy: 'Chidi Nwabudike',
    dateCreated: '5th May 2025',
    lastModified: '7th May 2025',
    requestedBy: 'Marketing Team',
    status: 'Active',
  },
  {
    id: '#4321mnop',
    createdBy: 'Amina Bello',
    dateCreated: '10th February 2025',
    lastModified: '15th February 2025',
    requestedBy: 'Finance Division',
    status: 'Inactive',
  },
  {
    id: '#7890qrst',
    createdBy: 'David Okafor',
    dateCreated: '1st June 2025',
    lastModified: '3rd June 2025',
    requestedBy: 'Product Team',
    status: 'Active',
  },
  {
    id: '#6543uvwx',
    createdBy: 'Sandra Okoro',
    dateCreated: '18th January 2025',
    lastModified: '20th January 2025',
    requestedBy: 'Customer Support',
    status: 'Inactive',
  },
  {
    id: '#1122ijkl',
    createdBy: 'Kamal Patel',
    dateCreated: '9th July 2025',
    lastModified: '10th July 2025',
    requestedBy: 'Engineering',
    status: 'Active',
  },
  {
    id: '#3344efgh',
    createdBy: 'Linda Chukwu',
    dateCreated: '14th August 2025',
    lastModified: '16th August 2025',
    requestedBy: 'Legal Department',
    status: 'Inactive',
  },
  {
    id: '#5566klmn',
    createdBy: 'Emeka Johnson',
    dateCreated: '3rd September 2025',
    lastModified: '5th September 2025',
    requestedBy: 'Operations',
    status: 'Active',
  },
  {
    id: '#7788opqr',
    createdBy: 'Zainab Yusuf',
    dateCreated: '20th October 2025',
    lastModified: '22nd October 2025',
    requestedBy: 'Data Science Team',
    status: 'Inactive',
  }
];

export default reports; 