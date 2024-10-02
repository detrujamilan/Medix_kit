import Svg, {G, Rect, Path, Defs, ClipPath} from 'react-native-svg';

const ActiveMessage = () => (
  <Svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <G clipPath="url(#clip0_5647_1210)">
      <Rect
        opacity="0.13"
        y="-1"
        width="48"
        height="48"
        rx="18"
        fill="#6B48FF"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 15H33C34.1046 15 35 15.8954 35 17V31C35 32.1046 34.1046 33 33 33H15C13.8954 33 13 32.1046 13 31V17C13 15.8954 13.8954 15 15 15ZM15 21.6181V31H33V21.6185L24 26.1185L15 21.6181ZM15 19.382L24 23.8825L33 19.3825V17H15V19.382Z"
        fill="#6B48FF"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_5647_1210">
        <Rect width="48" height="48" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default ActiveMessage;
