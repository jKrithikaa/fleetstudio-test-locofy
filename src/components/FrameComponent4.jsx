import Component2 from "./Component2";
import PropTypes from "prop-types";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row flex-wrap items-start justify-start gap-[19px] max-w-full text-left text-lg text-fleet-cobalt-blue-alt font-desktop-h3 ${className}`}
    >
      <div className="w-[326px] flex flex-col items-start justify-start gap-5 max-w-full">
        <Component2
          propWidth="unset"
          propMinWidth="unset"
          propAlignSelf="stretch"
          propHeight="unset"
          propFlex="unset"
          image64="/image-64-4@2x.png"
          propGap="19.9px"
          venu="Naren"
          moola="Ethiraj"
          cEO="General Manager"
          princeton="Chennai"
          venuIsTheCEOOfFleetStudioAnd="After over a decade of experience in all-around managerial activities, Naren ensures that Fleet Studio can run smoothly. He supports employees at all levels to improve their efficiency and performance."
        />
        <Component2
          propWidth="unset"
          propMinWidth="unset"
          propAlignSelf="stretch"
          propHeight="unset"
          propFlex="unset"
          image64="/image-64-4@2x.png"
          propGap="19.9px"
          venu="Kip"
          moola="Voytek"
          cEO="Business Designer and Strategist"
          princeton="New York"
          venuIsTheCEOOfFleetStudioAnd="Kip is a digital business builder with 20 years of executive leadership experience in digital strategy, customer experience, product management, and organizational design. He supports Fleet Studio's product, creative, and strategy teams to help client companies harness technology."
        />
      </div>
      <div className="h-[1162px] w-[326px] flex flex-col items-start justify-start gap-5 max-w-full">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start p-5 relative gap-[24.9px]">
          <div className="w-full h-full absolute !m-[0] top-[0.1px] right-[0.2px] bg-fleet-white border-fleet-beige border-[2px] border-solid box-border" />
          <img
            className="self-stretch h-[199.7px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/image-64-4@2x.png"
          />
          <div className="w-[279px] flex flex-col items-start justify-start gap-[19.9px]">
            <div className="w-[210px] flex flex-col items-start justify-start gap-2.5">
              <h3 className="m-0 self-stretch relative text-inherit leading-[150%] font-medium font-[inherit] z-[1]">
                Shriram Thirukkumaran
              </h3>
              <div className="self-stretch relative text-xs leading-[150%] font-desktop-body text-fleet-dark-slate-blue-alt z-[1]">
                <p className="[margin-block-start:0] [margin-block-end:10px]">
                  Technical Lead
                </p>
                <p className="m-0">Chennai</p>
              </div>
            </div>
            <div className="self-stretch relative text-xs leading-[150%] font-desktop-body text-fleet-dark-slate-blue-alt z-[1]">
              Shriram is a developer, machine-learning enthusiast, digital
              artist, and an avid quantum noob. He currently leads Fleet
              Studio's dynamic full-stack web platform teams.
            </div>
          </div>
        </div>
        <Component2
          propWidth="unset"
          propMinWidth="unset"
          propAlignSelf="stretch"
          propHeight="unset"
          propFlex="unset"
          image64="/image-64-11@2x.png"
          propGap="19.9px"
          venu="Dheeraj"
          moola="Batra"
          cEO="Strategic Advisor"
          princeton="Princeton"
          venuIsTheCEOOfFleetStudioAnd="Dheeraj assists Fleet Studio as they help companies around the world develop innovative ideas, launch new businesses and build organizational capability. His passion is combining traditional management consulting approaches with more creative ones to help identify groundbreaking concepts."
        />
      </div>
      <div className="flex-1 flex flex-row items-start justify-start gap-[19px] min-w-[436px] max-w-full mq750:flex-wrap mq750:min-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-5 min-w-[212px] max-w-full">
          <Component2
            propWidth="unset"
            propMinWidth="unset"
            propAlignSelf="stretch"
            propHeight="571px"
            propFlex="unset"
            image64="/image-64-12@2x.png"
            propGap="19.9px"
            venu="Muthu"
            moola="Chezhiyan"
            cEO="Senior Fullstack Engineer"
            princeton="[Location]"
            venuIsTheCEOOfFleetStudioAnd="Muthu leads Fleet Studio's strategic initiatives in product development, managing the FleetStudio team of full-stack developers on Edu tech, manufacturing, Social media, and salesforce."
          />
          <Component2
            propWidth="unset"
            propMinWidth="unset"
            propAlignSelf="stretch"
            propHeight="unset"
            propFlex="unset"
            image64="/image-64-4@2x.png"
            propGap="19.9px"
            venu="Nick"
            moola="Pahade"
            cEO="Operational Strategy"
            princeton="Princeton"
            venuIsTheCEOOfFleetStudioAnd="A successful operational leader, Nick brings Fleet Studio nearly two decades of experience across media and digital agencies, e-commerce, and technology platforms with a central focus on using technology for an integrated approach to media. He provides the skill and guidance needed to accelerate growth within the company."
          />
        </div>
        <Component2
          propWidth="unset"
          propMinWidth="212px"
          propAlignSelf="unset"
          propHeight="unset"
          propFlex="0.8773"
          image64="/image-64-14@2x.png"
          propGap="19.9px"
          venu="Deepa"
          moola="K"
          cEO="Technical Lead"
          princeton="Chennai"
          venuIsTheCEOOfFleetStudioAnd="A visual thinker and  polyglot programmer, Deepa is highly analytical with technical expertise in providing effective, long-term, and scalable solutions to implement complex business rules. She is part of Fleet Studio’s core development team."
        />
      </div>
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
