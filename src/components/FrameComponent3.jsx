import Component2 from "./Component2";
import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[58px] max-w-full text-left text-13xl text-fleet-cobalt-blue-alt font-desktop-h3 mq750:gap-[29px] ${className}`}
    >
      <h1 className="m-0 w-[325px] relative text-inherit font-normal font-[inherit] inline-block max-w-full mq450:text-lgi mq1050:text-7xl">
        Leadership
      </h1>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-x-[18.9px] gap-y-[18px] min-h-[1161px] max-w-full text-lg">
        <Component2
          image64="/image-64@2x.png"
          venu="Venu"
          moola="Moola"
          cEO="CEO"
          princeton="Princeton"
          venuIsTheCEOOfFleetStudioAnd="Venu is the CEO of Fleet Studio and has been the Chief Technology Officer for several startups. Over the course of over 22, he has worked with award-winning digital marketing agencies and has experience sourcing and leading teams of diverse technologists from across the globe. Combining management skills with hands-on experience, he innovates technology as an architect, engineer, and executive.  "
        />
        <Component2
          propWidth="326px"
          propMinWidth="310px"
          propAlignSelf="unset"
          propHeight="571px"
          propFlex="unset"
          image64="/image-64-1@2x.png"
          propGap="19.9px"
          venu="Jordyn"
          moola="Greaux"
          cEO="CEO"
          princeton="Princeton"
          venuIsTheCEOOfFleetStudioAnd="Jordyn is responsible for Fleet Studio's new business initiatives on top-line growth, including sales, sales strategy, sales planning, and the resulting organizational communication needs. "
        />
        <div className="w-[326px] flex flex-col items-start justify-start pt-5 px-5 pb-[70.6px] box-border relative gap-[24.9px] min-w-[310px] max-w-full mq750:pb-[46px] mq750:box-border">
          <div className="w-full h-full absolute !m-[0] top-[0.1px] right-[0.2px] bg-fleet-white border-fleet-beige border-[2px] border-solid box-border" />
          <img
            className="self-stretch h-[199.7px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/image-64-1@2x.png"
          />
          <div className="w-[279px] flex flex-col items-start justify-start gap-[19.9px]">
            <div className="w-[210px] flex flex-col items-start justify-start gap-2.5">
              <h3 className="m-0 self-stretch relative text-inherit leading-[150%] font-medium font-[inherit] z-[1]">
                Anna (Latha) Kumanan
              </h3>
              <div className="self-stretch relative text-xs leading-[150%] font-desktop-body text-fleet-dark-slate-blue-alt z-[1]">
                <p className="[margin-block-start:0] [margin-block-end:10px]">
                  Director Of Engineering
                </p>
                <p className="m-0">New York</p>
              </div>
            </div>
            <div className="self-stretch relative text-xs leading-[150%] font-desktop-body text-fleet-dark-slate-blue-alt z-[1]">
              Anna Kumanan is a hands-on technical lead with extensive knowledge
              in design, development, implementation, testing and maintenance of
              eCommerce web applications. She uses her 11 years of experience to
              build and lead software teams that are instrumental in developing
              successful web applications.
            </div>
          </div>
        </div>
        <Component2
          propWidth="326px"
          propMinWidth="310px"
          propAlignSelf="unset"
          propHeight="unset"
          propFlex="unset"
          image64="/image-64-3@2x.png"
          propGap="19.9px"
          venu="Swati "
          moola="Gupta"
          cEO={`Head Of People & Culture`}
          princeton="Mumbai"
          venuIsTheCEOOfFleetStudioAnd="Swati is the HR professional responsible for fulfilling Fleet Studio's middle and senior-level hiring needs. She is adept at people management and resolves any HR issues that arise with a customer-centric approach focusing on people, process, technology, and data."
        />
        <Component2
          propWidth="326px"
          propMinWidth="310px"
          propAlignSelf="unset"
          propHeight="unset"
          propFlex="unset"
          image64="/image-64-4@2x.png"
          propGap="1.9px"
          venu="Andy"
          moola="Sung"
          cEO="Consultant / Digital Transformation / Strategy / Management Consultant"
          princeton="Princeton"
          venuIsTheCEOOfFleetStudioAnd="Andy's expertise spans digital marketing, site and software development, and management consulting. He enjoys working at the intersection of business, technology, and creativity to solve problems and find innovative solutions for Fleet Studio clients."
        />
        <Component2
          propWidth="326px"
          propMinWidth="310px"
          propAlignSelf="unset"
          propHeight="unset"
          propFlex="unset"
          image64="/image-64-4@2x.png"
          propGap="19.9px"
          venu="Yzabelle"
          moola="Munson"
          cEO="Creative Director"
          princeton="New York"
          venuIsTheCEOOfFleetStudioAnd="Yzabelle is an experienced, award-winning creative/interaction director who has a passion for creating innovative digital experiences.She works with cross-functional teams to reinvigorate brands and deliver projects for Fleet Studio that exceed client goals."
        />
        <Component2
          propWidth="326px"
          propMinWidth="310px"
          propAlignSelf="unset"
          propHeight="unset"
          propFlex="unset"
          image64="/image-64-4@2x.png"
          propGap="19.9px"
          venu="Kris"
          moola="Kiger"
          cEO="Creative Director"
          princeton="New York"
          venuIsTheCEOOfFleetStudioAnd="Kris has more than 20 years of hands-on experience working with and leading creative teams in delivering strategy-driven brand experiences for many of the world’s most recognizable companies. She works with Fleet Studio to help their clients navigate transitioning from traditional business environments to the digital, mobile, and social economy."
        />
        <Component2
          propWidth="326px"
          propMinWidth="310px"
          propAlignSelf="unset"
          propHeight="unset"
          propFlex="unset"
          image64="/image-64-4@2x.png"
          propGap="19.9px"
          venu="David"
          moola="Alcorn"
          cEO="Creative Director"
          princeton="New York"
          venuIsTheCEOOfFleetStudioAnd="The knowledge David has gained after 21 years of experience has allowed him to partner with experts across digital marketing, experience strategy, mobile/web design, and build initiatives. He is able to see the connections between many topics and fill gaps in Fleet Studio's team structures."
        />
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
