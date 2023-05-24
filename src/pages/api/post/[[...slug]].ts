import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log('query:',req.query);
    
  const { slug } = req.query;
  res.status(200).json({ productId: slug });
}