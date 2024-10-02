import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';

const ActiveHome = () => (
  <Svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <G clipPath="url(#clip0_5647_79)">
      <Rect opacity="0.13" width="48" height="48" rx="18" fill="#6B48FF" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.8887 22L23.89 15.9987L29.8913 22H29.89V32H17.89V22H17.8887ZM15.89 23.9987L14.4132 25.4755L13 24.0623L22.477 14.5853C23.2574 13.8049 24.5226 13.8049 25.303 14.5853L34.78 24.0623L33.3668 25.4755L31.89 23.9987V32C31.89 33.1046 30.9946 34 29.89 34H17.89C16.7854 34 15.89 33.1046 15.89 32V23.9987Z"
        fill="#6B48FF"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_5647_79">
        <Rect width="48" height="48" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default ActiveHome;
