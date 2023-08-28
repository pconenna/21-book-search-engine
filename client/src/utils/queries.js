import { gql } from '@apollo/client';


export const QUERY_ME = gql`
  query me {
    me {
        _id
        username
        email 
        bookCount
        savedBooks
    }
  }
`;

export const QUERY_USERS = gql`
    query allUsers {
        users {
            _id
            username
            email 
            bookCount
            savedBooks
        }
    }
`;

export const QUERY_ONE_USER = gql`
    query singleUser($userId: ID!){
        user(userId: $userId){
            _id
            username
            email 
            bookCount
            savedBooks
        }
    }
`;

export const QUERY_ALL_BOOKS = gql`
    query allBooks{
        books{
            bookId
            title
            description
            image 
            link
        }
    }
`;

export const QUERY_ONE_BOOK = gql`
    query singleBook($bookTitle: String!){
        book(bookTitle: $bookTitle){
            bookId
            title
            description
            image 
            link
        }
    }
`;