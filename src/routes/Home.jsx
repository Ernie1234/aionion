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
      <Jumbotron />
      <Banner />
      <RoadMap />
      <Tokemonics />
      <Ecosystem />
      <TestimonialSection />
    </div>
  );
}

export default Home;
