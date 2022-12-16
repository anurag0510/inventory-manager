const mongoose = require("mongoose");
const { mongo, env } = require("./vars");

// set mongoose Promise to Bluebird
mongoose.Promise = Promise;

// Exit application on error
mongoose.connection.on("error", (err) => {
  console.error(`MongoDB connection error: ${err}`);
  process.exit(-1);
});

mongoose.set("strictQuery", false);

// print mongoose logs in dev env
if (env === "development") {
  mongoose.set("debug", true);
}

/**
 * Connect to mongo db
 * @returns Mongoose connection
 * @public
 */
exports.connect = () => {
  mongoose.connect(mongo.uri, {
    autoIndex: env === "development", // Don't build indexes in production
    keepAlive: true,
    useNewUrlParser: true,
  });
  return mongoose.connection;
};
