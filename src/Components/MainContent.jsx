import React from 'react'
import PersonCard from './PersonCard';

const people = [
    { id: 1, name: 'Chamika T', image: 'https://miro.medium.com/v2/resize:fit:1358/0*xFuo_UNWchLZ8bqS.jpeg', location: 'Ambalangoda, Sri Lanka', age: 29, ethnicity: 'Sinhalese', caste: 'Karawa', religion: 'Buddhist', profession: 'Other' },
    { id: 2, name: 'Kanchana P', image: '/path-to-image.jpg', location: 'Birmingham, United Kingdom', age: 33, ethnicity: 'Sinhalese', caste: 'Unknown', religion: 'Christian', profession: 'Accountant' },
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
