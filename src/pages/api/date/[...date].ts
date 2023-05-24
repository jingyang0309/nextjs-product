import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('req.query:',req.query);
  
  const { date } = req.query;
  res.status(200).json({ productId: date });
}