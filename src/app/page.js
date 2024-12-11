'use client'
import ProductCard from "@/components/ProductCard/ProductCard";
import ProductSwiper from "@/components/Swiper/ProductSwiper";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import { useEffect, useRef } from "react";
import AdvantageCard from "@/components/AdvantagesCard/AdvantageCard";
import TestimonialCard from "@/components/TestimonailCard/TestimonialCard";
import Faqs from "@/components/Faqs/Faqs";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook, FaTiktok, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";

export default function Home() {
  const swiperRef = useRef(null);

  return (
    <>
      <section className="relative w-screen ">
        <Marquee speed={100}>
          <h3 className="text-black text-[22px] font-semibold">Free shipping on U.S. orders over $50 ⭐ 10% discount on orders over $100 ⭐ Bulk orders (10+) qualify for a corporate discount.</h3>
        </Marquee>
        <div className="w-full ">
          <ProductSwiper />
        </div>
        <div className="w-full p-4 flex gap-10 justify-center">
          <img src="/images/client/client-1.jpg" alt="" className="w-[200px] h-[100px]" />
          <img src="/images/client/client-2.jpg" alt="" className="w-[200px] h-[100px]" />
          <img src="/images/client/client-3.jpg" alt="" className="w-[200px] h-[100px]" />
          <img src="/images/client/client-4.jpg" alt="" className="w-[200px] h-[100px]" />
          <img src="/images/client/client-5.jpg" alt="" className="w-[200px] h-[100px]" />
          <img src="/images/client/client-6.jpg" alt="" className="w-[200px] h-[100px]" />
        </div>
        <div className="w-[80%] mt-4 m-auto">
          <div className="flex justify-between items-center border border-t-0 border-l-0 border-r-0 border-b-2">
            <h1 className="text-black text-[32px] font-bold">Best Sellers</h1>
            <h3 className="underline cursor-pointer">View More</h3>
          </div>
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={4}
            slidesPerGroup={2}          // Move by 2 items at a time
            pagination={{ clickable: true }}
            className="mySwiper"
            ref={swiperRef}
          >
            <SwiperSlide>
              <ProductCard />
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
              <ProductCard />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-[80%] mt-4 m-auto mb-12">
          <div className="flex justify-between items-center border border-t-0 border-l-0 border-r-0 border-b-2">
            <h1 className="text-black text-[32px] font-bold">Popular Collections</h1>
          </div>
          <div className="flex mt-4 justify-center gap-2">
            <div className="relative rounded-xl cursor-pointer border w-[45%] h-[60vh]" style={{
              backgroundImage: "url('/images/collections/collection1.webp')",
              backgroundSize: 'cover',       // Ensures the image covers the entire div
              backgroundPosition: 'center',  // Centers the image
              backgroundRepeat: 'no-repeat', // Prevents the image from repeating
              transition: 'transform 0.3s ease', // Smooth transition for the scale effect
            }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'} // Scale up on hover
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} // Reset scale when mouse leaves
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>

              <h2 className="absolute bottom-6 left-8 text-white text-4xl font-bold">Arctic Wiper</h2>
            </div>
            <div className="w-[50%]">
              <div className="flex h-[47%] gap-2 justify-center">
                <div
                  className="w-[50%] border relative rounded-xl overflow-hidden cursor-pointer"
                  style={{
                    backgroundImage: "url('/images/collections/collection2.jpg')",
                    backgroundSize: 'cover',       // Ensures the image covers the entire div
                    backgroundPosition: 'center',  // Centers the image
                    backgroundRepeat: 'no-repeat', // Prevents the image from repeating
                    transition: 'transform 0.3s ease', // Smooth transition for the scale effect
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'} // Scale up on hover
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} // Reset scale when mouse leaves
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>

                  {/* Text */}
                  <h2 className="absolute bottom-6 left-8 text-white text-4xl font-bold">Winter Gloves</h2>
                </div>
                <div
                  className="w-[50%] border relative rounded-xl overflow-hidden cursor-pointer"
                  style={{
                    backgroundImage: "url('/images/collections/collection3.jpg')",
                    backgroundSize: 'cover',       // Ensures the image covers the entire div
                    backgroundPosition: 'center',  // Centers the image
                    backgroundRepeat: 'no-repeat', // Prevents the image from repeating
                    transition: 'transform 0.3s ease', // Smooth transition for the scale effect
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'} // Scale up on hover
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} // Reset scale when mouse leaves
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>

                  {/* Text */}
                  <h2 className="absolute bottom-6 left-8 text-white text-4xl font-bold">Ice Scrapers</h2>
                </div>
              </div>
              <div className="h-[50%] mt-4  border relative rounded-xl cursor-pointer" style={{
                backgroundImage: "url('/images/collections/collection4.jpg')",
                backgroundSize: 'cover',       // Ensures the image covers the entire div
                backgroundPosition: 'center',  // Centers the image
                backgroundRepeat: 'no-repeat', // Prevents the image from repeating
                transition: 'transform 0.3s ease', // Smooth transition for the scale effect
              }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'} // Scale up on hover
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} // Reset scale when mouse leaves
              >

                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>

                <h2 className="absolute bottom-6 left-8 text-white text-4xl font-bold">Merchandise</h2>
              </div>


            </div>
          </div>
        </div>
        <div className=" bg-black  w-screen p-6">
          <div className="flex justify-center flex-col items-center mt-4">
            <h3 className=" p-2 font-roboto text-[22px] text-[#14ff72cb]">OUR PRODUCTS ARE</h3>
            <h2 className="text-white font-bold text-[38px] p-1">ARCTIC SHIELD IS HERE TO PROTECT YOUR VEHICLE.</h2>
            <div className="flex justify-center gap-6 w-[80%] m-auto mt-6 mb-4">
              <AdvantageCard title={"Easy to Use"} description={"Arctic Shield Covers are designed for quick and effortless use, taking less than two seconds to slip onto your wipers. This fast and easy application ensures your windshield is protected in no time, enhancing convenience."} image={"/images/utils/icon-1.png"} />
              <AdvantageCard title={"Save Time and Money"} description={"Our wiper covers are simple, cost-effective, and time-saving, removing the need to wait for the defroster. They provide an affordable, efficient solution that enhances convenience and keeps your windshield clear in any weather."} image={"/images/utils/icon-2.png"} />
              <AdvantageCard title={"Durable Waterproof PVC"} description={"Crafted from durable, stretchable, and waterproof PVC fabric, this material offers exceptional strength, flexibility, and resistance to harsh conditions, making it perfect for various outdoor and high-performance applications."} image={"/images/utils/icon-3.png"} />
              <AdvantageCard title={"Easy to Store"} description={"Arctic Shield Wiper Covers are compact and easy to store, available in various sizes to fit all vehicle types, including SUVs, sports cars, trucks, and cars, providing versatile protection and convenience for every driver."} image={"/images/utils/icon-4.png"} />
            </div>
          </div>
        </div>
        <div className="p-6 w-screen testimonials bg-[black]">
          <div className="flex justify-center flex-col items-center ">
            <h3 className=" p-2 font-roboto text-[22px] text-[#14ff72cb]">Testimonials</h3>
            <h2 className="text-white font-bold text-[38px] p-1">From those people who used Arctic Shield
              for their cars.</h2>
            <div className="flex justify-center gap-6 w-[60%] m-auto mt-6 mb-4">
              <Swiper

                spaceBetween={30}
                slidesPerView={3}

                slidesPerGroup={2}
                ref={swiperRef}
              >
                <SwiperSlide>
                  <TestimonialCard />
                </SwiperSlide>
                <SwiperSlide>
                  <TestimonialCard />
                </SwiperSlide>
                <SwiperSlide>
                  <TestimonialCard />
                </SwiperSlide>
                <SwiperSlide>
                  <TestimonialCard />
                </SwiperSlide>
                <SwiperSlide>
                  <TestimonialCard />
                </SwiperSlide>
              </Swiper>

            </div>
          </div>
        </div>
        <div className="parallel-x">
          <div className="parallex-inner">
            <h3 className=" font-salvatoro font-bold text-[46px] w-[40%] text-center text-white">Here Shall You See, No Enemy, Except for Winter and Harsh Weather.</h3>
            <p className="text-lg font-roboto mt-2 text-white">Arctic Shield is the answer to all your winter problems.</p>
            <div className="mt-4">
              <a href="#" className="btn-watch btn-white btn-animate">Watch Video</a>
            </div>
          </div>
        </div>
        <div className="w-[80%] m-auto mb-16">
          <div className="mt-12">
            <h3 className="text-center text-[32px] font-salvatoro font-bold">Frequently asked questions</h3>
            <div className="mt-12 w-[60%] m-auto">
              <Faqs />
            </div>
          </div>
        </div>
        

      </section>
    </>
  );
}
