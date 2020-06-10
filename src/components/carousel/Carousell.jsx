import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function Carousell() {

    const images = [
        "https://images.pexels.com/photos/442574/pexels-photo-442574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://cdn.pixabay.com/photo/2017/11/27/21/31/computer-2982270_1280.jpg",
        "https://images.pexels.com/photos/356043/pexels-photo-356043.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/585752/pexels-photo-585752.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/6598/coffee-desk-laptop-notebook.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    ]
    return (
        <Carousel autoPlay={true} interval={3000} infiniteLoop={true} centerMode showStatus={false} centerSlidePercentage={40} showThumbs={false} className="mt-lg-3 mt-xl-3 mb-5">
            {images.map((image, key) => {
                return (
                    <div key={key}>
                        <img src={image} alt="carousel" />
                    </div>
                )
            })}

        </Carousel>
    )
}