import { FaSquareXTwitter, FaTelegram } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4 px-6 md:py-6 lg:py-10">
      <div className="w-full md:max-w-screen-md lg:max-w-screen-lg m-auto flex flex-col justify-center items-center">
        <p className="text-center">
          $Aion ecosystem is built to ensure that sustainbility of Ai-Onion is
          maintained. Our first goal is to achieve a target of $1. The swap and
          staking platform will create a strong utility for the bsc ecosystem
          and other projects. Holders of $Aion will be able to stake their
          tokens to earn Bsc and other bsc projects. $Aion skaking platform will
          have a farming pool which will accomodate other projects of the bsc
          ecosystem, where users can stake tokens and be rewarded. Active users
          of Ai-Onion swap and staking platforms will be airdropped
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-8 lg:gap-12 mt-3 md:mt-5 lg:mt-8">
          <a
            href="https://twitter.com/AIONION_SOL"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-3 md:gap-5 justify-center items-center cursor-pointer"
          >
            <FaSquareXTwitter size={35} />
            <span> @AIONION_SOL</span>
          </a>
          <a
            href="https://t.me/+-djdU5vZjYQ3NTFk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-3 md:gap-5 justify-center items-center cursor-pointer"
          >
            <FaTelegram size={35} />
            <span>https://t.me/+-djdU5vZjYQ3NTFk</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
