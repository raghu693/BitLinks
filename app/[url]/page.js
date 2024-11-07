import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function page({ params }) {
  const url = (await params).url;
  let client = await clientPromise;
  let db = client.db("BitLinks");
  const collection = db.collection("url");

  const doc = await collection.findOne({ shortUrl: url });
  if (doc) {
    redirect(doc.url);
  } else {
    redirect(`https://bit-links-kohl.vercel.app`);
  }
}
