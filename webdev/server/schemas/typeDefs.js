const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
}
    type Profile {
        _id: ID
        name: String
        description: String
    }
`
module.exports = typeDefs;