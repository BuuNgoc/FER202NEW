import React from 'react';
import { Image } from 'react-bootstrap';

const ImageComponent = ({ url }) => (
  <Image src={url} alt="Card image" fluid style={{ maxHeight: '100px', objectFit: 'cover' }} />
);

export default ImageComponent;
