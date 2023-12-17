import React, { useState } from 'react'
import '../Assets/Product.css'
import img1 from '../Assets/Images/nike-shoes.png'
import img2 from '../Assets/Images/adidas-campus.png'
import img3 from '../Assets/Images/Puma.png'

export default function Product() {
    const [productInfo, setcard] = useState([
        {
            title: "Nike Shoes",
            price: 5000,
            img: img1,
            variant: {
                size: ["7", "8", "9", "10", "11"]
            }
        },
        {
            title: "Adidas Shoes",
            price: 2000,
            img: img2,
            variant: {
                size: ["6", "7", "8", "9", "10"]
            }
        },
        {
            title: "Puma Shoes",
            price: 3000,
            img: img3,
            variant: {
                size: ["6", "7", "8", "9", "10"]
            }
        },
    ]);

    return (
        <div className="container mt-3">
            <div className="row">
                {productInfo.map((item, index) => (
                    <div className='card mt-3' key={index}>
                        <img src={item.img} className='img' />
                        <h2 className='title'>{item.title}</h2>
                        <h3 className='title' style={{ transform: "translate(-50%, 100%)" }}>₹ {item.price}</h3>
                        <div className='content'>
                            <div className='sizeContainer'>
                                <p className='sizeTitle'>Size:</p>
                                <span className='sizeNumber'>{item.variant.size[0]}</span>
                                <span className='sizeNumber'>{item.variant.size[1]}</span>
                                <span className='sizeNumber'>{item.variant.size[2]}</span>
                                <span className='sizeNumber'>{item.variant.size[3]}</span>
                                <span className='sizeNumber'>{item.variant.size[4]}</span>
                            </div>
                            <div className='colorContainer'>
                                <p className='colorTitle'>Color:</p>
                                <span className='colorCircle'></span>
                                <span className='colorCircle'></span>
                                <span className='colorCircle'></span>
                            </div>
                        </div>
                        <a href='#' className='link'>Buy Now</a>
                    </div>
                ))}
            </div>
        </div>
    )
}