import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation , Autoplay } from "swiper";
import "swiper/css";
import Head from "next/head";
import "swiper/css/pagination";
import Image from "next/image";
import Script from "next/script";
import "swiper/css/free-mode";
import "lightbox2/dist/js/lightbox.js";

export default function Slider({ card }) {
  
  return (
  <>
  
    <Head>
        <link href="../../../node_modules/lightbox2/dist/css/lightbox.css"></link>
      </Head>
    <div className="container">
      <div className="row">
        <div className="cards">
          <div className="cardsgrid">
            <Swiper
              slidesPerView={3}
              spaceBetween={4}
             
              slidesPerGroup={1}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              autoplay={{delay:3000}}
              modules={[Autoplay, Pagination, Navigation]}
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
                  spaceBetween: 4,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 1,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 2,
                },
              }}
            >
              <SwiperSlide> <a class="example-image-link" href="http://lokeshdhakar.com/projects/lightbox2/images/image-3.jpg" data-lightbox="example-set" data-title="Click the right half of the image to move forward."><Image class="example-image" src={card} alt=""/></a></SwiperSlide>
              {/* <SwiperSlide>      <a class="example-image-link" href="http://lokeshdhakar.com/projects/lightbox2/images/image-3.jpg" data-lightbox="example-set" data-title="Click the right half of the image to move forward."><img class="example-image" src="http://lokeshdhakar.com/projects/lightbox2/images/thumb-3.jpg" alt=""/></a></SwiperSlide> */}
              {/* <SwiperSlide>      <a class="example-image-link" href="http://lokeshdhakar.com/projects/lightbox2/images/image-3.jpg" data-lightbox="example-set" data-title="Click the right half of the image to move forward."><img class="example-image" src="http://lokeshdhakar.com/projects/lightbox2/images/thumb-3.jpg" alt=""/></a></SwiperSlide> */}
              {/* <SwiperSlide>      <a class="example-image-link" href="http://lokeshdhakar.com/projects/lightbox2/images/image-3.jpg" data-lightbox="example-set" data-title="Click the right half of the image to move forward."><img class="example-image" src="http://lokeshdhakar.com/projects/lightbox2/images/thumb-3.jpg" alt=""/></a></SwiperSlide> */}
              {/* <SwiperSlide>{card}</SwiperSlide>{" "}
              <SwiperSlide>{card}</SwiperSlide>{" "}
              <SwiperSlide>{card}</SwiperSlide>{" "}
              <SwiperSlide>{card}</SwiperSlide>
              <SwiperSlide>{card}</SwiperSlide> */}

              <h3>A Four Image Set</h3>
   
            </Swiper>
            {/* <div>
      <a class="example-image-link" href="http://lokeshdhakar.com/projects/lightbox2/images/image-4.jpg" data-lightbox="example-set" data-title="Or press the right arrow on your keyboard."><img class="example-image" src="http://lokeshdhakar.com/projects/lightbox2/images/thumb-4.jpg" alt="" /></a>
      <a class="example-image-link" href="http://lokeshdhakar.com/projects/lightbox2/images/image-5.jpg" data-lightbox="example-set" data-title="The next image in the set is preloaded as you're viewing."><img class="example-image" src="http://lokeshdhakar.com/projects/lightbox2/images/thumb-5.jpg" alt="" /></a>
      <a class="example-image-link" href="http://lokeshdhakar.com/projects/lightbox2/images/image-6.jpg" data-lightbox="example-set" data-title="Click anywhere outside the image or the X to the right to close."><img class="example-image" src="http://lokeshdhakar.com/projects/lightbox2/images/thumb-6.jpg" alt="" /></a>
    </div> */}
          </div>
        </div>
      </div>
    </div>
          <Script src="lightbox2/dist/js/lightbox.js"></Script>
          </>
  );
}
