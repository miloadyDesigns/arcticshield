'use client'
import React, { useRef, useState, useEffect } from 'react'
import "./style.css"
const ProductSwiper = () => {
    const carouselRef = useRef(null);
    const listRef = useRef(null);
    const runningTimeRef = useRef(null);

    const [timeRunning] = useState(3000);

    let runTimeOut = useRef(null);

    const resetTimeAnimation = () => {
        if (runningTimeRef.current) {
            runningTimeRef.current.style.animation = "none";
            runningTimeRef.current.offsetHeight; // trigger reflow
            runningTimeRef.current.style.animation = "runningTime 7s linear 1 forwards";
        }
    };

    const showSlider = (type) => {
        const list = listRef.current;
        const items = list.querySelectorAll(".item");
        const carousel = carouselRef.current;

        if (type === "next") {
            list.appendChild(items[0]);
            carousel.classList.add("next");
        } else {
            list.prepend(items[items.length - 1]);
            carousel.classList.add("prev");
        }

        clearTimeout(runTimeOut.current);
        runTimeOut.current = setTimeout(() => {
            carousel.classList.remove("next");
            carousel.classList.remove("prev");
        }, timeRunning);

        resetTimeAnimation();
    };

    const handleNextClick = () => showSlider("next");
    const handlePrevClick = () => showSlider("prev");

    useEffect(() => {
        resetTimeAnimation();
        return () => {
            clearTimeout(runTimeOut.current);
        };
    }, []);
    return (
        <div className="carousel" ref={carouselRef}>

            <div className="list" ref={listRef}>
                <div className="item" style={{ backgroundImage: `url("/images/gloves.webp")` }}>
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <div className="content">
                        <div className="title">Arctic Shield</div>
                        <div className="name">Winter Gloves</div>
                        <div className="des w-[50%]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, quis? Harum, atque fuga? Esse tempora a facilis! Ad modi, harum, minima veritatis alias laborum nemo velit vitae officia inventore sequi, excepturi rerum. Quasi laboriosam doloremque magni perferendis. Molestiae numquam nisi quam ipsum. Maxime quasi facere aliquid rem, aut deleniti esse!</div>
                        <div className="btn">
                            <button>See More</button>
                            <button>Buy Now</button>
                        </div>
                    </div>

                </div>
                <div className="item" style={{ backgroundImage: `url("/images/wiper.gif")` }}>
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <div className="content">
                        <div className="title">Arctic Shield</div>
                        <div className="name ">Winter Wiper Guards</div>
                        <div className="des w-[50%]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, quis? Harum, atque fuga? Esse tempora a facilis! Ad modi, harum, minima veritatis alias laborum nemo velit vitae officia inventore sequi, excepturi rerum. Quasi laboriosam doloremque magni perferendis. Molestiae numquam nisi quam ipsum. Maxime quasi facere aliquid rem, aut deleniti esse!</div>
                        <div className="btn">
                            <button>See More</button>
                            <button>Buy Now</button>
                        </div>
                    </div>
                </div>



                <div className="item" style={{ backgroundImage: `url("/images/ice_scrapers.webp")` }}>
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <div className="content">
                        <div className="title">Arctic Shield</div>
                        <div className="name">Ice Scrapers</div>
                        <div className="des w-[50%]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, quis? Harum, atque fuga? Esse tempora a facilis! Ad modi, harum, minima veritatis alias laborum nemo velit vitae officia inventore sequi, excepturi rerum. Quasi laboriosam doloremque magni perferendis. Molestiae numquam nisi quam ipsum. Maxime quasi facere aliquid rem, aut deleniti esse!</div>
                        <div className="btn">
                            <button>See More</button>
                            <button>Buy Now</button>
                        </div>
                    </div>

                </div>

                <div className="item" style={{ backgroundImage: `url("/images/emergency.webp")` }}>
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <div className="content">
                        <div className="title">Arctic Shield</div>
                        <div className="name">Emergency Kits</div>
                        <div className="des w-[60%]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, quis? Harum, atque fuga? Esse tempora a facilis! Ad modi, harum, minima veritatis alias laborum nemo velit vitae officia inventore sequi, excepturi rerum. Quasi laboriosam doloremque magni perferendis. Molestiae numquam nisi quam ipsum. Maxime quasi facere aliquid rem, aut deleniti esse!</div>
                        <div className="btn">
                            <button>See More</button>
                            <button>Buy Now</button>
                        </div>
                    </div>

                </div>

                <div className="item" style={{ backgroundImage: `url("/images/merchandise.webp")` }}>
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <div className="content">
                        <div className="title">Arctic Shield</div>
                        <div className="name">Merchandise</div>
                        <div className="des w-[60%]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, quis? Harum, atque fuga? Esse tempora a facilis! Ad modi, harum, minima veritatis alias laborum nemo velit vitae officia inventore sequi, excepturi rerum. Quasi laboriosam doloremque magni perferendis. Molestiae numquam nisi quam ipsum. Maxime quasi facere aliquid rem, aut deleniti esse!</div>
                        <div className="btn">
                            <button>See More</button>
                            <button>Buy Now</button>
                        </div>
                    </div>

                </div>

                <div className="item" style={{ backgroundImage: `url("/images/promotional.webp")` }}>
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <div className="content">
                        <div className="title">Arctic Shield</div>
                        <div className="name">Winter Clothing</div>
                        <div className="des w-[60%]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, quis? Harum, atque fuga? Esse tempora a facilis! Ad modi, harum, minima veritatis alias laborum nemo velit vitae officia inventore sequi, excepturi rerum. Quasi laboriosam doloremque magni perferendis. Molestiae numquam nisi quam ipsum. Maxime quasi facere aliquid rem, aut deleniti esse!</div>
                        <div className="btn">
                            <button>See More</button>
                            <button>Buy Now</button>
                        </div>
                    </div>

                </div>







            </div>

            <div className="arrows">
                <button className="prev" onClick={handleNextClick}> prev </button>
                <button className="next" onClick={handlePrevClick}> next </button>
            </div>
            <div className="timeRunning"></div>

        </div >
    )
}

export default ProductSwiper