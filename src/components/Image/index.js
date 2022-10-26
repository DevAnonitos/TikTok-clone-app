import classNames from 'classnames';
import React, { useState, forwardRef } from 'react'
import images from '@/assets/image';

import styles from './Image.module.scss'



const Image = forwardRef(({src,className , alt, ...props}, ref) => {
  
  const [fallBack, setfallBack] = useState('');

  const handleError = () => {
    setfallBack(images.noImage)
  }


  return (
    <>
        <img 
          className={classNames(styles.wrapper, className)}
          ref={ref} 
          src={fallBack || src} 
          alt={alt} 
          {...props} 
          onError={handleError}
        />
    </>
  )
})

export default Image;