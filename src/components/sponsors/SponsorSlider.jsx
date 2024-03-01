// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import slider3 from "../../../public/slider/slider3.jpg";
import slider7 from "../../../public/slider/slider7.jpeg";
import slider8 from "../../../public/slider/slider8.jpeg";
import slider9 from "../../../public/slider/slider9.jpeg";

export default function SponsorSlider() {
  const sampleImages = [
    {
      id: 1,
      url: slider3,
    },
    {
      id: 2,
      url: slider8,
    },
    {
      id: 3,
      url: slider9,
    },
    {
      id: 4,
      url: slider7,
    },
  ];
  return (
    <section>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {sampleImages?.map((item) => {
          return (
            <SwiperSlide key={item?.id}>
              <img
                className="w-full sm:h-[40rem] rounded-xl bg-contain"
                src={item?.url}
                alt=""
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
