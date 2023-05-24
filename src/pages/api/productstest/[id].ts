import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../../lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const productId = req.query.id as string;

  const client = await connectToDatabase();

  const productCollections = client.db('qq').collection("ww");

  const product = await productCollections.findOne({ id: parseInt(productId) });

  res.status(200).send(product);
}