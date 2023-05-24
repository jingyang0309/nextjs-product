import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../../lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const client = await connectToDatabase();
    const collection = client.db('qq').collection('ww'); 

    const documents = await collection.find({}).toArray();

    res.status(200).json(documents);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}