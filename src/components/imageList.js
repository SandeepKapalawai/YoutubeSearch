import React from 'react';
import './imageList.css';
import ImageCard from './imageCard.js';

const ImageList = props =>{
    console.log(props.images, "props");

    const images =props.images.map((image) =>{
   return <ImageCard key={image.id} image={image}/>
    })

    return <div className="image-list">{images}</div>;

}

export default ImageList;