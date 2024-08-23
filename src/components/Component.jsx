import { useMemo } from "react";
import PropTypes from "prop-types";

const Component = ({
  className = "",
  rectangle46,
  rectangle47,
  labs,
  propGap,
  thisIsOurPlaygroundForCreating,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start py-[30px] pl-[30px] pr-5 box-border relative gap-[50px] min-w-[211px] max-w-full z-[1] text-left text-5xl text-fleet-white font-desktop-h3 mq450:gap-[25px] ${className}`}
    >
      <img
        className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
        alt=""
        src={rectangle46}
      />
      <img
        className="w-full h-[89px] absolute !m-[0] top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 z-[1]"
        alt=""
        src={rectangle47}
      />
      <h1 className="m-0 w-[261px] relative text-inherit leading-[29px] font-medium font-[inherit] inline-block z-[2] mq450:text-lgi mq450:leading-[23px]">
        {labs}
      </h1>
      <div
        className="w-[233.7px] flex flex-col items-start justify-start gap-[42px] text-xs font-desktop-body"
        style={frameDivStyle}
      >
        <div className="self-stretch relative leading-[150%] z-[1]">
          {thisIsOurPlaygroundForCreating}
        </div>
        <div className="w-[117px] relative leading-[150%] uppercase font-semibold inline-block whitespace-nowrap z-[1]">
          Learn More
        </div>
      </div>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  rectangle46: PropTypes.string,
  rectangle47: PropTypes.string,
  labs: PropTypes.string,
  thisIsOurPlaygroundForCreating: PropTypes.string,

  /** Style props */
  propGap: PropTypes.any,
};

export default Component;
