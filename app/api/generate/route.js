import clientPromise from "@/lib/mongodb";
import { NextRequest } from "next/server";

export async function POST() {
  try {
    let data = await NextRequest.json();
    let client = await clientPromise;
    let db = client.db("BitLinks");
    const collection = db.collection("url");
    const doc = await collection.findOne({ shortUrl: data.shortUrl });
    
    if (doc) {
      return json({
        success: false,
        error: true,
        message: "Url Already Exists!",
      });
    }

    const result = await collection.insertOne({
      url: data.url,
      shortUrl: data.shortUrl,
    });

    return json({
      success: true,
      error: false,
      message: "Url Generated Successfully",
    });
  } catch (error) {
    return json({
      success: false,
      error: true,
      message: "An error occurred",
      details: error.message,
    });
  }
}
// Left At 40:00