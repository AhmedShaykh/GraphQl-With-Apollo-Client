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
    "id": 1,
    "name": "Ahmed",
    "email": "ahmed@gmail.com",
    "age": 21
  },
  {
    "id": 2,
    "name": "Saleem",
    "email": "saleem@gmail.com",
    "age": 21
  },
  {
    "id": 3,
    "name": "Shaikh",
    "email": "shaikh@gmail.com",
    "age": 21
  }
];

const resolvers = {
  Query: {
    Developers: () => {
      return Developers
    }
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