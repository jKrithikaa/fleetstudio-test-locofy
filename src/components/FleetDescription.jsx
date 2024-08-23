import PropTypes from "prop-types";

const FleetDescription = ({ className = "" }) => {
  return (
    <div
      className={`w-[1326px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-25xl text-fleet-cobalt-blue-alt font-desktop-h3 ${className}`}
    >
      <div className="w-[1013.3px] flex flex-row items-end justify-between max-w-full gap-5 mq1050:flex-wrap">
        <div className="w-[327px] flex flex-col items-start justify-start gap-[50px] min-w-[327px] max-w-full mq1050:flex-1 mq450:gap-[25px]">
          <h1 className="m-0 self-stretch relative text-inherit font-normal font-[inherit] z-[1] mq1050:text-16xl mq450:text-7xl">
            <p className="m-0">{`Why `}</p>
            <p className="m-0">Fleet Studio?</p>
          </h1>
          <div className="self-stretch flex flex-col items-start justify-start gap-5 text-5xl text-fleet-dark-slate-blue-alt">
            <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-medium font-[inherit] z-[1] mq450:text-lgi mq450:leading-[23px]">
              Over a Decade of Dependability
            </h1>
            <div className="self-stretch relative text-xs leading-[150%] font-desktop-body z-[1]">
              Since 2008, we have worked with over 100+ brands including Puma,
              Diageo, Kimberly Clark, and more. Our flexibility and
              dependability enable us to successfully launch product experiences
              across consumer, fintech, edutech, adtech, martech, healthcare/
              life science and automotive industries.
            </div>
          </div>
        </div>
        <div className="w-[533.3px] flex flex-col items-start justify-end pt-0 px-0 pb-3.5 box-border min-w-[533.3px] max-w-full mq750:min-w-full mq1050:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[47.4px] max-w-full mq750:gap-6">
            <div className="self-stretch flex flex-col items-end justify-start gap-[49.7px] max-w-full mq750:gap-[25px]">
              <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-[9px] box-border max-w-full shrink-0">
                <div className="flex-1 flex flex-col items-start justify-start gap-[19.8px] max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[5px] pr-0 box-border max-w-full">
                    <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq750:flex-wrap">
                      <div className="flex flex-col items-start justify-start pt-[16.8px] px-0 pb-0">
                        <img
                          className="w-[47.2px] h-[23.5px] relative object-cover z-[1]"
                          loading="lazy"
                          alt=""
                          src="/image-36@2x.png"
                        />
                      </div>
                      <div className="w-[205.2px] flex flex-col items-start justify-start pt-[25.4px] px-0 pb-0 box-border relative">
                        <img
                          className="w-[76px] h-[10.3px] relative object-cover z-[1]"
                          alt=""
                          src="/image-39@2x.png"
                        />
                        <img
                          className="w-[50.4px] h-[10.7px] absolute !m-[0] right-[24.4px] bottom-[-0.1px] object-cover z-[1]"
                          alt=""
                          src="/image-29@2x.png"
                        />
                      </div>
                      <div className="h-[61px] flex flex-col items-start justify-start py-0 pl-0 pr-2.5 box-border">
                        <img
                          className="w-[27px] flex-1 relative max-h-full object-cover z-[1]"
                          loading="lazy"
                          alt=""
                          src="/image-26@2x.png"
                        />
                      </div>
                      <div className="w-[70.8px] flex flex-col items-start justify-start pt-[20.5px] px-0 pb-0 box-border">
                        <img
                          className="self-stretch h-[16.1px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
                          loading="lazy"
                          alt=""
                          src="/image-33@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-end justify-between gap-5 mq450:flex-wrap">
                    <div className="w-[59.8px] flex flex-col items-start justify-end pt-0 pb-[15.6px] pl-0 pr-0.5 box-border">
                      <img
                        className="self-stretch h-[15.9px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
                        loading="lazy"
                        alt=""
                        src="/image-31@2x.png"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-end pt-0 pb-[16.8px] pl-0 pr-[11px]">
                      <img
                        className="w-[45.9px] h-[13.6px] relative object-cover z-[1]"
                        alt=""
                        src="/image-28@2x.png"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-end pt-0 pb-[15px] pl-0 pr-2">
                      <img
                        className="w-[44.5px] h-[17.3px] relative object-cover z-[1]"
                        alt=""
                        src="/image-35@2x.png"
                      />
                    </div>
                    <div className="w-[50.3px] flex flex-col items-start justify-end pt-0 px-0 pb-[13.6px] box-border">
                      <img
                        className="self-stretch h-[15.9px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
                        alt=""
                        src="/image-37@2x.png"
                      />
                    </div>
                    <img
                      className="h-[55.2px] w-[55.2px] relative object-cover z-[1]"
                      loading="lazy"
                      alt=""
                      src="/bacardilogoblackandwhite-1@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[520.1px] flex flex-row items-end justify-between gap-5 max-w-full shrink-0 mq450:flex-wrap">
                <div className="w-[46.7px] flex flex-col items-start justify-start py-0 pl-0 pr-[15px] box-border">
                  <img
                    className="w-[30.7px] h-[30.7px] relative object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/image-34@2x.png"
                  />
                </div>
                <div className="w-[62px] flex flex-col items-start justify-end pt-0 pb-[8.3px] pl-0 pr-1.5 box-border">
                  <img
                    className="self-stretch h-[14.1px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
                    alt=""
                    src="/image-27@2x.png"
                  />
                </div>
                <div className="w-[74.4px] flex flex-col items-start justify-end pt-0 pb-[6.4px] pl-0 pr-[18px] box-border">
                  <img
                    className="self-stretch h-[17.9px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/image-32@2x.png"
                  />
                </div>
                <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[1.4px]">
                  <img
                    className="w-[27.9px] h-[27.9px] relative object-cover z-[1]"
                    alt=""
                    src="/image-38@2x.png"
                  />
                </div>
                <div className="w-[87.5px] flex flex-col items-start justify-end pt-0 px-0 pb-[9.6px] box-border">
                  <img
                    className="self-stretch h-[11.5px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/image-44@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="w-[180.5px] flex flex-row items-start justify-start py-0 px-[7px] box-border">
              <div className="flex-1 flex flex-row items-start justify-between gap-5">
                <img
                  className="h-[21.9px] w-[44.4px] relative object-cover shrink-0 z-[1]"
                  loading="lazy"
                  alt=""
                  src="/image-30@2x.png"
                />
                <div className="w-[60.9px] flex flex-col items-start justify-start pt-[2.6px] px-0 pb-0 box-border">
                  <img
                    className="self-stretch h-[14.3px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
                    alt=""
                    src="/image-40@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FleetDescription.propTypes = {
  className: PropTypes.string,
};

export default FleetDescription;
