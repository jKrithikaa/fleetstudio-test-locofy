import PropTypes from "prop-types";

const Component1 = ({ className = "" }) => {
  return (
    <div
      className={`h-[100px] flex-1 relative opacity-[0] min-w-[244px] max-w-full z-[3] text-left text-xs text-fleet-white font-desktop-body ${className}`}
    >
      <img
        className="absolute h-full w-[70.77%] top-[0px] right-[0%] bottom-[0px] left-[29.23%] max-w-full overflow-hidden max-h-full"
        alt=""
      />
      <div className="absolute h-[200%] w-full top-[0%] right-[0%] bottom-[-100%] left-[0%] border-fleet-white border-[2px] border-solid box-border z-[1]" />
      <div className="absolute w-[56.92%] top-[112%] left-[35.38%] leading-[150%] inline-block z-[2]">
        <p className="[margin-block-start:0] [margin-block-end:10px]">
          Working with companies in other countries has given Fleet Studio more
          opportunities,…
        </p>
        <p className="m-0">
          <span className="[text-decoration:underline]">Continue</span>
          {` `}
        </p>
      </div>
      <img
        className="absolute h-[24.6%] w-[7.42%] top-[88%] right-[81.2%] bottom-[-12.6%] left-[11.38%] max-w-full overflow-hidden max-h-full z-[2]"
        alt=""
      />
      <div className="absolute h-[202%] w-[0.62%] top-[0%] right-[70.15%] bottom-[-102%] left-[29.23%] border-fleet-white border-r-[2px] border-solid box-border z-[2]" />
    </div>
  );
};

Component1.propTypes = {
  className: PropTypes.string,
};

export default Component1;
