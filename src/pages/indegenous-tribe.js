import React from 'react'
import ImageGallery from '../components/ImageGallery'
import images from '../images/images'

const imagesModal = images["indegenousTribe"][0];
const imagesThumb = images["indegenousTribe"][1];

const IndegenousTribe = () => (
        <ImageGallery imagesModal={imagesModal} imagesThumb={imagesThumb} tabName="INDEGENOUS TRIBE" />
)

export default IndegenousTribe;
