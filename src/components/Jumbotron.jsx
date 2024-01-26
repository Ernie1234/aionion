function Jumbotron() {
  return (
    <div className="flex flex-col md:flex-row relative overflow-hidden">
      <div className="md:flex-1 w-4/5 md:w-full mx-auto md:px-0 pl-0 md:pl-28 lg:pl-48 flex-col md:flex-row flex justify-center items-center pt-28">
        <div>
          <h1 className="text-red-950 text-center md:text-left text-4xl md:text-5xl lg:text-6xl font-bold">
            AI Onion
          </h1>
          <h5 className="text-yellow-700/90 text-2xl md:text-4xl text-center md:text-left font-semibold pb-48 md:pb-16 lg:pb-8">
            We are a community driven project, championed by active
            participants.
          </h5>
          <p>
            $Aion is a artificial intelligence bsc blockchain project, which
            imbeds the use of AI in it’s utility, improving users experience. We
            peel back the layers of crypto innovation, adding flavor to the bsc
            ecosystem using artificial intelligence.
          </p>

          <div className="flex flex-col md:flex-row gap-3 md:gap-6 lg:gap-10 pt-3 md:pt-5">
            <button className="font-bold text-xl md:text-2xl lg:text-4xl capitalize py-3 px-8 rounded md:rounded-md lg:rounded-lg border border-red-950 text-red-950 bg-transparent hover:bg-red-950 hover:text-white hover:border-red-950 cursor-pointer">
              buy
            </button>
            <button className="font-bold text-xl md:text-2xl lg:text-4xl capitalize py-3 px-8 rounded md:rounded-md lg:rounded-lg border  text-white bg-red-950 hover:bg-red-900 hover:text-white  cursor-pointer">
              swap
            </button>
          </div>
        </div>
      </div>
      <div className="hidden md:block md:flex-1 pt-32">
        <div className="hidden md:block w-[65rem] h-[38rem] bg-red-950 absolute rounded-[6rem] md:-top-[28rem] md:-right-48 bg-[url('/assets/rectGirl.png')] bg-no-repeat bg- scale-x-[-1] rotate-[28deg]" />
        <div className="hidden md:block w-[65rem] h-[38rem]  absolute rounded-[6rem] md:-top-[28rem] md:-right-48 rotate-[28deg] bg-gradient-to-r from-red-950/90 to-red-950/50" />

        <div className="">
          <img
            src="/assets/Picsart_24-01-16_10-39-56-312 1.png"
            alt="A picture of a person sitting on a couch, looking at the camera."
            className="w-2/3"
          />
        </div>
      </div>
      <div className="-top-18 right-0 left-0 absolute">
        <img
          src="/assets/smRectShape.png"
          alt="jumbotronImage"
          className="block md:hidden bg-cover"
        />
      </div>
    </div>
  );
}

export default Jumbotron;
