const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        name: String
        email: String
        bio: String
        location: String
        avatarUrl: String
        websiteUrl: String
        profile: Profile
}
    type Profile {
        _id: ID
        name: String
        bio: String
        location: String
        email: String
        linkedIn: String
        gitHub: String
    }
    type Auth {
        token: ID
        user: User
    }
    
    type Query {
        user: User
        profile: Profile
    }
    
    type Mutation {
        updateProfile(name: String, bio: String, location: String, email: String, linkedIn: String, gitHub: String): User
    }
`;

module.exports = typeDefs;