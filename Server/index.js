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

let Developers = [
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
    addDeveloper: (e, { input }) => {
      Developers.push(
        {
        id: input.id,
        name: input.name,
        age: input.age,
        email: input.email
        }
      )
      
      return (
        {
          name: input.name,
          age: input.age,
          email: input.email,
          id: input.id
        }
      )
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