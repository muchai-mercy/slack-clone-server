import { gql } from 'apollo-server-express';

export default gql`
  type User {
    id: Int
    email: String!
    username: String!
    messages: Message!
    teams: [Team!]
  }

  type Query {
    getUser(id: Int!): User!
    getAllUsers: [User!]!
  }

  type RegisterResponse {
    isRegistered: Boolean!
    user: User!
    errors: [Error!]
  }

  type Mutation {
    register(username: String! email: String! password: String!): RegisterResponse!
  }
`;
