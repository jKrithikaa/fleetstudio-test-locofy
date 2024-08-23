import PropTypes from "prop-types";

const GroupComponent = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[236.8px] gap-[32.2px] shrink-0 z-[1] text-center text-13xl text-fleet-dark-slate-blue-alt font-desktop-h3 mq750:gap-4 mq750:pb-[154px] mq750:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
        <img
          className="h-12 w-[61px] relative shrink-0"
          loading="lazy"
          alt=""
          src="/.svg"
        />
      </div>
      <div className="self-stretch h-[204.7px] relative inline-block shrink-0">
        <p className="[margin-block-start:0] [margin-block-end:20px]">
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Aenean eu leo quam.
        </p>
        <p className="[margin-block-start:0] [margin-block-end:20px] text-sm text-orangered">
          <b className="leading-[150%]">
            <span>First Last</span>
          </b>
        </p>
        <p className="[margin-block-start:0] [margin-block-end:20px]">
          <b className="leading-[150%]">
            <span>Title</span>
          </b>
        </p>
        <p className="m-0">
          <b className="leading-[150%]">
            <span>Company</span>
          </b>
        </p>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
