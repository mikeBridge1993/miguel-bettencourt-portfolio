import React from 'react'
import ImageGallery from '../components/ImageGallery'
import images from '../images/images'

const imagesModal = images["others"][0];
const imagesThumb = images["others"][1];

const others = () => (
        <ImageGallery imagesModal={imagesModal} imagesThumb={imagesThumb} tabName="OTHERS" />
)

export default others;
