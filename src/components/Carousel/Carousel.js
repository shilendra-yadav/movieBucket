import axios from 'axios';
import React, {useState, useEffect} from 'react';
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { img_300, noPicture } from "../../config/config";
import './Carousel.css';
import { CREDITS_API } from '../../Utils/constants';

const handleDragStart = (e) => e.preventDefault();

const Gallery = ({id, mediaType}) => {

    const [credits, setCredits] = useState([]);

    const items = credits.map(credit => (
        <div className='carouselItem'>
            <img 
                src={credit.profile_path ? `${img_300}/${credit.profile_path}`: noPicture}
                alt={credit?.name}
                onDragStart={handleDragStart}
                className='carouselItem__img'
            />
            <b className='carouselItem_txt'>{credit?.name}</b>
        </div>
    ));

    const responsive = {
        0: {
            items: 3,
          },
          512: {
            items: 5,
          },
          1024: {
            items: 7,
          },
    }

    const fetchCredits = async () => {
        const { data } = await axios.get(CREDITS_API(mediaType, id));

        setCredits(data.cast);

    };

    useEffect(() => {
        fetchCredits();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <AliceCarousel
            mouseTracking
            infinite
            disableDotsControls
            disableButtonsControls
            responsive={responsive}
            items={items}
            autoPlay
        />
    )

};

export default Gallery;