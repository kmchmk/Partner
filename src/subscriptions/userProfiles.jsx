import { gql } from "@apollo/client";

const GET_USER_PROFILES = gql`
  subscription GetUserProfiles {
    user_profiles(where: {is_verified: {_eq: true}}) {
      id
      name
      age
      gender
      caste
      ethnicity
      profile_picture
      location
      profession
      religion
      civil_status
      education_level
      drinking
      smoking
      bio
      is_verified
      created_at
    }
  }
`;

export default GET_USER_PROFILES;