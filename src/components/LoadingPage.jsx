import Loader from "../assets/loader.gif";

export default function LoadingPage() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <img src={Loader} alt="Loader.." />
    </div>
  );
}
