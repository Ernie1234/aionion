function Jumbotron() {
  return (
    <div className="flex ">
      <div className="flex-1 pl-48 flex justify-center items-center ">
        <div>
          <h1 className="text-red-950 text-4xl md:text-5xl lg:text-6xl font-bold">
            AI Onion
          </h1>
          <h5 className="text-red-700 font-medium ">
            We are a community driven project, championed by active
            participants.
          </h5>
          <p>
            $Aion is a artificial intelligence solana blockchain project, which
            imbeds the use of AI in it’s utility, improving users experience. We
            peel back the layers of crypto innovation, adding flavor to the
            solana ecosystem using artificial intelligence.
          </p>

          <div className="flex gap-3 md:gap-6 lg:gap-10 pt-3 md:pt-5">
            <button className="font-bold text-xl md:text-2xl lg:text-4xl capitalize py-3 px-8 rounded md:rounded-md lg:rounded-lg border border-red-950 text-red-950 bg-transparent hover:bg-red-950 hover:text-white hover:border-red-950 cursor-pointer">
              buy
            </button>
            <button className="font-bold text-xl md:text-2xl lg:text-4xl capitalize py-3 px-8 rounded md:rounded-md lg:rounded-lg border  text-white bg-red-950 hover:bg-red-900 hover:text-white  cursor-pointer">
              swap
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 relative ">
        <div className="w-[54rem] h-[34rem] bg-red-950 absolute rounded-3xl -top-[30rem] -right-28 rotate-[25deg]" />
        <div className="">
          <img
            src="/assets/Picsart_24-01-16_10-39-56-312 1.png"
            alt="A picture of a person sitting on a couch, looking at the camera."
            className="w-2/3"
          />
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
