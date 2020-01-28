import { gql } from 'apollo-server-express';

export default gql`
  type Channel {
    id: Int!
    name: String!
    messages: [Message!]!
    public: Boolean!
    users: [User!]!
  }

  type Query {
    getTeamChannels (teamId: Int!): [Channel!]!
  }
  type Mutation {
    createChannel (teamId: Int!, name: String!, public: Boolean!): Channel!
  }
`;
