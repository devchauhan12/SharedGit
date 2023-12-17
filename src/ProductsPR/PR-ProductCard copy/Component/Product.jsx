import React, { useState } from 'react'
import '../Assets/Product.css'
import img1 from '../Assets/Images/nike-shoes.png'
import img2 from '../Assets/Images/adidas-campus.png'
import img3 from '../Assets/Images/Puma.png'
import { Container, Row, Card, Button } from 'react-bootstrap'

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
        <Container className='mt-3'>
            <Row>
                {productInfo.map((item, index) => (
                    <Card className='mt-3 bg-dark text-white' key={index}>
                        <Card.Img src={item.img} className='img' />
                        <h2 className='title position-absolute w-100'>{item.title}</h2>
                        <h3 className='title position-absolute w-100' style={{ transform: "translate(-50%, 100%)" }}>₹ {item.price}</h3>
                        <div className='content'>
                            <div className='sizeContainer'>
                                <p className='sizeTitle'>Size:</p>
                                {
                                    item.variant.size.map((e,i)=>{
                                       return <span className='sizeNumber' key={i}>{e}</span>
                                    })
                                }
                            </div>
                            <div className='colorContainer'>
                                <p className='colorTitle'>Color:</p>
                                <span className='colorCircle'></span>
                                <span className='colorCircle'></span>
                                <span className='colorCircle'></span>
                            </div>
                        </div>
                        {/* <a href='#' className='link'>Buy Now</a> */}
                        <Button variant="light" className='link' onClick={()=>console.log('hiii')}>Buy Now</Button>
                    </Card>
                ))}
            </Row>
        </Container>
    )
}