import { gql } from 'apollo-server-express';

export default gql`
  type Message {
    id: Int!
    text: String!
    user: User!
    channel: Channel!
  }
  type Query {
    getUserMessages(userId: Int!, channelId: Int!): [Message!]!
  }

  type Mutation {
    createMessage(text: String!, channelId: Int!, userId: Int!): Message!
  }
`;
