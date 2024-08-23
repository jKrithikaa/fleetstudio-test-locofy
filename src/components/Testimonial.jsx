import GroupComponent from "./GroupComponent";
import PropTypes from "prop-types";

const Testimonial = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-13xl text-fleet-dark-slate-blue-alt font-desktop-h3 ${className}`}
    >
      <div className="w-[669.5px] flex flex-col items-end justify-start gap-[84.7px] max-w-full mq750:gap-[42px] mq450:gap-[21px]">
        <GroupComponent />
        <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[21px] pr-5">
          <img
            className="h-5 w-[100px] relative shrink-0 z-[1]"
            loading="lazy"
            alt=""
            src="/group-22.svg"
          />
        </div>
      </div>
    </div>
  );
};

Testimonial.propTypes = {
  className: PropTypes.string,
};

export default Testimonial;
