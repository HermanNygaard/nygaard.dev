import { kv } from "@vercel/kv";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const slug = req.body.slug;
  kv.incr(slug);
  return res.status(200).json("OK");
}
