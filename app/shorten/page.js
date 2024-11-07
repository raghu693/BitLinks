"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

const Page = () => {
  const [url, setUrl] = useState("");
  const [shortURL, setShortURL] = useState("");
  const [generated, setGenerated] = useState(false);

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shortUrl: shortURL,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortURL}`)
        setShortURL("")
        setUrl("");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="mx-auto max-w-lg flex flex-col gap-4 bg-purple-100 my-16 p-8 rounded-lg">
      <h1 className="font-bold text-2xl">Generate Your Short URLs</h1>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          className="p-4 py-2 focus:outline-purple-600 rounded-md"
          placeholder="Enter Your URL"
          onChange={(e) => setUrl(e.target.value)}
          value={url}
        />
        <input
          type="text"
          className="p-4 py-2 focus:outline-purple-600 rounded-md"
          placeholder="Enter your Preferred Short URL"
          onChange={(e) => setShortURL(e.target.value)}
          value={shortURL}
        />
        <button
          onClick={generate}
          className="bg-purple-500 text-white shadow-lg p-3  my-3 rounded-lg font-bold py-1"
        >
          Generate
        </button>
      </div>
      {
        generated && <>
          <span className="font-bold text-lg">Your Link</span><code>
            <Link target="_blank" href={generated}>{generated}</Link>
          </code>
        </>
      }
    </div>
  );
};

export default Page;
