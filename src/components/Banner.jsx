import { coinData } from "../libs/data";

import HorizontalScroll from "./HorizontalScroll";

function Banner() {
  return (
    <div className="w-full">
      <div className="w-full md:w-3/4 px-5 md:px-0 mx-auto border-t-[2rem] border-red-950 flex flex-col justify-center items-center">
        <p className="font-bold text-red-950 text-lg md:text-2xl w-3/5 text-center pt-3 pb-5 md:pt-10 md:pb-12">
          We are committed to promoting growth and development in the crypto
          industry and solana ecosystem.
        </p>
        <HorizontalScroll data={coinData} />
      </div>
    </div>
  );
}

export default Banner;
