import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import Head from "next/head";
import "swiper/css/pagination";
import Image from "next/image";
import Script from "next/script";
import "swiper/css/free-mode";
// import "lightbox2/dist/js/lightbox.js";
import JonahImg from "../../../public/assets/jonah.jpg";
import JoshImg from "../../../public/assets/josh.png";
import DanielImg from "../../../public/assets/daniel.png";
import DaylanImg from "../../../public/assets/daylan.png";
import EricImg from "../../../public/assets/eric.png";
import MaxImg from "../../../public/assets/max.png";
import Review_Card from "../cards";
import { useState } from "react";

export default function Slider({ card }) {
  const [Daniel, setDaniel] = useState(false);
  const [Josh, setJosh] = useState(false);
  const [Eric, setEric] = useState(false);
  const [Daylan, setDaylan] = useState(false);
  const [Jonah, setJonah] = useState(false);
  const [Max, setMax] = useState(false);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="cards">
            <div className="cardsgrid">
              <Swiper
                slidesPerView={2}
                spaceBetween={6}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                autoplay={{ delay: 3000 }}
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
                <SwiperSlide>
                  <div class="w-full rounded-lg p-2 bg-white border-2 overflow-hidden ">
                    <Image
                      className="w-full h-full cursor-pointer"
                      src={DanielImg}
                      alt="Review"
                      onClick={() => setDaniel(true)}
                    />
                  </div>
                </SwiperSlide>

                {Daniel ? (
                  <>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                      <div
                        className="fixed inset-0 w-full h-full bg-black opacity-40"
                        onClick={() => setDaniel(false)}
                      ></div>
                      <div className="flex items-center min-h-screen px-4 py-8">
                        <div className="relative w-full max-w-lg p-4 mx-auto bg-transparent rounded-md">
                          <div className="mt-3 sm:flex">
                            <div>
                              <iframe
                               
                                width="480"
                                className="vid-iframe "
                                height="325"
                                src="https://www.youtube.com/embed/MefQsmrwlcU"
                                title="Why EPCs Don&#39;t Want To Work With NEW Solar Reps"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen
                              ></iframe>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : null}

                <SwiperSlide>
                  <div class="w-full rounded-lg p-2 bg-white border-2 overflow-hidden ">
                    <Image
                      className="w-full h-full cursor-pointer"
                      src={JoshImg}
                      alt="Review"
                      onClick={() => setJosh(true)}
                    />
                  </div>
                </SwiperSlide>

                {Josh ? (
                  <>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                      <div
                        className="fixed inset-0 w-full h-full bg-black opacity-40"
                        onClick={() => setJosh(false)}
                      ></div>
                      <div className="flex items-center min-h-screen px-4 py-8">
                        <div className="relative w-full max-w-lg p-4 mx-auto bg-transparent rounded-md">
                          <div className="mt-3 sm:flex">
                            <div>
                              <iframe
                               
                                width="480"
                                className="vid-iframe "
                                height="325"
                                src="https://www.youtube.com/embed/MefQsmrwlcU"
                                title="Why EPCs Don&#39;t Want To Work With NEW Solar Reps"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen
                              ></iframe>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : null}

                <SwiperSlide>
                  <div class="w-full rounded-lg p-2 bg-white border-2 overflow-hidden ">
                    <Image
                      className="w-full h-full cursor-pointer"
                      src={EricImg}
                      alt="Review"
                      onClick={() => setEric(true)}
                    />
                  </div>
                </SwiperSlide>
                {Eric ? (
                  <>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                      <div
                        className="fixed inset-0 w-full h-full bg-black opacity-40"
                        onClick={() => setEric(false)}
                      ></div>
                      <div className="flex items-center min-h-screen px-4 py-8">
                        <div className="relative w-full max-w-lg p-4 mx-auto bg-transparent rounded-md">
                          <div className="mt-3 sm:flex">
                            <div>
                              <iframe
                               
                                width="480"
                                className="vid-iframe "
                                height="325"
                                src="https://www.youtube.com/embed/MefQsmrwlcU"
                                title="Why EPCs Don&#39;t Want To Work With NEW Solar Reps"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen
                              ></iframe>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : null}
                <SwiperSlide>
                  <div class="w-full rounded-lg p-2 bg-white border-2 overflow-hidden ">
                    <Image
                      className="w-full h-full cursor-pointer"
                      src={DaylanImg}
                      alt="Review"
                      onClick={() => setDaylan(true)}
                    />
                  </div>
                </SwiperSlide>

                {Daylan ? (
                  <>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                      <div
                        className="fixed inset-0 w-full h-full bg-black opacity-40"
                        onClick={() => setDaylan(false)}
                      ></div>
                      <div className="flex items-center min-h-screen px-4 py-8">
                        <div className="relative w-full max-w-lg p-4 mx-auto bg-transparent rounded-md">
                          <div className="mt-3 sm:flex">
                            <div>
                              <iframe
                               
                                width="480"
                                className="vid-iframe "
                                height="325"
                                src="https://www.youtube.com/embed/MefQsmrwlcU"
                                title="Why EPCs Don&#39;t Want To Work With NEW Solar Reps"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen
                              ></iframe>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : null}
                <SwiperSlide>
                  <div class="w-full rounded-lg p-2 bg-white border-2 overflow-hidden ">
                    <Image
                      className="w-full h-full cursor-pointer"
                      src={JonahImg}
                      alt="Review"
                      onClick={() => setJonah(true)}
                    />
                  </div>
                </SwiperSlide>
                {Jonah ? (
                  <>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                      <div
                        className="fixed inset-0 w-full h-full bg-black opacity-40"
                        onClick={() => setJonah(false)}
                      ></div>
                      <div className="flex items-center min-h-screen px-4 py-8">
                        <div className="relative w-full max-w-lg p-4 mx-auto bg-transparent rounded-md">
                          <div className="mt-3 sm:flex">
                            <div>
                              <iframe
                               
                                width="480"
                                className="vid-iframe "
                                height="325"
                                src="https://www.youtube.com/embed/MefQsmrwlcU"
                                title="Why EPCs Don&#39;t Want To Work With NEW Solar Reps"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen
                              ></iframe>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : null}
                <SwiperSlide>
                  <div class="w-full rounded-lg p-2 bg-white border-2 overflow-hidden ">
                    <Image
                      className="w-full h-full cursor-pointer"
                      src={MaxImg}
                      alt="Review"
                      onClick={() => setMax(true)}
                    />
                  </div>
                </SwiperSlide>
                {Max ? (
                  <>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                      <div
                        className="fixed inset-0 w-full h-full bg-black opacity-40"
                        onClick={() => setMax(false)}
                      ></div>
                      <div className="flex items-center min-h-screen px-4 py-8">
                        <div className="relative w-full max-w-lg p-4 mx-auto bg-transparent rounded-md">
                          <div className="mt-3 sm:flex">
                            <div>
                              <iframe
                               
                                width="480"
                                className="vid-iframe "
                                height="325"
                                src="https://www.youtube.com/embed/MefQsmrwlcU"
                                title="Why EPCs Don&#39;t Want To Work With NEW Solar Reps"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen
                              ></iframe>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : null}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
