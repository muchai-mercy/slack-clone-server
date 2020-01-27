import { gql } from 'apollo-server-express';


export default gql`
type Team {
  owner: User!
  members: [User!]!
  channels: [Channel!]!
}

type Channel {
  id: Int!
  name: String!
  messages: [Message!]!
  public: Boolean!
  users: [User!]!
}

type Message {
  id: Int!
  text: String!
  user: User!
  channel: Channel!
}

type User {
  id: Int!
  email: String!
  username: String!
  messages: Message!
  teams: [Team!]!
}

type Query {
  hi: String
}`;
