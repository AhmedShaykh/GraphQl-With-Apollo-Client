const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Developer {
    id: Int
    name: String
    email: String
    age: Int
  }

  type Query {
    Developers: [Developer]
  }
`;

const Developers = [
  {
    "id": 0,
    "name": "Ahmed",
    "email": "ahmed@gmail.com",
    "age": 21
  },
  {
    "id": 1,
    "name": "Abrar",
    "email": "abrar@gmail.com",
    "age": 20
  },
  {
    "id": 2,
    "name": "Yaseen",
    "email": "yaseen@gmail.com",
    "age": 20
  }
];

const resolvers = {
  Query: {
    Developers: () => Developers,
  },
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