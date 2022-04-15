module.exports = { 
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    db: process.env.DB_NAME,
    options: {
        host: process.env.DB_HOST,
        dialect: "mysql",
        logging: false
    }
};
