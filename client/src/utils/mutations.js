import { gql } from '@apollo/client';
// do login and add user need more fields?
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addProfile(username: $username, email: $email, password: $password) {
      token
      profile {
        _id
        username
      }
    }
  }
`;

// ask about this one's parameters
export const SAVE_BOOK = gql`
  mutation saveBook(){
    saveBook(){
        _id
        username
        savedBooks
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!){
    removeBook(bookId: $bookId){
        _id
        username
        savedBooks
    }
  }
`