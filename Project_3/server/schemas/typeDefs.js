const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        userName: String
        firstName: String
        lastName: String
        email: String
        password: String
        profile: Profile
    }
        type Profile {
            name: String
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
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        updateProfile(name: String, bio: String, location: String, email: String, linkedIn: String, gitHub: String): User
    }
`;

module.exports = typeDefs;