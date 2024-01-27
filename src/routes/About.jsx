import { Jumbotron } from "../components";

function About() {
  return (
    <div>
      <Jumbotron title="About" btn={false} />
      <div className="w-full md:w-3/4 mx-auto border-t-[2rem] border-red-950 py-5 mt-5 md:mt-0 md:py-3 lg:py-8 flex flex-col justify-center items-center">
        <p className="w-3/4 md:w-full">
          Aionion is a solana project with utilities, one of which is a Ai-Onion
          swap and staking platform. Through achieving our goal of creating an
          important utility in the solana ecosystem, we empower every $Aion
          holder to engage in the thriving web 3 ecosystem and help build a
          better decentralized future, through the application of artificial
          intelligence These plans are what will guide us to meticulously to
          reach the ultimate goal(s). They are; Last quarter of 2023 – Presale,
          giveaway‛s and launch First to Secondquarter of 2024 - Aggressive
          marketing, website release before 500kmcap, Ai-Onion swap release at
          1m mcap, staking/farming pools release at 5m mcap, airdrop for active
          users of Ai-onion swap and staking platform. The Third/Fourth quarter
          of 2024. - More marketing, listing on exchanges, partnerships. The
          first quarter of 2025 – More updates will be made on the road map.
          Strategies have been employed to strengthen the statistics of the
          community. The goal is to have a relevant $Aion community targeted for
          influencers marketing and promotion.
        </p>
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-auto gap-3 md:gap-6 lg:gap-10 p-3 md:pt-5 lg:pt-8">
          <div className="w-5/6 flex justify-center items-center">
            <img
              src="/assets/Man using blockchain and cryptocurrency technology.png"
              alt="image3"
              className="object-fill w-full"
            />
          </div>
          <div className="w-5/6 flex justify-center items-center">
            <img
              src="/assets/Blockchain crypto.png"
              alt="image1"
              className="object-fill w-full"
            />
          </div>
          <div className="w-5/6 flex justify-center items-center">
            <img
              src="/assets/Blockchain for crypto transactions and exchange.png"
              alt="image2"
              className="object-fill w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
