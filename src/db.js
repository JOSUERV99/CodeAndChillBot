const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_CONNECTION_STRING;
const config = require('./config.json'); // default config file

var mongoClient = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const stablishConnection = async (client) => {

    try {
        await mongoClient.connect();
        client.mongoConn = mongoClient;
        console.log('Got it! DB connection done');
    } catch (error) {
        console.log('No connection reached', error);
    }
}

const getConfig = async () => {
    try {
        await mongoClient.db("admin").command({ ping: 1 });
        const configFromDb = await mongoClient.db(`${config.db}`).collection('config').find();
        return configFromDb.hasNext() ? configFromDb.next() : undefined;
    } catch(e) {
        console.log('Error: database connection cannot be reached');
        process.exit();
    }
}

module.exports = { getConfig, stablishConnection, mongoClient };
