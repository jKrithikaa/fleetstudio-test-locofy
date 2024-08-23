import ComponentNavMaster from "./ComponentNavMaster";
import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <header
      className={`h-[54px] w-[1400px] absolute !m-[0] top-[0px] right-[0px] max-w-full ${className}`}
    >
      <ComponentNavMaster
        aProductDevelopmentAlignSelf="unset"
        aProductDevelopmentPosition="absolute"
        aProductDevelopmentTop="32px"
        aProductDevelopmentLeft="0px"
        aProductDevelopmentWidth="1360px"
        fleetLogo600pxWhite1="/fleetlogo-600px-white-11@2x.png"
      />
      <img
        className="absolute top-[-24px] left-[1319.1px] w-[87.6px] h-[73.3px] z-[3]"
        alt=""
        src="/group-436.svg"
      />
    </header>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
