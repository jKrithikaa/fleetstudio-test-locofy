import PropTypes from "prop-types";

const Footer1 = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch h-[390px] relative max-w-full text-left text-xs text-gray-200 font-desktop-body ${className}`}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-fleet-dark-slate-blue-alt" />
      <div className="absolute w-[14.58%] top-[18.72%] left-[50.69%] leading-[150%] inline-block z-[1]">
        <p className="m-0">
          <span className="text-fleet-white">
            <b className="text-sm font-desktop-h3">Princeton</b>
          </span>
        </p>
        <p className="m-0">
          <span>
            <span className="text-fleet-white">&nbsp;</span>
          </span>
        </p>
        <p className="m-0">
          <span>
            <span>100 Nassau St  2nd floor  Princeton, NJ 08542</span>
          </span>
        </p>
        <p className="m-0">
          <span>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className="m-0">
          <span>
            <span>
              <span className="[text-decoration:underline]">
                info@fleetstudio.com
              </span>
            </span>
          </span>
        </p>
        <p className="m-0">
          <span>
            <span>+1 (908) 376-6652</span>
          </span>
        </p>
      </div>
      <div className="absolute w-[14.58%] top-[18.72%] left-[66.67%] leading-[150%] inline-block z-[1]">
        <p className="m-0">
          <span className="text-fleet-white">
            <b className="text-sm font-desktop-h3">New York</b>
          </span>
        </p>
        <p className="m-0">
          <span>
            <span className="text-fleet-white">&nbsp;</span>
          </span>
        </p>
        <p className="m-0">
          <span>
            <span>175 Varick St</span>
          </span>
        </p>
        <p className="m-0">
          <span>
            <span>New York, NY 10014</span>
          </span>
        </p>
        <p className="m-0">
          <span>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className="m-0">
          <span>
            <span>
              <span className="[text-decoration:underline]">
                info@fleetstudio.com
              </span>
            </span>
          </span>
        </p>
        <p className="m-0">
          <span>
            <span>+1 (908) 376-6652</span>
          </span>
        </p>
      </div>
      <div className="absolute top-[73px] left-[40px] w-[1360px] flex flex-col items-start justify-start min-h-[277px] max-w-full text-13xl text-fleet-white font-desktop-h3">
        <div className="w-[414px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border gap-[79px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-5 max-w-full">
            <h1 className="m-0 w-[325px] relative text-inherit font-normal font-[inherit] inline-block max-w-full z-[1] mq450:text-lgi mq1050:text-7xl">
              Fleet Studio
            </h1>
            <h3 className="m-0 self-stretch relative text-lg leading-[150%] font-medium font-[inherit] z-[1]">
              <p className="[margin-block-start:0] [margin-block-end:20px]">{`Building superior `}</p>
              <p className="[margin-block-start:0] [margin-block-end:20px]">{`product experiences `}</p>
              <p className="m-0">that make a difference.</p>
            </h3>
          </div>
          <div className="w-[325px] relative text-xs leading-[150%] font-desktop-body text-gray-100 inline-block max-w-full z-[1]">
            © Copyright 2021 Fleet Studio Inc.
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end mt-[-277px] text-xs text-gray-200 font-desktop-body">
          <div className="w-[230px] relative leading-[150%] inline-block shrink-0 box-border pl-5 z-[1]">
            <p className="m-0">
              <span className="text-fleet-white">
                <b className="text-sm font-desktop-h3">Chennai</b>
              </span>
            </p>
            <p className="m-0">
              <span>
                <span className="text-fleet-white">&nbsp;</span>
              </span>
            </p>
            <p className="m-0">
              <span>
                <span>
                  443, Anna Salai Teynampet, Chennai,  Tamil Nadu 600018, India
                </span>
              </span>
            </p>
            <p className="m-0">
              <span>
                <span>&nbsp;</span>
              </span>
            </p>
            <p className="m-0">
              <span>
                <span>
                  <span className="[text-decoration:underline]">
                    info@fleetstudio.com
                  </span>
                </span>
              </span>
            </p>
            <p className="m-0">
              <span>
                <span>(+91) 12345 12345</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer1.propTypes = {
  className: PropTypes.string,
};

export default Footer1;
