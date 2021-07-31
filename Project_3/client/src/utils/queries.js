import { gql } from '@apollo/client';

export const QUERY_PROFILE = gql`
    {
        profile {
            linkedIn 
            gitHub
        }
    }
   `;
   

export const QUERY_USER = gql`
    {
        user {
            name
            email
            bio
            location
            avatarUrl
            websiteUrl
        }
    }
    `;




