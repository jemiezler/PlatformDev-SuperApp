export default () => ({
  PORT: parseInt(process.env.PORT, 10) || 3000,
  MONGO_URI: process.env.MONGO_URI,
  accessToken: {
    secret: process.env.JWT_SECRET,
    expiresIn: '30m',
  },
  refreshToken: {
    secret: process.env.JWT_SECRET,
    expiresIn: '7d',
  },
});
