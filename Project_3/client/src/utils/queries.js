import { gql } from '@apollo/client';

export const QUERY_PROFILE = gql`
    {
        profile {
            name
            bio
            location
            email 
            linkedIn 
            gitHub
        }
    }
   `;
   

export const QUERY_USER = gql`
    {
        user {
            firstName
            lastName
            email
            password
            
        }
    }
    `;




