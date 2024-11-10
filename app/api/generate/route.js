import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(Request) {
  console.log(await Request);
  let data = await Request.json();
  let client = await clientPromise;
  let db = client.db("BitLinks");
  const collection = db.collection("url");

  const doc = await collection.findOne({ shortUrl: data.shortUrl });
  if (doc) {
    return NextResponse.json({
      success: false,
      error: true,
      message: "Url Already Exists!",
    });
  }

  const result = await collection.insertOne({
    url: data.url,
    shortUrl: data.shortUrl,
  });

  return NextResponse.json({
    Request: (await Request),
    success: true,
    error: false,
    message: "Url Generated Successfully",
  });
}

// Left At 40:00
