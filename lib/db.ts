import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://user1:AWQpza6UNChIXPl5@nextjs.tjp9zle.mongodb.net/?retryWrites=true&w=majority'
  );
  return client;
}
//'mongodb+srv://user1:AWQpza6UNChIXPl5@nextjs.tjp9zle.mongodb.net/?retryWrites=true&w=majority'