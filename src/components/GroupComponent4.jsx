import { useMemo } from "react";
import PropTypes from "prop-types";

const GroupComponent4 = ({ className = "", rectangleDivTop }) => {
  const groupDiv1Style = useMemo(() => {
    return {
      top: rectangleDivTop,
    };
  }, [rectangleDivTop]);

  return (
    <div
      className={`absolute top-[559px] left-[0px] rounded-smi bg-white w-full flex flex-row flex-wrap items-start justify-start py-[41px] px-8 box-border gap-[37px] max-w-full text-left text-17xl text-white font-general-sans mq900:gap-[18px] ${className}`}
      style={groupDiv1Style}
    >
      <img
        className="h-14 w-14 absolute !m-[0] top-[-28px] right-[-24px] object-contain z-[3]"
        loading="lazy"
        alt=""
        src="/group-30308@2x.png"
      />
      <div className="h-10 w-10 absolute !m-[0] top-[-20px] left-[-17px]">
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-tomato w-full h-full z-[3]" />
        <h1 className="m-0 absolute top-[-6px] left-[30.83px] text-inherit font-medium font-inherit [transform:_rotate(47deg)] [transform-origin:0_0] mq900:text-10xl mq450:text-3xl">
          +
        </h1>
      </div>
      <div className="h-[307px] w-[1740px] relative rounded-smi bg-white hidden max-w-full z-[1]" />
      <img
        className="w-[380px] relative rounded-2xs max-h-full object-cover min-h-[225px] max-w-full z-[1]"
        loading="lazy"
        alt=""
        src="/rectangle-169@2x.png"
      />
      <div className="flex-1 flex flex-col items-start justify-start gap-[14px] min-w-[816px] max-w-full text-black font-inter mq1275:min-w-full">
        <div className="w-[1154px] flex flex-row items-start justify-between max-w-full gap-[20px] mq900:flex-wrap">
          <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
            <h1 className="m-0 relative text-inherit font-semibold font-inherit inline-block min-w-[124px] z-[1] mq900:text-10xl mq450:text-3xl">
              Project
            </h1>
          </div>
          <div className="flex flex-row items-start justify-start gap-[235px] max-w-full mq900:flex-wrap mq900:gap-[117px]">
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <h1 className="m-0 relative text-inherit font-semibold font-inherit inline-block min-w-[85px] z-[1] mq900:text-10xl mq450:text-3xl">
                Tags
              </h1>
            </div>
            <h1 className="m-0 relative text-inherit font-semibold font-inherit z-[1] mq900:text-10xl mq450:text-3xl">
              Faculties
            </h1>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[20px] max-w-full mq1275:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[15px] pl-0 box-border min-w-[426px] max-w-full mq900:min-w-full">
            <div className="self-stretch rounded-smi bg-lavender flex flex-row items-start justify-center py-14 pr-5 pl-[21px] box-border max-w-full z-[1]">
              <div className="h-[156px] w-[641px] relative rounded-smi bg-lavender hidden max-w-full" />
              <div className="relative font-semibold z-[2] mq900:text-10xl mq450:text-3xl">
                Project Description
              </div>
            </div>
          </div>
          <div className="h-[156px] w-[291px] rounded-3xs bg-lavender overflow-x-auto shrink-0 flex flex-row items-start justify-start py-5 px-[23px] box-border gap-[9px] z-[1] text-3xs text-white">
            <div className="h-[156px] w-[291px] relative rounded-3xs bg-lavender shrink-0 hidden" />
            <div className="rounded bg-royalblue-100 flex flex-row items-start justify-start pt-0.5 px-2.5 pb-[3px] z-[2]">
              <div className="h-[17px] w-[54px] relative rounded bg-royalblue-100 hidden" />
              <div className="relative inline-block min-w-[34px] z-[1]">
                Python
              </div>
            </div>
            <div className="w-9 rounded bg-royalblue-100 shrink-0 flex flex-row items-start justify-start pt-[3px] px-2.5 pb-0.5 box-border z-[2]">
              <div className="h-[17px] w-9 relative rounded bg-royalblue-100 hidden" />
              <div className="relative inline-block min-w-[15px] z-[1]">ML</div>
            </div>
            <div className="rounded bg-royalblue-100 flex flex-row items-start justify-start pt-[3px] px-[13px] pb-0.5 z-[2]">
              <div className="h-[17px] w-9 relative rounded bg-royalblue-100 hidden" />
              <div className="relative inline-block min-w-[10px] z-[1]">AI</div>
            </div>
          </div>
          <div className="rounded-3xs bg-lavender flex flex-row items-start justify-center py-5 pr-5 pl-[21px] box-border gap-[19.7px] min-h-[156px] z-[1] mq450:flex-wrap">
            <div className="h-[156px] w-[268px] relative rounded-3xs bg-lavender hidden" />
            <img
              className="h-[42px] w-[42px] relative rounded-[50%] object-cover z-[2]"
              loading="lazy"
              alt=""
              src="/ellipse-16@2x.png"
            />
            <img
              className="h-[42px] w-[42px] relative rounded-[50%] object-cover z-[2]"
              loading="lazy"
              alt=""
              src="/ellipse-16@2x.png"
            />
            <img
              className="h-[42px] w-[42px] relative rounded-[50%] object-cover z-[2]"
              loading="lazy"
              alt=""
              src="/ellipse-16@2x.png"
            />
            <img
              className="h-[42px] w-[42px] relative rounded-[50%] object-cover z-[2]"
              loading="lazy"
              alt=""
              src="/ellipse-16@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

GroupComponent4.propTypes = {
  className: PropTypes.string,

  /** Style props */
  rectangleDivTop: PropTypes.any,
};

export default GroupComponent4;
