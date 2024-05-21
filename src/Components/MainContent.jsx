import React from "react";
import PersonCard from "./PersonCard";

import { useSubscription } from "@apollo/client";
import GET_PERSON from "../subscriptions/person";

export default function MainContent() {
  const { loading, error, data } = useSubscription(GET_PERSON);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error}</p>;
  return (
    <div>
      {data.person.map((person) => (
        <PersonCard key={person.id} person={person} />
      ))}
    </div>
  );
}
