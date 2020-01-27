import { gql } from 'apollo-server-express';


export default gql`
  type User {
    id: Int!
    email: String!
    username: String!
    messages: Message!
    teams: [Team!]!
  }

  type Query {
    getUser(id: Int!): User!
    getAllUsers: [User!]!
  }

  type Mutation {
    createUser(username: String! email: String! password: String!): User!
  }
`;
