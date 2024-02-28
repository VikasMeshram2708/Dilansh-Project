export default function About() {
  return (
    <section>
      <div>
        <h1 className="sm:text-5xl font-semibold">About</h1>
        <p className="text-[1.3rem] mt-5 text-justify">
          The Institute of Chinese Studies, Delhi (ICS) is one of the oldest research institutions on China and East Asia in India. With support from the Ministry of External Affairs, Government of India, it is the mandate of the ICS to develop a strategic vision for India’s dealings with China and to help adapt India’s priorities quickly and appropriately to address the research and educational demands arising from China’s emergence.
        </p>
        <p className="text-[1.3rem] mt-5 text-justify">
          The ICS seeks to promote interdisciplinary study and research on China and the rest of East Asia with a focus on expertise in China’s domestic politics, international relations, economy, history, health, education, border studies, language and culture, and on India-China comparative studies. It also looks to fostering active links with business, media, government and non-governmental organizations in India through applied research, executive training programmes, and seminars and conferences, and to serve as a repository of knowledge and data grounded in first-hand research on Chinese politics, economy, international relations, society and culture.
        </p>
      </div>

      {/* Event Section */}
      <div className="bg-black text-white rounded p-2 my-10">
        <h1 className="font-Poppins text-[1.2rem]">Timeline of Events will be posted soon!</h1>
        {/* {dateLinks?.map((item) => {
          return (
            <div key={item?.id} className="bgRed rounded-md">
              <h1 className="text-white sm:text-[1.3rem] font-semibold text-center p-2">{item?.title}</h1>
            </div>
          );
        })} */}
      </div>
    </section>
  );
}
