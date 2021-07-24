const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
        password: String
}
    type Profile {
        _id: ID
        name: String
        bio: String
        location: String
        email: String
        link: String
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
        updateUser(firstName: String, lastName: String, email: String, password: String): User
    }
`;

module.exports = typeDefs;