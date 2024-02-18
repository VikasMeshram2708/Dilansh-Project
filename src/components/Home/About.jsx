export default function About() {
  const dateLinks = [
    {
      id: 1,
      title: "7 Nov 2024",
    },
    {
      id: 2,
      title: "8 Nov 2024",
    },
    {
      id: 3,
      title: "9 Nov 2024",
    },
  ];
  return (
    <section>
      <div>
        <h1 className="sm:text-5xl font-semibold">About</h1>
        <p className="text-[1.3rem] mt-5 text-justify">
          The MA program in Geopolitics and International Relations has a
          comprehensive curriculum mainly dealing with the major Geopolitical
          regions of the world and how India makes responses through its foreign
          policy choices. The curriculum also combines and compliments
          technology with strategy.
        </p>
        <p className="text-[1.3rem] mt-5 text-justify">
          Students get a holistic understanding of the ongoing international
          security discourse. The benefits are seen mainly in terms of getting a
          quality education, comprehensive exposure and the freedom to choose
          the area of research interests. The Department organizes special
          sessions with the experts for a better understanding of the subject.
          It also encourages, motivates and orients the young minds so that
          India has a critical mass of strategic analysts and that helps in
          evolving India’s perspectives on the contemporary world geopolitical
          environment.
        </p>
      </div>

      {/* Event Section */}
      <div className="mt-10 grid sm:grid-cols-3 gap-1">
        {dateLinks?.map((item) => {
          return (
            <div key={item?.id} className="bgRed rounded-md">
              <h1 className="text-white sm:text-[1.3rem] font-semibold text-center p-2">{item?.title}</h1>
            </div>
          );
        })}
      </div>
    </section>
  );
}
