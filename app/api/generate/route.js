import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  let data = await req.json();

  let client = await clientPromise;
  let db = client.db("BitLinks");
  const collection = db.collection("url");

  const doc = await collection.findOne({shortUrl: data.shortUrl}) 
  if(doc){
    return Response.json({
      success: false,
      error: true,
      message: "Url Already Exists!"
    });  
  }

  const result = await collection.insertOne({
    url: data.url,
    shortUrl: data.shortUrl
  })

  console.log(result);

  return Response.json({
    success: true,
    error: false,
    message: "Url Generated Successfully"
  });
}

// Left At 40:00