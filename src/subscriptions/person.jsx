import { gql } from "@apollo/client";

const GET_PERSON = gql`
  subscription GetPerson {
    person {
      id
      name
      age
      caste
      ethnicity
      image
      location
      profession
      religion
    }
  }
`;
export default GET_PERSON;
