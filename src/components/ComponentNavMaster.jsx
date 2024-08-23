import { useMemo } from "react";
import PropTypes from "prop-types";

const ComponentNavMaster = ({
  className = "",
  aProductDevelopmentAlignSelf,
  aProductDevelopmentPosition,
  aProductDevelopmentTop,
  aProductDevelopmentLeft,
  aProductDevelopmentWidth,
  fleetLogo600pxWhite1,
}) => {
  const componentNavMasterStyle = useMemo(() => {
    return {
      alignSelf: aProductDevelopmentAlignSelf,
      position: aProductDevelopmentPosition,
      top: aProductDevelopmentTop,
      left: aProductDevelopmentLeft,
      width: aProductDevelopmentWidth,
    };
  }, [
    aProductDevelopmentAlignSelf,
    aProductDevelopmentPosition,
    aProductDevelopmentTop,
    aProductDevelopmentLeft,
    aProductDevelopmentWidth,
  ]);

  return (
    <div
      className={`self-stretch h-[22px] flex flex-row items-end justify-start pt-1 pb-[3px] pl-[899px] pr-0 box-border gap-[518px] max-w-full z-[6] text-left text-4xs text-fleet-white font-desktop-h3 lg:gap-[259px] lg:pl-[449px] lg:box-border mq750:gap-[129px] mq750:pl-56 mq750:box-border mq450:gap-[65px] mq450:pl-5 mq450:box-border ${className}`}
      style={componentNavMasterStyle}
    >
      <div className="ml-[-900px] mb-[-6px] flex flex-row items-start justify-start gap-[23px] shrink-0 max-w-full">
        <img
          className="h-[33px] w-[149px] relative object-cover"
          loading="lazy"
          alt=""
          src={fleetLogo600pxWhite1}
        />
        <div className="flex flex-col items-start justify-start pt-3.5 px-0 pb-0 lg:hidden">
          <div className="relative whitespace-nowrap mq1050:hidden">
            A Product Development Technology Company
          </div>
        </div>
      </div>
      <nav className="m-0 flex flex-row items-start justify-start gap-5 shrink-0 max-w-full text-right text-xs text-fleet-white font-desktop-h3 mq450:hidden">
        <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[56px] whitespace-nowrap">
          About Us
        </a>
        <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[56px]">
          Offerings
        </a>
        <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[33px]">
          Work
        </a>
        <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[122px] whitespace-nowrap">
          Thought Leadership
        </a>
        <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[46px]">
          Careers
        </a>
        <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[48px]">
          Contact
        </a>
      </nav>
    </div>
  );
};

ComponentNavMaster.propTypes = {
  className: PropTypes.string,
  fleetLogo600pxWhite1: PropTypes.string,

  /** Style props */
  aProductDevelopmentAlignSelf: PropTypes.any,
  aProductDevelopmentPosition: PropTypes.any,
  aProductDevelopmentTop: PropTypes.any,
  aProductDevelopmentLeft: PropTypes.any,
  aProductDevelopmentWidth: PropTypes.any,
};

export default ComponentNavMaster;
