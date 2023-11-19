const gql = require("graphql-tag");

const typeDefs = gql`
  type Query {
    news(query: String): ArticleHeader
  }

  type ArticleHeader {
    status: String
    articles: [Article!]!
  }

  type Article {
    title: String
    source: Source
    author: String
    description: String
    url: String
    urlToImage: String
  }

  type Source {
    id: ID
    name: String
  }
`;

module.exports = { typeDefs };
