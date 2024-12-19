import React from 'react';
import "./style.css"
import { CiShoppingCart, CiHeart } from "react-icons/ci";

const ProductCard = ({ item }) => {
    return (
        <div className="product-card ">
            <div className="badge">Hot</div>
            <div className="product-tumb">
                <img src={item.image} alt="" className='w-[200px] h-[180px]' />
            </div>
            <div className="product-details">
                <span className="product-catagory">{item.category}, Arctic Shield</span>
                <h4><a href="">{item.title}</a></h4>
                <p>{item.description}</p>
                <div className="product-bottom-details">
                    <div className="product-price"><small>{item.discounted_price}</small>{item.actual_price}</div>
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
