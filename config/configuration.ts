export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  //NODE_ENV: process.env.NODE_ENV,
    // port: parseInt(process.env.PORT, 10) || 3001,
    //  jwt: {
    //   secret: process.env.JWT_SECRET,
    //   expiresIn: process.env.JWT_EXPIRES_IN,
    // }
  });

  console.log('PORT: ',process.env.PORT);
  