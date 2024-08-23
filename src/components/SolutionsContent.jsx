import PropTypes from "prop-types";

const SolutionsContent = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-row flex-wrap items-start justify-start [row-gap:20px] max-w-full text-left text-13xl text-fleet-cobalt-blue-alt font-desktop-h3 ${className}`}
    >
      <div className="w-[345px] flex flex-col items-start justify-start gap-[218px] max-w-full mq450:gap-[109px]">
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[93px] box-border max-w-full">
          <h1 className="m-0 flex-1 relative text-inherit font-normal font-[inherit] inline-block max-w-full mq1050:text-7xl mq450:text-lgi">
            Ecommerce
          </h1>
        </div>
        <h1 className="m-0 w-[325px] relative text-inherit font-normal font-[inherit] inline-block max-w-full mq1050:text-7xl mq450:text-lgi">
          <p className="m-0">{`Customer `}</p>
          <p className="m-0">Data Platform</p>
        </h1>
        <div className="w-[325px] flex flex-row items-start justify-start pt-0 px-0 pb-[57px] box-border max-w-full">
          <h1 className="m-0 flex-1 relative text-inherit font-normal font-[inherit] inline-block max-w-full mq1050:text-7xl mq450:text-lgi">
            Voice-First
          </h1>
        </div>
        <h1 className="m-0 w-[325px] relative text-inherit font-normal font-[inherit] inline-block max-w-full mq1050:text-7xl mq450:text-lgi">
          AI
        </h1>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[59.5px] min-w-[660px] max-w-full text-sm text-fleet-dark-slate-blue-alt mq750:gap-[30px] mq1050:min-w-full">
        <div className="w-[785px] flex flex-row items-start justify-between max-w-full gap-5 mq750:flex-wrap">
          <div className="w-[324px] flex flex-col items-start justify-start gap-[21.8px] max-w-full">
            <b className="self-stretch relative leading-[150%] z-[1]">
              Overview
            </b>
            <div className="w-[285px] h-[180px] relative text-xs leading-[150%] font-desktop-body inline-block">
              We aren’t just generalists. We know that the future of e-commerce
              is industry-specific solutions. Bring us challenges specific to
              your enterprise, and we will find a solution perfectly tailored to
              your industry and geo segment. Businesses at the top of their
              fields have come to us with niche requests that we have gone above
              and beyond to fulfil. We follow the latest ecommerce trends and
              know how to use the platforms that will give you precisely the
              digital product and marketplace solutions you’re looking for.
            </div>
          </div>
          <div className="w-[210px] flex flex-col items-start justify-start gap-[11px]">
            <b className="self-stretch relative leading-[150%]">Case Studies</b>
            <div className="w-[136px] relative text-xs [text-decoration:underline] leading-[150%] font-desktop-body text-orangered inline-block">
              <p className="m-0">Thirstie</p>
              <p className="m-0">Diageo</p>
              <p className="m-0">Gallo</p>
              <p className="m-0">KiKiLeaf</p>
              <p className="m-0">Good Harvest</p>
              <p className="m-0">Canidae</p>
              <p className="m-0">NativePets</p>
              <p className="m-0">Peter Coppola</p>
              <p className="m-0">Beth Minardi</p>
              <p className="m-0">GROH</p>
              <p className="m-0">Yolked</p>
            </div>
          </div>
        </div>
        <div className="self-stretch h-px relative border-fleet-dark-slate-blue-alt border-t-[1px] border-solid box-border" />
        <div className="w-[785px] flex flex-row items-start justify-between max-w-full gap-5 mq750:flex-wrap">
          <div className="w-[324px] flex flex-col items-start justify-start gap-[11px] max-w-full">
            <b className="self-stretch relative leading-[150%]">Overview</b>
            <div className="w-[278px] relative text-xs leading-[150%] font-desktop-body inline-block">{`Transparency matters to us. To give your consumers a secure 360 data platform, Fleet Studio relies on cookie alternatives with opt-in experiences. When it comes down to it, we believe that the end-user should control their information. This information gives your users a convenient, personalized experience and faith in your digital product's security. `}</div>
          </div>
          <div className="w-[210px] flex flex-col items-start justify-start gap-[11px]">
            <b className="self-stretch relative leading-[150%]">Case Studies</b>
            <div className="self-stretch relative text-xs [text-decoration:underline] leading-[150%] font-desktop-body text-orangered">
              <p className="m-0">Project 1</p>
              <p className="m-0">Project 2</p>
              <p className="m-0">Project 3</p>
              <p className="m-0">Project 4</p>
              <p className="m-0">Project 5</p>
            </div>
          </div>
        </div>
        <div className="self-stretch h-px relative border-fleet-dark-slate-blue-alt border-t-[1px] border-solid box-border" />
        <div className="w-[785px] flex flex-row items-start justify-between gap-5 max-w-full mq750:flex-wrap">
          <div className="w-[280px] flex flex-col items-start justify-start gap-[11px]">
            <b className="self-stretch relative leading-[150%]">Overview</b>
            <div className="self-stretch relative text-xs leading-[150%] font-desktop-body whitespace-pre-wrap">
              Voice first technology extends AI directly to the homes of your
              customers. We have the resources to innovate ecommerce using the
              Alexa platform. Voice recognition can move your business beyond
              mobile web and apps and connect it directly to virtual assistants
              owned by your customers. This technology is efficient, engaging,
              and as simple to use as having a conversation
            </div>
          </div>
          <div className="w-[210px] flex flex-col items-start justify-start gap-[11px]">
            <b className="self-stretch relative leading-[150%]">Case Studies</b>
            <div className="self-stretch relative text-xs [text-decoration:underline] leading-[150%] font-desktop-body text-orangered">
              <p className="m-0">Project 1</p>
              <p className="m-0">Project 2</p>
              <p className="m-0">Project 3</p>
              <p className="m-0">Project 4</p>
              <p className="m-0">Project 5</p>
            </div>
          </div>
        </div>
        <div className="self-stretch h-px relative border-fleet-dark-slate-blue-alt border-t-[1px] border-solid box-border" />
        <div className="w-[899px] flex flex-row items-start justify-between max-w-full gap-5 mq750:flex-wrap">
          <div className="w-[280px] flex flex-col items-start justify-start gap-[11px]">
            <b className="self-stretch relative leading-[150%]">Overview</b>
            <div className="self-stretch relative text-xs leading-[150%] font-desktop-body">{`No matter the size of your company, a personalized customer experience is a superior customer experience. Through voice recognition, machine learning, and algorithms, AI systems make ecommerce unique and dynamic for each user. By setting up programs with the ability to analyze data, recognize customers, and send personalized recommendations, we can help your company gain the success of a major corporation with the individualized attention of a small business. `}</div>
          </div>
          <div className="w-[324px] flex flex-col items-start justify-start gap-[11px] max-w-full">
            <b className="self-stretch relative leading-[150%]">Case Studies</b>
            <div className="self-stretch relative text-xs [text-decoration:underline] leading-[150%] font-desktop-body text-orangered">
              <p className="m-0">Project 1</p>
              <p className="m-0">Project 2</p>
              <p className="m-0">Project 3</p>
              <p className="m-0">Project 4</p>
              <p className="m-0">Project 5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SolutionsContent.propTypes = {
  className: PropTypes.string,
};

export default SolutionsContent;
