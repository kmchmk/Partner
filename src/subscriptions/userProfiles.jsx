import { gql } from "@apollo/client";

const GET_USER_PROFILES = gql`
  subscription GetUserProfiles {
    user_profiles(where: {is_verified: {_eq: true}}) {
      id
      name
      age
      caste
      ethnicity
      profile_picture
      location
      profession
      religion
      bio
      is_verified
      created_at
    }
  }
`;

export default GET_USER_PROFILES;