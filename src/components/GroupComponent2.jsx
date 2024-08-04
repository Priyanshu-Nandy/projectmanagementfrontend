import { useMemo } from "react";
import PropTypes from "prop-types";

const GroupComponent2 = ({ className = "", propTop }) => {
  const groupDiv2Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className={`absolute top-[70px] left-[0px] rounded-6xs bg-white w-full flex flex-row items-start justify-between py-[9px] pr-6 pl-[43px] box-border max-w-full gap-[20px] text-left text-base text-black font-inter mq1275:pl-[21px] mq1275:box-border mq1600:flex-wrap ${className}`}
      style={groupDiv2Style}
    >
      <div className="h-16 w-[1736px] relative rounded-6xs bg-white hidden max-w-full" />
      <div className="w-[304px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
        <div className="flex flex-row items-start justify-start gap-[20px]">
          <img
            className="h-[37px] w-9 relative rounded-64xl object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/whatsapp-image-20240318-at-1224-1-1@2x.png"
          />
          <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
            <div className="relative inline-block min-w-[75px] z-[1]">
              Kunal Sen
            </div>
          </div>
        </div>
      </div>
      <div className="w-[772px] rounded bg-lavender flex flex-row items-start justify-center pt-3.5 px-5 pb-[13px] box-border max-w-full z-[1]">
        <div className="h-[46px] w-[772px] relative rounded bg-lavender hidden max-w-full" />
        <div className="relative font-semibold inline-block min-w-[104px] z-[2]">
          Project Name
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-3.5 px-0 pb-0">
        <div className="relative inline-block min-w-[89px] z-[1]">
          12/04/2200
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0 text-white">
        <div className="rounded bg-royalblue-100 flex flex-row items-start justify-start pt-[9px] px-[41px] pb-2 z-[1]">
          <div className="h-9 w-[120px] relative rounded bg-royalblue-100 hidden" />
          <button><div className="relative font-medium inline-block min-w-[38px] z-[2]">
            View
          </div>
          </button>
        </div>
      </div>
    </div>
  );
};

GroupComponent2.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
};

export default GroupComponent2;
