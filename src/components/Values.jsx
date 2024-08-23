import PropTypes from "prop-types";

const Values = ({ className = "" }) => {
  return (
    <div
      className={`w-[699.6px] !m-[0] absolute top-[-20px] right-[-8.6px] flex flex-col items-start justify-start pt-[46px] pb-[60.6px] pl-[255px] pr-[178px] box-border gap-[33.3px] max-w-full text-left text-xs text-gray-200 font-desktop-h3 ${className}`}
    >
      <img
        className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[4]"
        alt=""
        src="/group-734.svg"
      />
      <div className="w-[130px] h-[135.5px] relative">
        <img
          className="absolute top-[0px] left-[0px] w-full h-full object-contain z-[5]"
          alt=""
          src="/rectangle-43.svg"
        />
        <div className="absolute top-[46px] left-[11px] leading-[150%] inline-block w-[117px] z-[6]">
          <p className="m-0">Labs</p>
          <p className="m-0">Product Dev</p>
          <p className="m-0">Design</p>
          <p className="m-0">Digital Strategy</p>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[31px] pr-px">
        <div className="h-[285.2px] flex-1 relative">
          <img
            className="absolute top-[168.2px] left-[30px] w-[188px] h-[117px] z-[5]"
            loading="lazy"
            alt=""
            src="/vector-29.svg"
          />
          <img
            className="absolute top-[0px] left-[0px] w-[235px] h-[270.8px] object-cover z-[6]"
            alt=""
            src="/image-83@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

Values.propTypes = {
  className: PropTypes.string,
};

export default Values;
