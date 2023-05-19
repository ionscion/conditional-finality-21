const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
  }

  type Book {
    _id: ID
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type Query {
    users: [User]
    books: [Book]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    getSingleUser(username: String!): User
    createUser(username: String!, email: String!, password: String!): Auth
    saveBook(username: String!, bookId: String!): User
    deleteBook(username: String!, bookId: String!): User
  }
`;

module.exports = typeDefs;
