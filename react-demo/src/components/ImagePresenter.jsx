import React from 'react';

const ImagePresenter = ({image, altText}) => {
    return ( 
        <div>
            <p>I'm in the div!</p>
            <img src={image} alt={altText} />
        </div>
     );
}
 
export default ImagePresenter;