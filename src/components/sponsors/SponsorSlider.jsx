// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import slider1 from "../../../public/slider/slider1.jpg";
import slider2 from "../../../public/slider/slider2.jpg";
import slider3 from "../../../public/slider/slider3.jpg";
import slider4 from "../../../public/slider/slider4.jpg";
import slider5 from "../../../public/slider/slider5.jpeg";
import slider6 from "../../../public/slider/slider6.jpeg";
import slider7 from "../../../public/slider/slider7.jpeg";

export default function SponsorSlider() {
  const sampleImages = [
    {
      id: 1,
      url: slider3,
    },
    {
      id: 2,
      url: slider5,
    },
    {
      id: 3,
      url: slider6,
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
