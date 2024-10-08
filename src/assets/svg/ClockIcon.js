import Svg, {Path} from 'react-native-svg';

const ClockIcon = () => (
  <Svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15 28.75C7.40608 28.75 1.25 22.5939 1.25 15C1.25 7.40608 7.40608 1.25 15 1.25C22.5939 1.25 28.75 7.40608 28.75 15C28.75 22.5939 22.5939 28.75 15 28.75ZM15 26.25C21.2132 26.25 26.25 21.2132 26.25 15C26.25 8.7868 21.2132 3.75 15 3.75C8.7868 3.75 3.75 8.7868 3.75 15C3.75 21.2132 8.7868 26.25 15 26.25ZM21.25 13.75H16.25V7.5H13.75V16.25H21.25V13.75Z"
      fill="#0D3F67"
    />
  </Svg>
);

export default ClockIcon;
