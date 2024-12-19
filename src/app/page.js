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
import { useRef } from "react";
import AdvantageCard from "@/components/AdvantagesCard/AdvantageCard";
import TestimonialCard from "@/components/TestimonailCard/TestimonialCard";
import Faqs from "@/components/Faqs/Faqs";
import ProductMainSwiper from "@/components/ProductMainSwiper/ProductMainSwiper";
const data = [
  {
    "title": "Windshield Wiper Covers",
    "actual_price": 199.99,
    "discounted_price": 149.99,
    "description": "Enjoy immersive sound with active noise canceling. Lightweight and comfortable design for all-day wear.",
    "category": "Wiper",
    "image": "/images/products/wiper1.jpg"
  },
  {
    "title": "Winter Gloves",
    "actual_price": 299.99,
    "discounted_price": 249.99,
    "description": "Stay comfortable during long work hours. Adjustable height and lumbar support for better posture.",
    "category": "Gloves",
    "image": "/images/products/gloves1.png"
  },
  {
    "title": "Windshield Wiper Covers",
    "actual_price": 99.99,
    "discounted_price": 79.99,
    "description": "Track your steps, heart rate, and sleep quality. Waterproof design for everyday use.",
    "category": "Wiper",
    "image": "/images/products/wiper2.jpg"
  },
  {
    "title": "Winter Gloves",
    "actual_price": 89.99,
    "discounted_price": 69.99,
    "description": "Soft and breathable organic cotton sheets. Available in various sizes and colors.",
    "category": "Gloves",
    "image": "/images/products/gloves2.png"
  },
  {
    "title": "Windshield Wiper Covers",
    "actual_price": 149.99,
    "discounted_price": 119.99,
    "description": "Durable and even-heating cookware for home chefs. Compatible with all stovetops, including induction.",
    "category": "Wiper",
    "image": "/images/products/wiper3.jpg"
  },
  {
    "title": "Winter Gloves",
    "actual_price": 699.99,
    "discounted_price": 549.99,
    "description": "Crisp 4K resolution with streaming app support. Slim design fits any living space.",
    "category": "Gloves",
    "image": "/images/products/gloves3.png"
  },
  {
    "title": "Windshield Wiper Covers",
    "actual_price": 399.99,
    "discounted_price": 349.99,
    "description": "Brew barista-quality espresso at home. Easy to use and clean with multiple settings.",
    "category": "Wiper",
    "image": "/images/products/wiper4.jpg"
  },
  {
    "title": "Winter Gloves",
    "actual_price": 59.99,
    "discounted_price": 39.99,
    "description": "Compact design with powerful sound. Long battery life for outdoor activities.",
    "category": "Gloves",
    "image": "/images/products/gloves4.png"
  },
  {
    "title": "Winter Ice Scraper",
    "actual_price": 79.99,
    "discounted_price": 59.99,
    "description": "Soft, absorbent, and perfect for lounging. Available in various colors and sizes.",
    "category": "Ice Scraper",
    "image": "/images/products/ice1.png"
  },
  {
    "title": "Winter Ice Scraper",
    "actual_price": 199.99,
    "discounted_price": 159.99,
    "description": "Save space with adjustable weights. Ideal for home fitness routines.",
    "category": "Ice Scraper",
    "image": "/images/products/ice2.jpg"
  },
  {
    "title": "Winter Ice Scraper",
    "actual_price": 1299.99,
    "discounted_price": 1099.99,
    "description": "High-performance laptop for gaming and work. Features the latest GPU and fast refresh rate.",
    "category": "Ice Scraper",
    "image": "/images/products/ice3.webp"
  },
  {
    "title": "Winter Ice Scraper",
    "actual_price": 39.99,
    "discounted_price": 29.99,
    "description": "Lightweight and foldable for easy storage. Non-slip surface for stability during practice.",
    "category": "Ice Scraper",
    "image": "/images/products/ice5.jpg"
  },
  {
    "title": "T-Shirt For Men",
    "actual_price": 159.99,
    "discounted_price": 129.99,
    "description": "Stylish and functional for work or travel. Made from premium leather with ample storage.",
    "category": "Merchandise",
    "image": "/images/products/shirt1.png"
  },
  {
    "title": "T-Shirt For Men",
    "actual_price": 499.99,
    "discounted_price": 399.99,
    "description": "Adjustable height for sitting or standing. Sturdy design with smooth electric operation.",
    "category": "Merchandise",
    "image": "/images/products/shirt2.webp"
  },
  {
    "title": "T-Shirt For Men",
    "actual_price": 79.99,
    "discounted_price": 59.99,
    "description": "Sharp and lightweight ceramic blades. Includes various sizes for all your kitchen needs.",
    "category": "Merchandise",
    "image": "/images/products/shirt3.png"
  },
  {
    "title": "T-Shirt For Men",
    "actual_price": 999.99,
    "discounted_price": 849.99,
    "description": "Capture stunning photos with advanced features. Ideal for professionals and hobbyists.",
    "category": "Merchandise",
    "image": "/images/products/shirt4.png"
  }
]

export default function Home() {
  const swiperRef = useRef(null);

  return (
    <>
      <section className="relative w-screen ">
        <Marquee speed={100}>
          <h3 className="text-black xs:text-[18px] lg:text-[22px] font-semibold bg-white">Free shipping on U.S. orders over $50 ⭐ 10% discount on orders over $100 ⭐ Bulk orders (10+) qualify for a corporate discount.</h3>
        </Marquee>
        <div className="">
          <ProductMainSwiper />
        </div>
        <div className="w-full xs:p-2 lg:p-4 flex xs:gap-2 lg:gap-10 justify-center overflow-x-auto">
          <img src="/images/client/client-1.jpg" alt="" className="xs:w-[100px] md:w-[130px]  lg:w-[200px] xs:h-[50px] lg:h-[100px]" />
          <img src="/images/client/client-2.jpg" alt="" className="xs:w-[100px] md:w-[130px]  lg:w-[200px]  xs:h-[50px] lg:h-[100px]" />
          <img src="/images/client/client-3.jpg" alt="" className="xs:w-[100px] md:w-[130px] lg:w-[200px]  xs:h-[50px] lg:h-[100px]" />
          <img src="/images/client/client-4.jpg" alt="" className="xs:w-[100px] md:w-[130px] lg:w-[200px] xs:h-[50px] lg:h-[100px]" />
          <img src="/images/client/client-5.jpg" alt="" className="xs:w-[100px] md:w-[130px] lg:w-[200px]  xs:h-[50px] lg:h-[100px]" />
          <img src="/images/client/client-6.jpg" alt="" className="xs:w-[100px] md:w-[130px] lg:w-[200px]  xs:h-[50px] lg:h-[100px]" />
        </div>
        <div className="xs:w-[98%] lg:w-[80%] mt-4 m-auto bg-white">
          <div className="flex justify-between items-center border border-t-0 border-l-0 border-r-0 border-b-2">
            <h1 className="text-black xs:text-[26px] lg:text-[32px] font-bold">Best Sellers</h1>
            <h3 className="underline cursor-pointer">View More</h3>
          </div>
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={4}
            slidesPerGroup={2}
            pagination={{ clickable: true }}
            className="mySwiper"
            ref={swiperRef}
            breakpoints={{
              1800: {
                slidesPerView: 4,
                slidesPerGroup: 2,
                spaceBetween: 30,
              },
              1440: {
                slidesPerView: 3,
                slidesPerGroup: 2,
                spaceBetween: 30,
              },
              1300: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 30,
              },
              // When the screen width is 1024px or more (large tablets and up)
              1024: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 30,
              },
              // When the screen width is 768px or more (tablets and up)
              768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 20,
              },
              // When the screen width is 480px or more (phones in landscape and larger)
              480: {
                slidesPerView: 2,
                slidesPerGroup: 1,
                spaceBetween: 10,
              },
              // When the screen width is less than 480px (phones in portrait)
              320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 10,
              }
            }}
          >
            <SwiperSlide>
              <ProductCard item={data[0]} />
              <ProductCard item={data[1]} />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard item={data[2]} />
              <ProductCard item={data[3]} />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard item={data[4]} />
              <ProductCard item={data[5]} />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard item={data[14]} />
              <ProductCard item={data[7]} />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard item={data[8]} />
              <ProductCard item={data[9]} />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard item={data[10]} />
              <ProductCard item={data[11]} />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-full">
          <img src="/images/Discount-banner-1.jpg" alt="" className="object-cover w-full"/>
        </div>
        <div className="xs:[80%] lg:w-[80%] mt-4 m-auto mb-12">
          <div className="flex justify-between items-center border border-t-0 border-l-0 border-r-0 border-b-2">
            <h1 className="text-black xs:text-[22px] lg:text-[32px] font-bold">Popular Collections</h1>
          </div>
          <div className="flex xs:flex-col lg:flex-row mt-4 justify-center gap-2">
            <div className="relative rounded-xl cursor-pointer border xs:w-[100%] lg:w-[45%] xs:h-[40vh] lg:h-[60vh]" style={{
              backgroundImage: "url('/images/collections/collection1.webp')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              transition: 'transform 0.3s ease',
            }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>

              <h2 className="absolute bottom-6 xs:left-4 lg:left-8 text-white xs:text-2xl xl:text-4xl font-bold ">Winter Wiper Covers</h2>
            </div>
            <div className="xs:w-[100%] lg:w-[50%]">
              <div className="flex xs:h-[40vh] lg:h-[47%] gap-2 justify-center">
                <div
                  className="w-[50%] border relative rounded-xl overflow-hidden cursor-pointer"
                  style={{
                    backgroundImage: "url('/images/collections/collection2.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >

                  <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>


                  <h2 className="absolute bottom-6 xs:left-4 lg:left-8 text-white xs:text-2xl xl:text-4xl font-bold">Winter Gloves</h2>
                </div>
                <div
                  className="w-[50%] border relative rounded-xl overflow-hidden cursor-pointer"
                  style={{
                    backgroundImage: "url('/images/collections/collection3.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >

                  <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>


                  <h2 className="absolute bottom-6 xs:left-4 lg:left-8 text-white xs:text-2xl xl:text-4xl font-bold">Ice Scrapers</h2>
                </div>
              </div>
              <div className=" xs:h-[40vh] lg:h-[50%] mt-4  border relative rounded-xl cursor-pointer" style={{
                backgroundImage: "url('/images/collections/collection4.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                transition: 'transform 0.3s ease',
              }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >

                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>

                <h2 className="absolute bottom-6 xs:left-4 lg:left-8 text-white xs:text-2xl xl:text-4xl font-bold">Merchandise</h2>
              </div>


            </div>
          </div>
        </div>
        <div className="bg-black w-screen p-6">
          <div className="flex justify-center flex-col items-center mt-4">
            <h3 className="p-2 font-roboto text-[22px] text-[#0089da]">OUR PRODUCTS ARE</h3>
            <h2 className="text-white font-bold xs:text-[24px] lg:text-[38px] p-1 xs:text-center lg:text-left">ARCTIC SHIELD IS HERE TO PROTECT YOUR VEHICLE.</h2>
            <div className="flex justify-center xs:gap-4 lg:gap-6 xs:w-[90%] lg:w-[80%] m-auto mt-6 mb-4 flex-wrap">
              <AdvantageCard title={"Easy to Use"} description={"Arctic Shield Covers are designed for quick and effortless use, taking less than two seconds to slip onto your wipers. This fast and easy application ensures your windshield is protected in no time, enhancing convenience."} image={"/images/utils/icon-1.png"} />
              <AdvantageCard title={"Save Time and Money"} description={"Our wiper covers are simple, cost-effective, and time-saving, removing the need to wait for the defroster. They provide an affordable, efficient solution that enhances convenience and keeps your windshield clear in any weather."} image={"/images/utils/icon-2.png"} />
              <AdvantageCard title={"Durable Waterproof PVC"} description={"Crafted from durable, stretchable, and waterproof PVC fabric, this material offers exceptional strength, flexibility, and resistance to harsh conditions, making it perfect for various outdoor and high-performance applications."} image={"/images/utils/icon-3.png"} />
              <AdvantageCard title={"Easy to Store"} description={"Arctic Shield Wiper Covers are compact and easy to store, available in various sizes to fit all vehicle types, including SUVs, sports cars, trucks, and cars, providing versatile protection and convenience for every driver."} image={"/images/utils/icon-4.png"} />
            </div>
          </div>
        </div>
        <div className="p-6 w-screen testimonials bg-[black]">
          <div className="flex justify-center flex-col items-center ">
            <h3 className=" p-2 font-roboto text-[22px] text-[#0089da]">Testimonials</h3>
            <h2 className="text-white font-bold xs:text-[24px] lg:text-[38px] p-1 xs:text-center lg:text-left">From those people who used Arctic Shield
              for their cars.</h2>
            <div className="flex justify-center gap-6 xs:w-[90%]  lg:w-[60%] m-auto mt-6 mb-4">
              <Swiper

                spaceBetween={30}
                slidesPerView={3}

                slidesPerGroup={2}
                ref={swiperRef}
                breakpoints={{
                  // When the screen width is 1024px or more (large tablets and up)
                  1024: {
                    slidesPerView: 3,
                    slidesPerGroup: 2,
                    spaceBetween: 30,
                  },
                  // When the screen width is 768px or more (tablets and up)
                  768: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 20,
                  },
                  // When the screen width is 480px or more (phones in landscape and larger)
                  480: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 10,
                  },
                  // When the screen width is less than 480px (phones in portrait)
                  320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 10,
                  }
                }}
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
            <h3 className=" font-salvatoro font-bold xs:text-[24px] lg:text-[46px] xs:w-[90%] lg:w-[40%] text-center text-white">Here Shall You See, No Enemy, Except for Winter and Harsh Weather.</h3>
            <p className="text-lg font-roboto mt-2 text-white xs:text-center lg:text-left">Arctic Shield is the answer to all your winter problems.</p>
            <div className="mt-4">
              <a href="#" className="btn-watch btn-white btn-animate">Watch Video</a>
            </div>
          </div>
        </div>
        <div className="xs:w-[90%] lg:w-[80%] m-auto mb-16">
          <div className="mt-12">
            <h3 className="text-center text-[32px] font-salvatoro font-bold text-black">Frequently asked questions</h3>
            <div className="mt-12 xs:w-[100%] lg:w-[60%] m-auto">
              <Faqs />
            </div>
          </div>
        </div>


      </section>
    </>
  );
}
