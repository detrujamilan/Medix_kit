import React from 'react';
import {Svg, G, Path, Defs, ClipPath, Rect} from 'react-native-svg';

const FacebookIcon = () => (
  <Svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <G clipPath="url(#clip0)">
      <Path
        d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z"
        fill="#3B5998"
      />
      <Path
        d="M29.0614 24.4759H25.6428V37H20.4634V24.4759H18V20.0745H20.4634V17.2262C20.4634 15.1894 21.4309 12 25.6889 12L29.5255 12.0161V16.2884H26.7418C26.2852 16.2884 25.6431 16.5165 25.6431 17.4882V20.0786H29.5139L29.0614 24.4759Z"
        fill="white"
      />
    </G>
    <Defs>
      <ClipPath id="clip0">
        <Rect width="48" height="48" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default FacebookIcon;
