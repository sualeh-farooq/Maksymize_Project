import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
export default function Slider({ card }) {
  return (
    <div className="container">
      <div className="row">
        <div className="cards">
          <div className="cardsgrid">
            <Swiper
              slidesPerView={1}
              spaceBetween={2}
              autoplay={3000}
              slidesPerGroup={1}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 1,
                },
                375: {
                  slidesPerView: 1,
                  spaceBetween: 1,
                },
                425: {
                  slidesPerView: 1,
                  spaceBetween: 1,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 1,
                },
              }}
            >
              <SwiperSlide>{card}</SwiperSlide>
              <SwiperSlide>{card}</SwiperSlide>{" "}
              <SwiperSlide>{card}</SwiperSlide>{" "}
              <SwiperSlide>{card}</SwiperSlide>{" "}
              <SwiperSlide>{card}</SwiperSlide>
              <SwiperSlide>{card}</SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
