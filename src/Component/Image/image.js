import React, { forwardRef, useState } from 'react';
import images from '~/assets/images';
import classNames from 'classnames';


const Image = forwardRef(({ src, alt, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleImage = () => {
        setFallback(customFallback);
    };

    return <img className={classNames("image")} src={fallback || src} alt={alt} ref={ref} onError={handleImage} {...props} />;
});

export default (Image);
