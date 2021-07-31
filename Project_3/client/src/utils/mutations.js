import { gql } from '@apollo/client';

export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(username: $email, password: $password) {
            token
            user {
                _id
            }
        }
    }
    `;

export const ADD_USER = gql`
    mutation addUser(
          $name: String!
          $email: String!
          $bio: String
          $location: String
          $avatarUrl: String
          $websiteUrl: String
    ) {
        addUser(
        name: $name
        email: $email
        bio: $bio
        location: $location
        avatarUrl: $avatarUrl
        websiteUrl: $websiteUrl
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
        $linkedIn: String!
        $gitHub: String!
    ) {
        updateProfile(
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

// export const ADD_COMMENT = gql`
//     mutation addComment(
//         $name: String!
//         $comment: String!
//     ){
//         addComment(
//             name: $name
//             comment: $comment
//         ){
//             token
//             user {
//                 _id
//             }
//         }
//     }    
//     `;

        
