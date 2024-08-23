import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch flex flex-row items-start justify-between pt-[73px] px-10 pb-10 box-border relative max-w-full gap-5 z-[1] text-left text-13xl text-fleet-white font-desktop-h3 lg:flex-wrap mq450:pt-[47px] mq450:pb-[26px] mq450:box-border ${className}`}
    >
      <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-fleet-dark-slate-blue-alt" />
      <div className="w-[394px] flex flex-col items-start justify-start gap-[79px] min-w-[394px] max-w-full lg:flex-1 mq750:min-w-full mq450:gap-[39px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-5 max-w-full">
          <h1 className="m-0 w-[325px] relative text-inherit font-normal font-[inherit] inline-block max-w-full z-[1] mq1050:text-7xl mq450:text-lgi">
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
      <div className="w-[670px] flex flex-row items-start justify-start gap-5 min-w-[670px] max-w-full text-xs text-gray-200 font-desktop-body lg:flex-1 mq750:flex-wrap mq1050:min-w-full">
        <div className="flex-1 relative leading-[150%] inline-block min-w-[113px] z-[1]">
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
        <div className="flex-1 relative leading-[150%] inline-block min-w-[113px] z-[1]">
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
        <div className="flex-1 relative leading-[150%] inline-block min-w-[113px] z-[1]">
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
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
