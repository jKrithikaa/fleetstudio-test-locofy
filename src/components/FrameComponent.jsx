import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.25),_rgba(0,_0,_0,_0)),_#0780c0] flex flex-col items-end justify-start pt-[25px] px-10 pb-[85.2px] box-border gap-[106.3px] max-w-full text-left text-13xl text-fleet-white font-desktop-h3 mq750:gap-[53px] mq750:pt-5 mq750:pb-[55px] mq750:box-border mq450:gap-[27px] ${className}`}
    >
      <div className="w-[1440px] h-[500px] relative [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.25),_rgba(0,_0,_0,_0)),_#0780c0] hidden max-w-full" />
      <header className="self-stretch flex flex-col items-end justify-start gap-px max-w-full text-left text-4xs text-fleet-white font-desktop-h3">
        <div className="self-stretch h-[22px] flex flex-row items-end justify-start pt-1 pb-[3px] pl-[899px] pr-0 box-border gap-[518px] max-w-full z-[1] lg:gap-[259px] lg:pl-[449px] lg:box-border mq750:h-auto mq750:gap-[129px] mq750:pl-56 mq750:box-border mq450:gap-[65px] mq450:pl-5 mq450:box-border">
          <div className="ml-[-900px] mb-[-6px] flex flex-row items-start justify-start gap-[23px] shrink-0 max-w-[calc(100%_-_79px)] mq750:flex-wrap">
            <img
              className="h-[33px] w-[149px] relative object-cover"
              loading="lazy"
              alt=""
              src="/fleetlogo-600px-white-11@2x.png"
            />
            <div className="flex flex-col items-start justify-start pt-3.5 px-0 pb-0">
              <div className="relative">
                A Product Development Technology Company
              </div>
            </div>
          </div>
          <nav className="m-0 flex flex-row items-start justify-start gap-[17px] shrink-0 max-w-full whitespace-nowrap text-right text-xs text-fleet-white font-desktop-h3 mq750:flex-wrap">
            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[56px]">
              About Us
            </a>
            <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[3px]">
              <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[59px]">
                Offerings
              </a>
            </div>
            <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[3px]">
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[33px]">
                Work
              </a>
            </div>
            <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[3px]">
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[122px]">
                Thought Leadership
              </a>
            </div>
            <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[3px]">
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[46px]">
                Careers
              </a>
            </div>
            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[48px]">
              Contact
            </a>
          </nav>
        </div>
        <div className="w-[715px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <img
            className="h-0.5 w-[57px] relative z-[1]"
            loading="lazy"
            alt=""
            src="/vector-131.svg"
          />
        </div>
      </header>
      <div className="w-[1266px] flex flex-row items-start justify-center max-w-full">
        <div className="w-[993.3px] flex flex-row items-start justify-between max-w-full gap-5 mq1050:flex-wrap">
          <div className="w-[325px] flex flex-col items-start justify-start pt-[38.7px] px-0 pb-0 box-border min-w-[325px] max-w-full mq1050:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-[17px]">
              <h1 className="m-0 relative text-inherit font-normal font-[inherit] inline-block min-w-[76px] z-[1] mq1050:text-7xl mq450:text-lgi">
                Labs
              </h1>
              <div className="self-stretch relative text-xs leading-[150%] font-desktop-body z-[1]">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
                eget lacinia odio sem nec elit. Etiam porta sem malesuada magna
                mollis euismod.
              </div>
            </div>
          </div>
          <div className="h-[258.5px] w-[395.2px] relative min-w-[395.2px] max-w-full mq750:min-w-full mq1050:flex-1">
            <img
              className="absolute top-[151.7px] left-[132px] w-[134px] h-[83px] z-[1]"
              alt=""
              src="/vector-28.svg"
            />
            <img
              className="absolute top-[48.7px] left-[0px] w-[69px] h-[57.3px] z-[1]"
              alt=""
              src="/group-4381.svg"
            />
            <img
              className="absolute top-[6.7px] left-[61px] w-[69px] h-[57.3px] z-[2]"
              alt=""
              src="/group-4381.svg"
            />
            <img
              className="absolute top-[40.7px] left-[119px] w-[69px] h-[57.3px] z-[3]"
              loading="lazy"
              alt=""
              src="/group-4451.svg"
            />
            <div className="absolute top-[0px] left-[117.9px] w-[164px] flex flex-row items-start justify-start">
              <img
                className="h-[57.3px] w-[69px] absolute !m-[0] bottom-[50px] left-[-59.9px] z-[2]"
                alt=""
                src="/group-4451.svg"
              />
              <img
                className="h-[190px] flex-1 relative max-w-full overflow-hidden object-cover z-[4]"
                alt=""
                src="/image-78@2x.png"
              />
            </div>
            <img
              className="absolute top-[167.7px] left-[204px] w-[67.2px] h-[56.8px] z-[5]"
              alt=""
              src="/group-440.svg"
            />
            <img
              className="absolute top-[127.7px] left-[271px] w-[67.2px] h-[56.8px] z-[6]"
              alt=""
              src="/group-440.svg"
            />
            <img
              className="absolute top-[201.7px] left-[260px] w-[68.2px] h-[56.8px] z-[6]"
              alt=""
              src="/group-441.svg"
            />
            <img
              className="absolute top-[161.7px] left-[327px] w-[68.2px] h-[56.8px] z-[7]"
              loading="lazy"
              alt=""
              src="/group-441.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
