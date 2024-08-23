import Tip from "../components/Tip";
import Content from "../components/Content";
import Values from "../components/Values";
import FleetDescription from "../components/FleetDescription";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

const DesktopHome = () => {
  return (
    <div className="w-full relative bg-fleet-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal] text-left text-xs text-black font-roboto">
      <Tip />
      <div className="w-[108px] h-[129px] relative hidden z-[6]">
        <div className="absolute top-[0px] left-[0px] bg-fleet-white border-black border-[1px] border-solid box-border w-full h-full" />
        <div className="absolute h-[11.71%] w-[57.41%] top-[21.16%] left-[12.96%] inline-block">
          Technology
        </div>
        <div className="absolute h-[11.71%] w-[60.19%] top-[42.4%] left-[12.96%] inline-block">
          Product Dev
        </div>
        <div className="absolute h-[11.71%] w-[34.26%] top-[63.64%] left-[12.96%] inline-block">
          Design
        </div>
        <div className="absolute h-[11.71%] w-[72.22%] top-[83.72%] left-[12.96%] inline-block">
          Labs Products
        </div>
      </div>
      <Content />
      <Values />
      <section className="self-stretch bg-fleet-white flex flex-col items-end justify-start pt-[100px] px-0 pb-[51.5px] box-border gap-[99px] max-w-full text-left text-xs text-fleet-white font-desktop-body lg:pt-[65px] lg:pb-[33px] lg:box-border mq750:gap-[49px] mq1050:pt-[42px] mq1050:pb-[21px] mq1050:box-border mq450:gap-[25px] mq450:pt-[27px] mq450:pb-5 mq450:box-border">
        <div className="self-stretch h-[1570px] relative bg-fleet-white hidden" />
        <FleetDescription />
        <div className="self-stretch [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.25),_rgba(0,_0,_0,_0)),_#60c0f6] flex flex-row items-start justify-start pt-[172.2px] px-[270px] pb-[182.8px] box-border relative max-w-full z-[1] mq750:pt-28 mq750:pb-[119px] mq750:box-border mq1050:pl-[135px] mq1050:pr-[135px] mq1050:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="h-[487px] w-[1440px] relative [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.25),_rgba(0,_0,_0,_0)),_#60c0f6] hidden max-w-full z-[1]" />
          <img
            className="h-full w-[910.8px] absolute !m-[0] top-[0px] right-[0.5px] bottom-[0px] max-h-full object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/group-735@2x.png"
          />
          <div className="w-[325px] flex flex-col items-start justify-start pt-[78px] px-0 pb-0 box-border max-w-full">
            <div className="self-stretch relative leading-[150%] z-[3]">{`Based in New York City, Princeton NJ, and Chennai India, we are a global company working with the largest global multinational companies. `}</div>
          </div>
          <h1 className="m-0 w-[322px] relative text-5xl leading-[120%] font-medium font-desktop-h3 inline-block shrink-0 max-w-full z-[3] ml-[-325px] mq450:text-lgi mq450:leading-[23px]">
            Global Teams Serving Global Clients
          </h1>
        </div>
        <Testimonial />
      </section>
      <Footer />
    </div>
  );
};

export default DesktopHome;
