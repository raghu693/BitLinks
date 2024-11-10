import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req) {
  console.log(req);
  let data = await req.json();
  let client = await clientPromise;
  let db = client.db("BitLinks");
  const collection = db.collection("url");

  const doc = await collection.findOne({ shortUrl: data.shortUrl });
  if (doc) {
    NextResponse.json({
      success: false,
      error: true,
      message: "Url Already Exists!",
    });
  }

  const result = await collection.insertOne({
    url: data.url,
    shortUrl: data.shortUrl,
  });

  console.log(result);

  NextResponse.json({
    success: true,
    error: false,
    message: "Url Generated Successfully",
  });
}

// Left At 40:00
