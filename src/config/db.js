const mongoose = require("mongoose");
require("dotenv").config();

const connect = () => {
  console.log("mongo connect");
  return mongoose.connect(process.env.MONGODB_URL);
};

module.exports = connect;

// const mongoose = require("mongoose");

// const connect = () => {
//   console.log("mongo connect");
//   return mongoose.connect(
//     "mongodb://127.0.0.1:27017/bitrix"
//   );
// };

// module.exports = connect;
