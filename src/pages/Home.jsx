import About from "../components/Home/About";
import Testmonial from "../components/Testimonials/Testmonial";

export default function Home() {
  return (
    <section className="font-Poppins min-h-screen">
      <div className="mt-10">
        <img
          className="w-full"
          src="/landingPage/banner.jpeg"
          alt="home page banner"
        />
      </div>
      {/* About Section */}
      <div className="max-w-[90%] mx-auto mt-10">
        <About />
      </div>
      {/* Testimonail Section */}
      <div className="max-w-[90%] mx-auto mt-10">
        <Testmonial />
      </div>
    </section>
  );
}
