import {
  Banner,
  Ecosystem,
  Jumbotron,
  RoadMap,
  TestimonialSection,
  Tokemonics,
} from "../components";

function Home() {
  return (
    <div className="no-scrollbar w-screen">
      <Jumbotron title="AI Onion" btn />
      <Banner />
      <RoadMap />
      <div className="bg-red-950 md:bg-gray-100 rounded-[5rem] md:rounded-none">
        <Tokemonics />
        <Ecosystem />
      </div>
      <TestimonialSection />
    </div>
  );
}

export default Home;
