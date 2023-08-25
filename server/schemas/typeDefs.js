const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Book {
        authors: [String]
        description: String
        image: String
        link: String
        title: String
    }

    Type User {
        username: String
        email: String
        password: String
        savedBooks: [Book]
    }
     type Query {
        books: [Book]
        book (title: String!): Book
        users: [User]
        user(username: String!): User
     }
`