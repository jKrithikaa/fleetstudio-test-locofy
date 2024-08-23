import { useMemo } from "react";
import PropTypes from "prop-types";

const Component2 = ({
  className = "",
  propWidth,
  propMinWidth,
  propAlignSelf,
  propHeight,
  propFlex,
  image64,
  propGap,
  venu,
  moola,
  cEO,
  princeton,
  venuIsTheCEOOfFleetStudioAnd,
}) => {
  const component93Style = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
      alignSelf: propAlignSelf,
      height: propHeight,
      flex: propFlex,
    };
  }, [propWidth, propMinWidth, propAlignSelf, propHeight, propFlex]);

  const memberInfoStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div
      className={`w-[326px] flex flex-col items-start justify-start pt-5 px-5 pb-[34.9px] box-border relative gap-[24.9px] min-w-[310px] max-w-full text-left text-lg text-fleet-cobalt-blue-alt font-desktop-h3 mq750:pb-[23px] mq750:box-border ${className}`}
      style={component93Style}
    >
      <div className="w-full h-full absolute !m-[0] top-[0.1px] right-[0.1px] bg-fleet-white border-fleet-beige border-[2px] border-solid box-border" />
      <img
        className="self-stretch h-[199.7px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
        loading="lazy"
        alt=""
        src={image64}
      />
      <div
        className="w-[279px] flex flex-col items-start justify-start gap-[19.9px]"
        style={memberInfoStyle}
      >
        <div className="w-[210px] flex flex-col items-start justify-start gap-2.5 shrink-0">
          <h3 className="m-0 self-stretch h-[53.9px] relative text-inherit leading-[150%] font-medium font-[inherit] inline-block shrink-0 z-[1]">
            <p className="[margin-block-start:0] [margin-block-end:20px]">
              {venu}
            </p>
            <p className="m-0">{moola}</p>
          </h3>
          <div className="self-stretch relative text-xs leading-[150%] font-desktop-body text-fleet-dark-slate-blue-alt z-[1]">
            <p className="[margin-block-start:0] [margin-block-end:10px]">
              {cEO}
            </p>
            <p className="m-0">{princeton}</p>
          </div>
        </div>
        <div className="self-stretch relative text-xs leading-[150%] font-desktop-body text-fleet-dark-slate-blue-alt whitespace-pre-wrap shrink-0 z-[1]">
          {venuIsTheCEOOfFleetStudioAnd}
        </div>
      </div>
    </div>
  );
};

Component2.propTypes = {
  className: PropTypes.string,
  image64: PropTypes.string,
  venu: PropTypes.string,
  moola: PropTypes.string,
  cEO: PropTypes.string,
  princeton: PropTypes.string,
  venuIsTheCEOOfFleetStudioAnd: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propMinWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propHeight: PropTypes.any,
  propFlex: PropTypes.any,
  propGap: PropTypes.any,
};

export default Component2;
