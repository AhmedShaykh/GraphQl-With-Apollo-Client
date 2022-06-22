const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Developer {
    id: Int
    name: String
    email: String
    age: Int
  }

  input DevInput {
    id: Int
    name: String
    email: String
    age: Int
  }

  type Query {
    Developers: [Developer]
  }

  type Mutation {
    addDeveloper(input: DevInput): Developer
  }
`;

const Developers = [
  {
    "id": 1,
    "name": "Ahmed",
    "email": "ahmed@gmail.com",
    "age": 21
  },
  {
    "id": 2,
    "name": "Yaseen",
    "email": "yaseen@gmail.com",
    "age": 20
  },
  {
    "id": 3,
    "name": "Bilal",
    "email": "bilal@gmail.com",
    "age": 21
  }
];

const resolvers = {
  Query: {
    Developers: () => Developers
  },
  Mutation: {
    addDeveloper: (_, {input})=> {
      console.log(input);
      return input
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});