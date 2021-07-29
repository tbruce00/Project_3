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
        comments: Comment
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
    type Comments {
        _id: ID
        name: String
        comment: String
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
        addComment(name: String, comment: String): User 
    }
`;

module.exports = typeDefs;