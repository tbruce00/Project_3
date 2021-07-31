import { gql } from '@apollo/client';

export const LOGIN = gql`
    mutation login($userName: String!, $password: String!) {
        login(username: $userName, password: $password) {
            token
            user {
                _id
            }
        }
    }
    `;

    export const ADD_USER = gql`
    mutation addProfile($name: String!) {
      addProfile(name: $name) {
        name
      }
    }
  `;

export const UPDATE_PROFILE = gql`
    mutation updateProfile(
        $name:String!
        $bio: String!
        $location: String!
        $email: String!
        $avatarUrl: String!
        $gitHub: String!
    ) {
        updateProfile(
            name: $userName
            bio: $bio
            location: $location
            email: $email
            avatarUrl: $avatarUrl
            gitHub: $gitHub
        ){
            token
            user {
                _id 
            }
        }
    }
`;


        
