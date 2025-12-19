import 'dotenv/config';

export default {
  expo: {
    name: "lab11",
    slug: "lab11",
    version: "1.0.0",
    extra: {
      apiBaseUrl: process.env.API_BASE_URL || "https://jsonplaceholder.typicode.com"
    }
  }
};