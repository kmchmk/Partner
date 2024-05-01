import React from 'react'
import PersonCard from './PersonCard';

const people = [
    { id: 1, name: 'Chamika T', image: '/path-to-image.jpg', location: 'Ambalangoda, Sri Lanka', age: 29, ethnicity: 'Sinhalese', caste: 'Karawa', religion: 'Buddhist', profession: 'Other' },
    { id: 2, name: 'Kanchana P', image: '/path-to-image.jpg', location: 'Birmingham, United Kingdom', age: 43, ethnicity: 'Sinhalese', caste: 'Unknown', religion: 'Christian', profession: 'Accountant' },
  ];

export default function MainContent() {
  return (
    <div>
      {people.map(person => (
        <PersonCard key={person.id} person={person} />
      ))}
    </div>
  )
}
