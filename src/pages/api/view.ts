import { kv } from "@vercel/kv";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const slug = req.body.slug;
  if (req.method !== "POST" || !slug) return res.status(400);
  const count = await kv.incr(slug);
  return res.status(200).json({ count });
}
