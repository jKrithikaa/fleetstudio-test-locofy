import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.25),_rgba(0,_0,_0,_0)),_#0780c0] flex flex-row items-end justify-start pt-[46px] pb-[67.7px] pl-[270px] pr-[19px] box-border gap-[142.1px] max-w-full text-left text-13xl text-fleet-white font-desktop-h3 lg:flex-wrap mq450:gap-9 mq450:pl-5 mq450:box-border mq750:gap-[71px] mq750:pl-[135px] mq750:pt-[30px] mq750:pb-11 mq750:box-border ${className}`}
    >
      <div className="h-[500px] w-[1440px] relative [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.25),_rgba(0,_0,_0,_0)),_#0780c0] hidden max-w-full" />
      <div className="w-[325px] flex flex-col items-start justify-start pt-0 px-0 pb-[127px] box-border min-w-[325px] min-h-[237px] max-w-full lg:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[17px]">
          <h1 className="m-0 relative text-inherit font-normal font-[inherit] z-[1] mq450:text-lgi mq1050:text-7xl">
            About Us
          </h1>
          <div className="self-stretch relative text-xs leading-[150%] font-desktop-body z-[1]">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
            eget lacinia odio sem nec elit. Etiam porta sem malesuada magna
            mollis euismod.
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-row items-start justify-start gap-[51.4px] min-w-[445px] max-w-full mq750:flex-wrap mq750:gap-[26px] mq1050:min-w-full">
        <div className="flex-1 flex flex-row items-end justify-start gap-[27.4px] min-w-[354px] max-w-full mq750:flex-wrap mq750:min-w-full">
          <div className="h-[386.3px] w-[191.6px] flex flex-row items-start justify-start gap-[16.4px] min-w-[191.6px] mq750:flex-1">
            <img
              className="h-[73.3px] w-[87.6px] relative z-[1]"
              loading="lazy"
              alt=""
              src="/group-437.svg"
            />
            <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-[313px] px-0 pb-0 mq450:pt-[203px] mq450:box-border">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full z-[1]"
                loading="lazy"
                alt=""
                src="/group-4111.svg"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-9 box-border min-w-[212px] max-w-full">
            <div className="self-stretch h-[257.3px] relative">
              <img
                className="absolute top-[33px] left-[0px] w-[87.6px] h-[73.3px] z-[1]"
                alt=""
                src="/group-418.svg"
              />
              <img
                className="absolute top-[0px] left-[155px] w-[83.6px] h-[69.9px] z-[1]"
                loading="lazy"
                alt=""
                src="/group-406.svg"
              />
              <img
                className="absolute top-[169px] left-[44px] w-[134px] h-[83px] z-[1]"
                loading="lazy"
                alt=""
                src="/vector-28.svg"
              />
              <img
                className="absolute top-[186px] left-[194px] w-[85.2px] h-[71.3px] z-[1]"
                loading="lazy"
                alt=""
                src="/group-431.svg"
              />
              <img
                className="absolute top-[41px] left-[238px] w-[87.6px] h-[73.3px] z-[2]"
                loading="lazy"
                alt=""
                src="/group-432.svg"
              />
              <img
                className="absolute top-[22px] left-[40px] w-[164px] h-[190px] object-cover z-[2]"
                alt=""
                src="/image-80@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="h-[130.3px] w-[87.6px] flex flex-col items-start justify-start pt-[57px] px-0 pb-0 box-border">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full z-[1]"
            loading="lazy"
            alt=""
            src="/group-436.svg"
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
