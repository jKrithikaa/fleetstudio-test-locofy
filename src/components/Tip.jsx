import ComponentNavMaster from "./ComponentNavMaster";
import Component1 from "./Component1";
import PropTypes from "prop-types";

const Tip = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.5),_rgba(0,_0,_0,_0)),_#60c0f6] flex flex-col items-start justify-start pt-8 px-10 pb-[140px] box-border gap-[126.9px] max-w-full z-[2] text-left text-25xl text-fleet-white font-desktop-h3 mq750:gap-[63px] mq1050:pt-[21px] mq1050:pb-[91px] mq1050:box-border mq450:gap-8 mq450:pt-5 mq450:pb-[59px] mq450:box-border ${className}`}
    >
      <div className="w-[1440px] h-[800px] relative [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.5),_rgba(0,_0,_0,_0)),_#60c0f6] hidden max-w-full" />
      <header className="self-stretch flex flex-col items-end justify-start top-[0] z-[99] sticky max-w-full text-left text-4xs text-fleet-white font-desktop-h3">
        <ComponentNavMaster fleetLogo600pxWhite1="/fleetlogo-600px-white-1@2x.png" />
        <div className="w-[713px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <img
            className="h-0.5 w-[55px] relative z-[7]"
            loading="lazy"
            alt=""
            src="/vector-13.svg"
          />
        </div>
      </header>
      <div className="w-[1131px] flex flex-row items-start justify-center pt-0 px-0 pb-[47px] box-border max-w-full">
        <h1 className="m-0 w-[671px] relative text-inherit font-normal font-[inherit] inline-block shrink-0 max-w-full z-[3] mq1050:text-16xl mq450:text-7xl">
          <p className="m-0">{`Building superior `}</p>
          <p className="m-0">{`product experiences `}</p>
          <p className="m-0">that make a difference.</p>
        </h1>
      </div>
      <div className="w-[1015px] flex flex-col items-end justify-start gap-[20.7px] max-w-full text-xs font-desktop-body">
        <div className="w-[670px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <img
            className="h-[20.5px] w-[100px] relative z-[3]"
            alt=""
            src="/group-423.svg"
          />
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-5 max-w-full">
          <div className="h-[100px] flex-1 relative min-w-[244px] max-w-full z-[3]">
            <img
              className="absolute h-full w-[70.77%] top-[0px] right-[0%] bottom-[0px] left-[29.23%] max-w-full overflow-hidden max-h-full"
              loading="lazy"
              alt=""
              src="/rectangle-25.svg"
            />
            <div className="absolute h-[200%] w-full top-[0%] right-[0%] bottom-[-100%] left-[0%] border-fleet-white border-[2px] border-solid box-border z-[1]" />
            <div className="absolute w-[56.92%] top-[112%] left-[35.38%] leading-[150%] inline-block z-[2]">
              Wishing everyone a happy and colorful #Holi
            </div>
            <img
              className="absolute h-[24.6%] w-[7.42%] top-[88%] right-[81.2%] bottom-[-12.6%] left-[11.38%] max-w-full overflow-hidden max-h-full z-[2]"
              loading="lazy"
              alt=""
              src="/social-logo.svg"
            />
            <div className="absolute h-[202%] w-[0.62%] top-[0%] right-[70.15%] bottom-[-102%] left-[29.23%] border-fleet-white border-r-[2px] border-solid box-border z-[2]" />
          </div>
          <div className="h-[100px] flex-1 relative opacity-[0] min-w-[244px] max-w-full z-[3]">
            <img
              className="absolute h-full w-[70.77%] top-[0px] right-[0%] bottom-[0px] left-[29.23%] max-w-full overflow-hidden max-h-full"
              alt=""
            />
            <div className="absolute h-[200%] w-full top-[0%] right-[0%] bottom-[-100%] left-[0%] border-fleet-white border-[2px] border-solid box-border z-[1]" />
            <div className="absolute w-[56.92%] top-[112%] left-[35.38%] leading-[150%] inline-block z-[2]">
              Wishing everyone a happy and colorful #Holi
            </div>
            <img
              className="absolute h-[24.6%] w-[7.42%] top-[88%] right-[81.2%] bottom-[-12.6%] left-[11.38%] max-w-full overflow-hidden max-h-full z-[2]"
              alt=""
            />
            <div className="absolute h-[202%] w-[0.62%] top-[0%] right-[70.15%] bottom-[-102%] left-[29.23%] border-fleet-white border-r-[2px] border-solid box-border z-[2]" />
          </div>
          <Component1 />
        </div>
      </div>
    </section>
  );
};

Tip.propTypes = {
  className: PropTypes.string,
};

export default Tip;
