import React from 'react'
import ImageGallery from '../components/ImageGallery'

import images from '../images/images'

const imagesModal = images["portoCity"][0];
const imagesThumb = images["portoCity"][1];

const PortoCity = () => (
        <ImageGallery imagesModal={imagesModal} imagesThumb={imagesThumb} tabName="PORTO CITY" />
)

export default PortoCity;
