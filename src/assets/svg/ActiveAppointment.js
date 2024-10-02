import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';

const ActiveAppointment = () => (
  <Svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <G clipPath="url(#clip0_5647_591)">
      <Rect opacity="0.13" width="48" height="48" rx="18" fill="#6B48FF" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 18H18V17H16V20H32V17H30V18H28V17H20V18ZM32 22H16V32H32V22ZM28 15H20V14H18V15H16C14.8954 15 14 15.8954 14 17V32C14 33.1046 14.8954 34 16 34H32C33.1046 34 34 33.1046 34 32V17C34 15.8954 33.1046 15 32 15H30V14H28V15ZM19 26V24H21V26H19ZM23 26H25V24H23V26ZM27 26V24H29V26H27ZM19 28V30H21V28H19ZM25 30H23V28H25V30Z"
        fill="#6B48FF"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_5647_591">
        <Rect width="48" height="48" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default ActiveAppointment;
