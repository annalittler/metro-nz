const { MongoClient } = require("mongodb");

const searchListings = async (req, res) => {
  const {
    suburb,
    propertyType,
    bedrooms,
    bathrooms,
    minRent,
    maxRent,
    pets,
    availableNow,
  } = req.body;
  const query = req.body;

  console.log(req.body);
  async function main() {
    const uri =
      "mongodb+srv://teamCat:mission6b!@cluster0.tmoamld.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    try {
      await client.connect();
      await search(client);
    } catch (e) {
      console.error(e);
    } finally {
      await client.close();
    }
  }
  async function search(client) {
    // console.log(bedrooms);
    const result = await client
      .db("mission6b")
      .collection("metroNZ")
      .find(query)
      .toArray();
    if (result) {
      res.send(result);
      //   console.log(result);
    } else {
      console.log(`no listings found`);
    }
  }
  main();
};

module.exports = { searchListings };