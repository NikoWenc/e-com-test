import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen flex-col bg-black">
      <h1 className="text-5xl font-bold text-white">Hi!</h1>
      <p className="text-3xl text-white">Welcome to my shop</p>
      <Link to="shop">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-lg transition-colors duration-200 shadow-md active:scale-95 mt-5 text-2xl">
          Shop Now!
        </button>
      </Link>
    </div>
  );
}
