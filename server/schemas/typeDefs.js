const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Book {
        BookId: String
        authors: [String]
        description: String
        image: String
        link: String
        title: String
    }

    Type User {
        _id: ID
        username: String
        email: String
        password: String
        bookCount: Int
        savedBooks: [Book]
    }
    Type Auth{
        token: ID!
        user: User
    }
    input BookInput{
        BookId: String
        description: String
        image: String
        link: String
        title: String
    }
     type Query {
        books: [Book]!
        book (title: String!): Book
        users: [User]!
        user(username: String!): User
        me: User
     }

     type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(authors: [Book]!, input: bookInput): User
        removeBook(bookId: String!):User
     }
`