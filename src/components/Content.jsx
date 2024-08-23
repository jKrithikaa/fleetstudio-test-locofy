import Component from "./Component";
import PropTypes from "prop-types";

const Content = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start relative max-w-full text-left text-5xl text-fleet-white font-desktop-h3 ${className}`}
    >
      <img
        className="h-[73.3px] w-[87.6px] absolute !m-[0] top-[-17px] right-[117.4px] z-[1]"
        loading="lazy"
        alt=""
        src="/group-701.svg"
      />
      <img
        className="h-[73.3px] w-[87.6px] absolute !m-[0] top-[146px] right-[-13.6px] z-[1]"
        loading="lazy"
        alt=""
        src="/group-413.svg"
      />
      <img
        className="h-[73.3px] w-[87.6px] absolute !m-[0] top-[175px] left-[-23px] z-[1]"
        loading="lazy"
        alt=""
        src="/group-413.svg"
      />
      <div className="flex-1 [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.25),_rgba(0,_0,_0,_0)),_#0780c0] flex flex-row flex-wrap items-end justify-start pt-[77px] px-[39px] pb-[41px] box-border gap-5 max-w-full mq750:pt-8 mq750:pb-5 mq750:box-border mq1050:pt-[50px] mq1050:pb-[27px] mq1050:box-border">
        <div className="h-[1010px] w-[1440px] relative [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.25),_rgba(0,_0,_0,_0)),_#0780c0] hidden max-w-full" />
        <div className="flex-1 flex flex-col items-start justify-start gap-[72px] min-w-[436px] max-w-full mq750:gap-9 mq750:min-w-full mq450:gap-[18px]">
          <div className="w-[558.6px] flex flex-row items-start justify-start py-0 px-[30px] box-border max-w-full">
            <div className="flex-1 flex flex-col items-end justify-start gap-[18px] max-w-full lg:flex-1">
              <div className="w-[394.6px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                <img
                  className="h-[196px] w-[170px] relative object-cover z-[4]"
                  alt=""
                  src="/image-91@2x.png"
                />
              </div>
              <div className="self-stretch flex flex-col items-end justify-start gap-[10.7px] max-w-full">
                <img
                  className="w-[87.6px] h-[73.3px] relative z-[1]"
                  loading="lazy"
                  alt=""
                  src="/group-701.svg"
                />
                <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                  <div className="w-[386px] flex flex-row items-end justify-between max-w-full gap-5 mq450:flex-wrap">
                    <div className="h-[104px] w-[87.6px] flex flex-col items-start justify-end pt-0 px-0 pb-[30.7px] box-border">
                      <img
                        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full z-[1]"
                        loading="lazy"
                        alt=""
                        src="/group-411.svg"
                      />
                    </div>
                    <div className="w-[170px] flex flex-row items-start justify-start relative">
                      <img
                        className="h-[117px] w-[188px] absolute !m-[0] bottom-[-92px] left-[calc(50%_-_94px)] z-[1]"
                        alt=""
                        src="/vector-29.svg"
                      />
                      <img
                        className="h-[197px] flex-1 relative max-w-full overflow-hidden object-cover z-[2]"
                        alt=""
                        src="/image-87@2x.png"
                      />
                      <img
                        className="h-full w-full absolute !m-[0] top-[-148px] right-[0px] left-[0px] max-w-full overflow-hidden object-cover z-[3]"
                        loading="lazy"
                        alt=""
                        src="/image-90@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[21px] max-w-full mq750:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start py-[30px] pl-[30px] pr-5 box-border relative gap-[50px] min-w-[211px] max-w-full z-[2] mq450:gap-[25px]">
              <img
                className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/rectangle-46.svg"
              />
              <img
                className="w-full h-[89px] absolute !m-[0] top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 z-[1]"
                alt=""
                src="/rectangle-47.svg"
              />
              <h1 className="m-0 w-[261px] relative text-inherit leading-[29px] font-medium font-[inherit] inline-block z-[2] mq450:text-lgi mq450:leading-[23px]">
                Labs
              </h1>
              <div className="w-[233.7px] flex flex-col items-start justify-start gap-10 text-xs font-desktop-body">
                <div className="self-stretch relative leading-[150%] z-[1]">
                  <p className="[margin-block-start:0] [margin-block-end:10px]">
                    This is our playground for creating products that we
                    experiment in-house before launching it to the public - some
                    of these experiments have turned into successful startups
                    leading to acquisition.
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:10px]">
                    Take a look at what we are cooking!
                  </p>
                </div>
                <div className="w-[117px] relative leading-[150%] uppercase font-semibold inline-block whitespace-nowrap z-[1]">
                  Learn More
                </div>
              </div>
            </div>
            <Component
              rectangle46="/rectangle-46.svg"
              rectangle47="/rectangle-47.svg"
              labs="Product Dev"
              propGap="42px"
              thisIsOurPlaygroundForCreating="Identifying and solving business challenges can be a drawn-out and labor-intensive process. Luckily, helping you overcome your hurdles is in our wheelhouse. Bring us a challenge, and we will shoot back with a custom strategy and an implementation solution. "
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[51px] min-w-[435px] max-w-full mq750:gap-[25px] mq750:min-w-full">
          <div className="w-[554px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-25xl">
            <h1 className="m-0 w-[324px] relative text-inherit font-normal font-[inherit] inline-block shrink-0 max-w-full z-[1] mq1050:text-16xl mq450:text-7xl">
              <p className="m-0">{`What `}</p>
              <p className="m-0">We Do</p>
            </h1>
          </div>
          <div className="self-stretch flex flex-row items-start justify-end pt-0 px-6 pb-[42px] box-border max-w-full">
            <div className="w-[531.4px] flex flex-col items-start justify-start gap-1.5 max-w-full">
              <h1 className="m-0 w-[324px] relative text-inherit leading-[120%] font-medium font-[inherit] inline-block max-w-full z-[1] mq450:text-lgi mq450:leading-[23px]">
                <p className="[margin-block-start:0] [margin-block-end:20px]">{`Technology innovation `}</p>
                <p className="m-0">is our greatest asset</p>
              </h1>
              <div className="self-stretch flex flex-row items-start justify-start gap-[73.9px] max-w-full text-xs font-desktop-body mq750:flex-wrap mq750:gap-[37px] mq450:gap-[18px]">
                <div className="flex-1 relative leading-[150%] inline-block min-w-[211px] max-w-full z-[1]">
                  <p className="[margin-block-start:0] [margin-block-end:10px]">
                    We are technologists, creatives, and strategists that build
                    great product experiences. We believe the world is a better
                    place when products are designed and built the right way,
                    are enjoyable to use and feel snappy. Our team of experts
                    can deliver exactly the products you're looking for
                    efficiently.
                  </p>
                  <p className="m-0">
                    With Labs, we are constantly innovating with the latest
                    technologies and applying our learnings to our clients.
                    Today we specialize in purpose-driven progressive web apps,
                    mobile apps, custom Headless CMS systems, and Ecommerce
                    experiences.
                  </p>
                </div>
                <div className="flex flex-col items-start justify-start pt-[21px] px-0 pb-0 box-border min-w-[133.5px] mq750:flex-1">
                  <img
                    className="w-[133.5px] h-[138.3px] relative z-[1] mq750:self-stretch mq750:w-auto"
                    loading="lazy"
                    alt=""
                    src="/group-702.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-5 max-w-full mq750:flex-wrap">
            <Component
              rectangle46="/rectangle-46.svg"
              rectangle47="/rectangle-47.svg"
              labs="Design"
              propGap="24px"
              thisIsOurPlaygroundForCreating="If design is the first thing people notice, why should it be an afterthought? When it comes to the creative side of our projects, we don't believe in cutting corners. Our partnerships with excellent agencies mean we can hand the design work over to the experts, getting you the best possible product."
            />
            <Component
              rectangle46="/rectangle-46.svg"
              rectangle47="/rectangle-47.svg"
              labs="Digital Strategy"
              thisIsOurPlaygroundForCreating="We are digital natives who know that it is impossible to succeed without using technology to amplify your products, ideas, and services. Technology is not just an integral component of digital strategy but is the manifestation of great digital strategy."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
