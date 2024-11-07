import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex items-center justify-center flex-col gap-4">
          <p className={`text-3xl font-bold ${poppins.className}`}>
            The Best URL Shortener in the Market
          </p>
          <p className="px-56 flex flex-col items-center gap-y-5 text-center">
            We Are the most straightforward URL Shortener in the world. Most of
            URL Shortener will track you or ask you to give your details for
            login. We understand your needs and hence we have created this URL
            Shortener.
            <span className="text-white">
              <Link href={"/shorten"}>
                <button className="bg-purple-500 shadow-lg p-3 rounded-lg font-bold py-1 mx-3">
                  Try Now
                </button>
              </Link>
              <Link href={"/github"}>
                <button className="bg-purple-500 shadow-lg p-3 rounded-lg font-bold py-1 mx-3">
                  GitHub
                </button>
              </Link>
            </span>
          </p>
        </div>
        <div className=" flex justify-start relative">
          <Image
            alt="An Image of Vector"
            className="mix-blend-darken"
            src={"/vector.jpg"}
            fill={true}
          />
        </div>
      </section>
    </main>
  );
}
