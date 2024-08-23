import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent4 from "../components/FrameComponent4";
import Footer1 from "../components/Footer1";

const DesktopAboutUs = () => {
  return (
    <div className="w-full relative bg-fleet-white overflow-hidden flex flex-col items-end justify-start gap-[119px] leading-[normal] tracking-[normal] mq450:gap-[30px] mq750:gap-[59px]">
      <section className="self-stretch flex flex-col items-start justify-start gap-[52px] max-w-full text-left text-13xl text-fleet-cobalt-blue-alt font-desktop-h3 mq750:gap-[26px]">
        <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
          <img
            className="h-[72.3px] w-[86.2px] absolute !m-[0] right-[-26.3px] bottom-[68.7px] z-[1]"
            loading="lazy"
            alt=""
            src="/group-445.svg"
          />
          <FrameComponent2 />
          <img
            className="h-[73.3px] w-[87.6px] absolute !m-[0] bottom-[-23.3px] left-[583.1px] z-[1]"
            loading="lazy"
            alt=""
            src="/group-438.svg"
          />
          <FrameComponent1 />
        </div>
        <div className="w-[750px] flex flex-row items-start justify-start py-0 px-10 box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq750:flex-wrap">
            <div className="w-[210px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
              <h1 className="m-0 self-stretch relative text-inherit font-normal font-[inherit] mq450:text-lgi mq1050:text-7xl">
                History
              </h1>
            </div>
            <div className="w-[324px] relative text-xs leading-[150%] font-desktop-body text-fleet-dark-slate-blue-alt inline-block shrink-0 min-w-[324px] max-w-full mq750:flex-1">{`When Venu Moola worked for agencies in New York City back in 2008, he was impressed with everyone’s dedication to getting digital product design just right. At the same time, he believed that a greater focus on technology was the key to bringing these products to life. He started Fleet Studio to bring this belief to fruition. For the past twelve years, Fleet Studio has brought together experts with a passion for technology to build software products for startups, leading advertising agencies, brands, and enterprise customers. `}</div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-end pt-0 px-[39px] pb-[105px] box-border max-w-full lg:pb-11 lg:box-border mq750:pb-[29px] mq750:box-border">
        <div className="flex-1 flex flex-col items-end justify-start gap-5 max-w-full">
          <div className="self-stretch h-[27px] flex flex-row items-start justify-end pt-0 px-px pb-[26px] box-border max-w-full">
            <div className="self-stretch flex-1 relative border-fleet-dark-slate-blue-alt border-t-[1px] border-solid box-border max-w-full" />
          </div>
          <FrameComponent3 />
          <FrameComponent4 />
        </div>
      </section>
      <Footer1 />
    </div>
  );
};

export default DesktopAboutUs;
