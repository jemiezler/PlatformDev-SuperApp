export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  MONGODB_URI: process.env.MONGO_URI,
});
