import React from 'react'
import ImageGallery from '../components/ImageGallery'
import images from '../images/images'

const imagesModal = images["sketchbook"][0];
const imagesThumb = images["sketchbook"][1];
console.log(images);
const sketchbook = () => (
        <ImageGallery imagesModal={imagesModal} imagesThumb={imagesThumb} tabName="SKETCHBOOK" />
)

export default sketchbook;
