import React from 'react'
import ImageGallery from '../components/ImageGallery'
import images from '../images/images'

const imagesModal = images["juggler"][0];
const imagesThumb = images["juggler"][1];

const Juggler = () => (
        <ImageGallery imagesModal={imagesModal} imagesThumb={imagesThumb} tabName="JUGGLER" />
)

export default Juggler;
