import { gql } from "@apollo/client";

export const CREATE_USER_PROFILE = gql`
  mutation CreateUserProfile($input: user_profiles_insert_input!) {
    insert_user_profiles_one(object: $input) {
      id
      name
      email
      age
      location
      profession
      religion
      caste
      ethnicity
      bio
      profile_picture
      is_verified
      created_at
    }
  }
`;

export const UPDATE_USER_PROFILE = gql`
  mutation UpdateUserProfile($id: uuid!, $input: user_profiles_set_input!) {
    update_user_profiles_by_pk(pk_columns: {id: $id}, _set: $input) {
      id
      name
      email
      age
      location
      profession
      religion
      caste
      ethnicity
      bio
      profile_picture
      is_verified
      updated_at
    }
  }
`;

export const CREATE_VERIFICATION_REQUEST = gql`
  mutation CreateVerificationRequest($input: verification_requests_insert_input!) {
    insert_verification_requests_one(object: $input) {
      id
      user_profile_id
      verification_type
      document_url
      selfie_url
      notes
      status
      created_at
    }
  }
`;