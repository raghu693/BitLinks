import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="h-16 bg-purple-700 flex justify-between items-center px-3 text-white">
      <div className="logo font-bold text-2xl cursor-pointer">
        <Link href={"/"}>BitLinks</Link>
      </div>
      <ul className="flex gap-4 justify-center items-center">
        <Link href={"/"}>
          <li>Home</li>
        </Link>
        <Link href={"/shorten"}>
          <li>Shorten</li>
        </Link>
        <li>
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
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
