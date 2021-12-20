module.exports = {
  HOST: "localhost",
  USER: "josh",
  //PASSWORD: "123",
  DB: "martadb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};