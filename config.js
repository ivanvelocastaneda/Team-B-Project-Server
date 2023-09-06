const config = {
    db: {
      /* don't expose password or any sensitive info, done only for demo */
      host: "db4free.net",
      user: "bjarnigod",
      password: "Bjarni123456789",
      database: "csci441_teamb",
      connectTimeout: 60000
    },
    listPerPage: 10,
  };
  module.exports = config;