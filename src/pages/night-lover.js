import React from 'react'
import ImageGallery from '../components/ImageGallery'
import images from '../images/images'

const imagesModal = images["nightLover"][0];
const imagesThumb = images["nightLover"][1];

const NightLover = () => (
        <ImageGallery imagesModal={imagesModal} imagesThumb={imagesThumb} tabName="NIGHT LOVER" />
)

export default NightLover;
