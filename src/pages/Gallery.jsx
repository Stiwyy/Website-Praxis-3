import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
    {
        original: '/assets/Bild1.jpg',
        thumbnail: '/assets/Bild1.jpg',
    },
    {
        original: '/assets/Bild2.jpg',
        thumbnail: '/assets/Bild2.jpg',
    },
    {
        original: '/assets/Bild3.jpg',
        thumbnail: '/assets/Bild3.jpg',
    },
    {
        original: '/assets/Bild4.jpg',
        thumbnail: '/assets/Bild4.jpg',
    },
    {
        original: '/assets/Bild5.webp',
        thumbnail: '/assets/Bild5.webp',
    },
    {
        original: '/assets/Bild6.webp',
        thumbnail: '/assets/Bild6.webp',
    },
    {
        original: '/assets/Bild7.png',
        thumbnail: '/assets/Bild7.png',
    },
];


export default function Gallery() {
    return (
        <div className="gallery">
            <h2 className="gallery-title">Unsere Galerie</h2>
            <ImageGallery items={images} />
        </div>
    );
}
