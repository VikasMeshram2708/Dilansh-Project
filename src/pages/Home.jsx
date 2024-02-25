import About from "../components/Home/About";
import Testmonial from "../components/Testimonials/Testmonial";
import SponsorSlider from "../components/sponsors/SponsorSlider";

export default function Home() {
  return (
    <section className="font-Poppins h-auto">
      <div className="mt-10">
        <img
          className="w-[90%] object-cover mx-auto"
          src="/landingPage/banner2.jpg"
          alt="home page banner"
        />
      </div>
      {/* About Section */}
      <div className="max-w-[90%] mx-auto mt-10">
        <About />
        <div className="mt-10">
          {/* Testimonail Section */}
          <Testmonial />
        </div>
        <div className="mt-14 mb-10">
          {/* Sponsors section */}
          <SponsorSlider />
        </div>
      </div>
    </section>
  );
}
