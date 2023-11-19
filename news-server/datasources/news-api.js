const { RESTDataSource } = require("@apollo/datasource-rest");
require('dotenv').config();

class NewsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://newsapi.org/v2/";
    this.apiKey = process.env.NEWS_API_KEY;;
  }

  async getEverything(query) {
    const params = new URLSearchParams({
      q: query,
      apiKey: this.apiKey,
    });

    const url = `everything?${params.toString()}`;

    try {
      const response = await this.get(url);
      return response;
    } catch (error) {
      console.error("Error fetching data:", error.message);
      throw error;
    }
  }
}

module.exports = NewsAPI;
