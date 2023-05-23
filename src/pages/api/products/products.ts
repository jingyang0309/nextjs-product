import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('req.method ',req.method);
  
  res.status(200).json({ products: [{ name: "item" }] });
}