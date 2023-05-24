import { MongoClient } from 'mongodb';

export async function qq() {
  const client = new MongoClient(
    'mongodb+srv://user1:AWQpza6UNChIXPl5@nextjs.tjp9zle.mongodb.net/',
    { useNewUrlParser: true, useUnifiedTopology: true }
  );

  try {
    await client.connect();
    console.log('Connected to the database');

    const database = client.db('qq'); 
    const collections = await database.listCollections().toArray();
    const collectionNames = collections.map((collection) => collection.name);

    console.log('collectionNames:', collections);

    return collectionNames;
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    throw error;
  }
}
