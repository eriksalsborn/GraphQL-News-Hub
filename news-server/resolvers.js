const resolvers = {
  Query: {
    news: async (_, 
      { query },
      { dataSources }
    ) => {
        const news = await dataSources.NewsAPI.getEverything(query );
        return news;
      },
  },
};

module.exports = { resolvers };