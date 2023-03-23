interface Props {
  backgroundColor: string;
  isHide: boolean;
}

const SpinLoader = ({ backgroundColor, isHide }: Props) => {
  if (!isHide) {
    return null;
  }

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{ margin: "auto", background: "#ffffff0", display: "block", shapeRendering: "auto" }}
        width="234px"
        height="234px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <g transform="translate(84,50)">
          <g transform="rotate(0)">
            <circle cx="0" cy="0" r="6" fill={backgroundColor} fillOpacity="1">
              <animateTransform
                attributeName="transform"
                type="scale"
                begin="-0.8s"
                values="1.22 1.22;1 1"
                keyTimes="0;1"
                dur="0.8s"
                repeatCount="indefinite"
              ></animateTransform>
              <animate
                attributeName="fill-opacity"
                keyTimes="0;1"
                dur="0.8s"
                repeatCount="indefinite"
                values="1;0"
                begin="-0.8s"
              ></animate>
            </circle>
          </g>
        </g>
        <g transform="translate(76,71)">
          <g transform="rotate(40)">
            <circle cx="0" cy="0" r="6" fill={backgroundColor} fillOpacity="0.8">
              <animateTransform
                attributeName="transform"
                type="scale"
                begin="-0.7s"
                values="1.22 1.22;1 1"
                keyTimes="0;1"
                dur="0.8s"
                repeatCount="indefinite"
              ></animateTransform>
              <animate
                attributeName="fill-opacity"
                keyTimes="0;1"
                dur="0.8s"
                repeatCount="indefinite"
                values="1;0"
                begin="-0.7s"
              ></animate>
            </circle>
          </g>
        </g>
        <g transform="translate(55,83)">
          <g transform="rotate(80)">
            <circle cx="0" cy="0" r="6" fill={backgroundColor} fillOpacity="0.7">
              <animateTransform
                attributeName="transform"
                type="scale"
                begin="-0.6s"
                values="1.22 1.22;1 1"
                keyTimes="0;1"
                dur="0.8s"
                repeatCount="indefinite"
              ></animateTransform>
              <animate
                attributeName="fill-opacity"
                keyTimes="0;1"
                dur="0.8s"
                repeatCount="indefinite"
                values="1;0"
                begin="-0.6s"
              ></animate>
            </circle>
          </g>
        </g>
        <g transform="translate(33,79)">
          <g transform="rotate(119)">
            <circle cx="0" cy="0" r="6" fill={backgroundColor} fillOpacity="0.6">
              <animateTransform
                attributeName="transform"
                type="scale"
                begin="-0.5s"
                values="1.22 1.22;1 1"
                keyTimes="0;1"
                dur="0.8s"
                repeatCount="indefinite"
              ></animateTransform>
              <animate
                attributeName="fill-opacity"
                keyTimes="0;1"
                dur="0.8s"
                repeatCount="indefinite"
                values="1;0"
                begin="-0.5s"
              ></animate>
            </circle>
          </g>
        </g>
        <g transform="translate(18,61)">
          <g transform="rotate(160)">
            <circle cx="0" cy="0" r="6" fill={backgroundColor} fillOpacity="0.5">
              <animateTransform
                attributeName="transform"
                type="scale"
                begin="-0.4s"
                values="1.22 1.22;1 1"
                keyTimes="0;1"
                dur="0.8s"
                repeatCount="indefinite"
              ></animateTransform>
              <animate
                attributeName="fill-opacity"
                keyTimes="0;1"
                dur="0.8s"
                repeatCount="indefinite"
                values="1;0"
                begin="-0.4s"
              ></animate>
            </circle>
          </g>
        </g>
        <g transform="translate(18,38)">
          <g transform="rotate(200)">
            <circle cx="0" cy="0" r="6" fill={backgroundColor} fillOpacity="0.4">
              <animateTransform
                attributeName="transform"
                type="scale"
                begin="-0.3s"
                values="1.22 1.22;1 1"
                keyTimes="0;1"
                dur="0.8s"
                repeatCount="indefinite"
              ></animateTransform>
              <animate
                attributeName="fill-opacity"
                keyTimes="0;1"
                dur="0.8s"
                repeatCount="indefinite"
                values="1;0"
                begin="-0.3s"
              ></animate>
            </circle>
          </g>
        </g>
        <g transform="translate(32,20)">
          <g transform="rotate(239)">
            <circle cx="0" cy="0" r="6" fill={backgroundColor} fillOpacity="0.3">
              <animateTransform
                attributeName="transform"
                type="scale"
                begin="-0.2s"
                values="1.22 1.22;1 1"
                keyTimes="0;1"
                dur="0.8s"
                repeatCount="indefinite"
              ></animateTransform>
              <animate
                attributeName="fill-opacity"
                keyTimes="0;1"
                dur="0.8s"
                repeatCount="indefinite"
                values="1;0"
                begin="-0.2s"
              ></animate>
            </circle>
          </g>
        </g>
        <g transform="translate(55,16)">
          <g transform="rotate(280)">
            <circle cx="0" cy="0" r="6" fill={backgroundColor} fillOpacity="0.2">
              <animateTransform
                attributeName="transform"
                type="scale"
                begin="-0.1s"
                values="1.22 1.22;1 1"
                keyTimes="0;1"
                dur="0.8s"
                repeatCount="indefinite"
              ></animateTransform>
              <animate
                attributeName="fill-opacity"
                keyTimes="0;1"
                dur="0.8s"
                repeatCount="indefinite"
                values="1;0"
                begin="-0.1s"
              ></animate>
            </circle>
          </g>
        </g>
        <g transform="translate(76,28)">
          <g transform="rotate(320)">
            <circle cx="0" cy="0" r="6" fill={backgroundColor} fillOpacity="0.1">
              <animateTransform
                attributeName="transform"
                type="scale"
                begin="0s"
                values="1.22 1.22;1 1"
                keyTimes="0;1"
                dur="0.8s"
                repeatCount="indefinite"
              ></animateTransform>
              <animate
                attributeName="fill-opacity"
                keyTimes="0;1"
                dur="0.8s"
                repeatCount="indefinite"
                values="1;0"
                begin="0s"
              ></animate>
            </circle>
          </g>
        </g>
      </svg>
    </>
  );
};

export default SpinLoader;
