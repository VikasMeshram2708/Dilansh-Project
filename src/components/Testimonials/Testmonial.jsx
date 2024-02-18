export default function Testmonial() {
  return (
    <section className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5">
      {/* left */}
      <div>
        <img className="rounded-2xl" src="/testimonials/test.png" alt="our client" />
      </div>
      {/* right */}
      <div className="flex flex-col justify-between">
        {Array.from({ length: 6 }, (_, index) => {
          return (
            <div key={index}>
              <h1 className="sm:text-[1.5rem] font-semibold">11:00 AM - 12:30 PM</h1>
              <p className="sm:text-[1.3rem]">
                Leveraging social media for effective marketing in the
                workplace by John Lescott
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
