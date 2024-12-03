import React, { useState } from 'react';


const images = [
    '/assets/images/gallery1.jpg',
    '/assets/images/gallery2.jpg',
    '/assets/images/gallery3.jpg',
];

export default function Gallery() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => setCurrentIndex((currentIndex + 1) % images.length);
    const prevImage = () => setCurrentIndex((currentIndex - 1 + images.length) % images.length);

    return (
        <div className="gallery">
            <button onClick={prevImage}>&lt;</button>
            <img src={images[currentIndex]} alt={`Bild ${currentIndex + 1}`} />
            <button onClick={nextImage}>&gt;</button>
        </div>
    );
}
