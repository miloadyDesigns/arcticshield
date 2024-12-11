import React from 'react';
import "./style.css"
import { CiShoppingCart, CiHeart } from "react-icons/ci";

const ProductCard = () => {
    return (
        <div className="product-card ">
            <div className="badge">Hot</div>
            <div className="product-tumb">
                <img src="/images/products/product1.webp" alt="" className='' />
            </div>
            <div className="product-details">
                <span className="product-catagory">Wiper, Arctic Shield</span>
                <h4><a href="">Jeep Wrangler Windshield Wiper Blades</a></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
                <div className="product-bottom-details">
                    <div className="product-price"><small>$96.00</small>$230.99</div>
                    <div className="product-links">
                        <a href="#">
                            <CiHeart size={30} color='black' />
                        </a>
                        <a href="#">
                            <CiShoppingCart size={30} color='black' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
