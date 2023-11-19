const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { resolvers } = require("./resolvers");
const NewsAPI = require("./datasources/news-api");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    NewsAPI: new NewsAPI(),
  }),
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
