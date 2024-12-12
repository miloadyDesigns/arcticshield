'use client';
import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./style.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { createListCollection } from "@chakra-ui/react"
import {
    SelectContent,
    SelectItem,
    SelectLabel,
    SelectRoot,
    SelectTrigger,
    SelectValueText,
} from "@/components/ui/select"
import { Pagination, Navigation } from 'swiper/modules';

const Page = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    useEffect(() => {
        // Trigger re-render after refs are set
        if (prevRef.current && nextRef.current) {
            const swiperElement = document.querySelector('.swiper');
            swiperElement.swiper.params.navigation.prevEl = prevRef.current;
            swiperElement.swiper.params.navigation.nextEl = nextRef.current;
            swiperElement.swiper.navigation.init();
            swiperElement.swiper.navigation.update();
        }
    }, []);

    return (
        <div className="relative">
            <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                loop
            >
                <SwiperSlide>
                    <div
                        className="w-screen h-[80vh] relative slide"
                        style={{
                            background: 'url("/images/wiper.gif")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-80'></div>
                        <div className='flex ml-[5%]'>
                            <div className='relative z-[100]  h-full pt-[5%] w-[50%]'>
                                <h3 className='subtitle'>Arctic Shield</h3>
                                <h3 className='title'>Winter Wiper Guards</h3>
                                <p className='description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, quis? Harum, atque fuga? Esse tempora a facilis! Ad modi, harum, minima veritatis alias laborum nemo velit vitae officia inventore sequi, excepturi rerum. Quasi laboriosam doloremque magni perferendis. Molestiae numquam nisi quam ipsum. Maxime quasi facere aliquid rem, aut deleniti esse!</p>
                                <div className='flex gap-4'>
                                    <div className='actionButton'>
                                        See More
                                    </div>
                                    <div className='actionButton'>
                                        Buy Now
                                    </div>
                                </div>
                            </div>
                            <div className='z-[100] h-full w-[50%] pt-[15%] flex justify-end'>
                                <div className='border w-[400px] h-[250px] mr-[15%] bg-white rounded-lg flex flex-col items-center '>
                                    <h1 className='text-[18px] text-center p-4  font-roboto font-semibold'>Find Your Wipers Cover</h1>
                                    <SelectRoot
                                        collection={animeMovies}
                                        size="sm"
                                        width="320px"
                                        className="m-2 border pl-3"
                                    >
                                        <SelectTrigger clearable>
                                            <SelectValueText placeholder="Make" />
                                        </SelectTrigger>
                                        <SelectContent className=''>
                                            {animeMovies.items.map((movie) => (
                                                <SelectItem item={movie} key={movie.value}>
                                                    {movie.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </SelectRoot>
                                    <SelectRoot
                                        collection={animeMovies}
                                        size="sm"
                                        width="320px"
                                        className="m-2 border pl-3"
                                    >
                                        <SelectTrigger clearable>
                                            <SelectValueText placeholder="Model" />
                                        </SelectTrigger>
                                        <SelectContent className=''>
                                            {animeMovies.items.map((movie) => (
                                                <SelectItem item={movie} key={movie.value}>
                                                    {movie.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </SelectRoot>
                                    <div className='bg-[#14ff72cb] p-3 rounded-lg mt-2 w-[80%] text-center cursor-pointer'>
                                        Search
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="w-screen h-[80vh] relative slide"
                        style={{
                            background: 'url("/images/gloves.webp")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-60'></div>
                        <div className='flex ml-[5%]'>
                            <div className='relative z-[100]  h-full pt-[8%] w-[60%]'>
                                <h3 className='subtitle'>Arctic Shield</h3>
                                <h3 className='title'>Winter Gloves</h3>
                                <p className='description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, quis? Harum, atque fuga? Esse tempora a facilis! Ad modi, harum, minima veritatis alias laborum nemo velit vitae officia inventore sequi, excepturi rerum. Quasi laboriosam doloremque magni perferendis. Molestiae numquam nisi quam ipsum. Maxime quasi facere aliquid rem, aut deleniti esse!</p>
                                <div className='flex gap-4'>
                                    <div className='actionButton'>
                                        See More
                                    </div>
                                    <div className='actionButton'>
                                        Buy Now
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="w-screen h-[80vh] relative slide"
                        style={{
                            background: 'url("/images/ice_scrapers.webp")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-60'></div>
                        <div className='flex ml-[5%]'>
                            <div className='relative z-[100]  h-full pt-[8%] w-[60%]'>
                                <h3 className='subtitle'>Arctic Shield</h3>
                                <h3 className='title'>Ice Scrapers</h3>
                                <p className='description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, quis? Harum, atque fuga? Esse tempora a facilis! Ad modi, harum, minima veritatis alias laborum nemo velit vitae officia inventore sequi, excepturi rerum. Quasi laboriosam doloremque magni perferendis. Molestiae numquam nisi quam ipsum. Maxime quasi facere aliquid rem, aut deleniti esse!</p>
                                <div className='flex gap-4'>
                                    <div className='actionButton'>
                                        See More
                                    </div>
                                    <div className='actionButton'>
                                        Buy Now
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="w-screen h-[80vh] relative slide"
                        style={{
                            background: 'url("/images/merchandise.webp")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-60'></div>
                        <div className='flex ml-[5%]'>
                            <div className='relative z-[100]  h-full pt-[8%] w-[60%]'>
                                <h3 className='subtitle'>Arctic Shield</h3>
                                <h3 className='title'>Merchandise</h3>
                                <p className='description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, quis? Harum, atque fuga? Esse tempora a facilis! Ad modi, harum, minima veritatis alias laborum nemo velit vitae officia inventore sequi, excepturi rerum. Quasi laboriosam doloremque magni perferendis. Molestiae numquam nisi quam ipsum. Maxime quasi facere aliquid rem, aut deleniti esse!</p>
                                <div className='flex gap-4'>
                                    <div className='actionButton'>
                                        See More
                                    </div>
                                    <div className='actionButton'>
                                        Buy Now
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="w-screen h-[80vh] relative slide"
                        style={{
                            background: 'url("/images/promotional.webp")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-60'></div>
                        <div className='flex ml-[5%]'>
                            <div className='relative z-[100]  h-full pt-[8%] w-[60%]'>
                                <h3 className='subtitle'>Arctic Shield</h3>
                                <h3 className='title'>Winter Clothing</h3>
                                <p className='description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, quis? Harum, atque fuga? Esse tempora a facilis! Ad modi, harum, minima veritatis alias laborum nemo velit vitae officia inventore sequi, excepturi rerum. Quasi laboriosam doloremque magni perferendis. Molestiae numquam nisi quam ipsum. Maxime quasi facere aliquid rem, aut deleniti esse!</p>
                                <div className='flex gap-4'>
                                    <div className='actionButton'>
                                        See More
                                    </div>
                                    <div className='actionButton'>
                                        Buy Now
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <button
                ref={prevRef}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 p-4 bg-black text-white z-[10]"
            >
                Prev
            </button>
            <button
                ref={nextRef}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 p-4 bg-black text-white z-[10]"
            >
                Next
            </button>
        </div>
    );
};

export default Page;
const animeMovies = createListCollection({
    items: [
        { label: "Spirited Away", value: "spirited_away" },
        { label: "My Neighbor Totoro", value: "my_neighbor_totoro" },
        { label: "Akira", value: "akira" },
        { label: "Princess Mononoke", value: "princess_mononoke" },
        { label: "Grave of the Fireflies", value: "grave_of_the_fireflies" },
        { label: "Howl's Moving Castle", value: "howls_moving_castle" },
        { label: "Ghost in the Shell", value: "ghost_in_the_shell" },
        { label: "Naruto", value: "naruto" },
        { label: "Hunter x Hunter", value: "hunter_x_hunter" },
        { label: "The Wind Rises", value: "the_wind_rises" },
        { label: "Kiki's Delivery Service", value: "kikis_delivery_service" },
        { label: "Perfect Blue", value: "perfect_blue" },
        {
            label: "The Girl Who Leapt Through Time",
            value: "the_girl_who_leapt_through_time",
        },
        { label: "Weathering with You", value: "weathering_with_you" },
        { label: "Ponyo", value: "ponyo" },
        { label: "5 Centimeters per Second", value: "5_centimeters_per_second" },
        { label: "A Silent Voice", value: "a_silent_voice" },
        { label: "Paprika", value: "paprika" },
        { label: "Wolf Children", value: "wolf_children" },
        { label: "Redline", value: "redline" },
        {
            label: "The Tale of the Princess Kaguya",
            value: "the_tale_of_the_princess_kaguya",
        },
    ],
})