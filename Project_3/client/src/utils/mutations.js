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
    mutation addUser(
          $userName: String!
          $firstName: String!
          $lastName: String!
          $email: String!
          $password: String!  
    ) {
        addUser(
        userName: $userName
        firstName: $firstName
        lastName: $lastName
        email: $email
        password: $password
        ) {
            token
            user {
                _id
            }
        }
    }
    `;

export const UPDATE_PROFILE = gql`
    mutation updateProfile(
        $name:String!
        $bio: String!
        $location: String!
        $email: String!
        $linkedIn: String!
        $gitHub: String!
    ) {
        updateProfile(
            name: $userName
            bio: $bio
            location: $location
            email: $email
            linkedIn: $linkedIn
            gitHub: $gitHub
        ){
            token
            user {
                _id 
            }
        }
    }
`;


        
