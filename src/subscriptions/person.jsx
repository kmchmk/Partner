import { gql } from "@apollo/client";

const GET_PERSON = gql`
  subscription GetPerson {
    person {
      id
      name
      age
      gender
      caste
      ethnicity
      image
      location
      profession
      religion
      civil_status
      education_level
      drinking
      smoking
      bio
    }
  }
`;
export default GET_PERSON;
