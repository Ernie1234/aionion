import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="w-screen min-h-[80vh] flex justify-center items-center bg-gradient-to-b from-red-900 to-slate-900">
      <div className="flex flex-col gap-3 md:gap-6 lg:gap-8 justify-center items-center">
        <h1 className="text-xl md:text-2xl lg:text-3xl text-gray-100 font-light">
          Ready soon
        </h1>
        <Link to="/">
          <button className="font-bold text-xl md:text-2xl lg:text-4xl capitalize py-3 px-8 rounded md:rounded-md lg:rounded-lg border border-red-950 text-red-950 bg-gray-100 hover:bg-gray-200 hover:text-red-900 hover:border-red-950 cursor-pointer">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Contact;
