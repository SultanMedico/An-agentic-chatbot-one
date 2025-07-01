import Image from "next/image";

export default function Chatbot() {
  return (

<>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to My (Sultan's) Agentic Chatbot</h1>
      <p className="mt-4 text-lg">This is a simple chatbot application built with Next.js.</p>
      <Image
        src=".png"
        // Note: In Next.js, the path should be relative to the `public` directory
        // or you can use an absolute URL if the image is hosted elsewhere.
        // If the image is in the `public` directory, you can use `/chatbot
        alt=""
        width={500}
        height={300}
      />
      <p className="mt-8 text-gray-600">Explore the features and functionalities of this chatbot by interacting with it.</p>
    </main>

    </>


  );
}


