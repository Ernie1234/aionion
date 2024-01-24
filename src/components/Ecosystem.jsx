function Ecosystem() {
  return (
    <div className="bg-yellow-900 md:bg-gray-100 rounded-[5rem] md:rounded-none w-full mb-4 md:mb-8 lg:mb-16">
      <h2 className="md:bg-yellow-900 text-center text-black text-xl font-bold p-3 md:p-5 mb-6 md:mb-10 lg:mb-12">
        AI-ONION ECOSYSTEM
      </h2>
      <div className="w-full md:w-11/12 lg:w-9/12 m-auto px-0 md:px-5 lg:px-10 flex justify-center items-center gap-3 md:gap-6 lg:gap-12">
        <div className="flex-1 flex flex-col">
          <p className="pb-3 px-5 md:px-0">
            $Aion ecosystem is built to ensure that sustainbility of Ai-Onion is
            maintained. Our first goal is to achieve a target of $1. The swap
            and staking platform will create a strong utility for the solana
            ecosystem and other projects. Holders of $Aion will be able to stake
            their tokens to earn Solana and other solana projects. $Aion skaking
            platform will have a farming pool which will accomodate other
            projects of the solana ecosystem, where users can stake tokens and
            be rewarded. Active users of Ai-Onion swap and staking platforms
            will be airdropped
          </p>

          <div className="bg-gray-400 md:bg-gray-100 p-5 md:p-0 text-white md:text-red-950 rounded-t-[5rem] md:rounded-none">
            <h2 className="text-white md:text-black text-3xl font-bold py-1.5 md:py-2.5">
              AI-ONION CLUB
            </h2>
            <p>
              Holders who are whales, will be awarded free membership of the
              $Aion club. It is a prestigious club where members can enjoy
              several social benefits. Members will possess different rights
              such as voting and decision making powers, receive incentives for
              selected club engagements and exclusive invites access to partners
              {"' "}
              events. The club is designed to offer prestige and social class to
              the holders and it is going to serve as a community where holders
              can interact on the web and even partnerships and collaborations
              within themselves.
            </p>
          </div>
        </div>
        <div className="flex-1 hidden md:flex justify-center items-center">
          <img src="/assets/Rectangle 12.png" alt="rectangle" />
        </div>
      </div>
    </div>
  );
}

export default Ecosystem;
