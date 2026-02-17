import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <h1 className="text-3xl font-bold">Coming Soon!</h1>
      <Link to="/">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-lg transition-colors duration-200 shadow-md active:scale-95 mt-5 text-2xl">
          Go back to Main
        </button>
      </Link>
    </div>
  );
}
