// import gql from "@apollo/client";
import gql from 'graphql-tag';

// const CHARACTER_QUERY = gql`
// query CHARACTER_QUERY {
//     character(id: 1) {
//      name
//      id
//     }
// }`

export const CHARACTER = gql`
  query character($id: ID!) {
    character(id: $id) {
      name
      id
      status
      gender
      species
      image
      type
      origin {
        name
      }
      created
    }
  }
`;
