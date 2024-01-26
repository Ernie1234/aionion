import { coinData } from "../libs/data";

import HorizontalScroll from "./HorizontalScroll";

function Banner() {
  return (
    <div className="w-full">
      <div className="w-full md:w-3/4 px-0 mx-auto border-none md:border-t-[2rem] border-red-950 flex flex-col justify-center items-center">
        <p className="font-normal md:font-bold text-red-950 text-sm md:text-2xl md:w-3/5 text-center px-1 pt-5 pb-5 md:pt-10 md:pb-12">
          We are committed to promoting growth and development in the crypto
          industry and bsc ecosystem.
        </p>
        <img src="/assets/Swap.png" alt="swap" className="block md:hidden" />
        <HorizontalScroll data={coinData} />
      </div>
    </div>
  );
}

export default Banner;
