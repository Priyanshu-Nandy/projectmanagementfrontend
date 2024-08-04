import PropTypes from "prop-types";
import React from "react";
import { useNavigate } from "react-router-dom";

const GroupComponent1 = ({ className = "", onEvent }) => {
  const navigate = useNavigate();

  const onViewButtonTypeClick = () => {
    if (onEvent) {
      onEvent("View button clicked in GroupComponent1");
    }
    navigate("/admin-dashboard");
  };

  return (
    <div className={`flex-1 flex flex-col items-start justify-start gap-[14px] max-w-full ${className}`}>
      <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[7px]"></div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[11px] max-w-full text-base">
        <div className="self-stretch rounded-6xs bg-white flex flex-row items-start justify-between py-[9px] pr-6 pl-[43px] box-border max-w-full gap-[20px] mq1275:pl-[21px] mq1275:box-border mq1600:flex-wrap">
          <div className="h-16 w-[1736px] relative rounded-6xs bg-white hidden max-w-full"></div>
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
            <div className="h-[46px] w-[772px] relative rounded bg-lavender hidden max-w-full"></div>
            <div className="relative font-semibold inline-block min-w-[104px] z-[2]">
              Project Name
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-3.5 px-0 pb-0">
            <div className="relative inline-block min-w-[89px] z-[1]">
              12/04/2200
            </div>
          </div>
          <div className="w-[120px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border text-white">
            <div className="self-stretch h-9 relative">
              <button
                className="bg-royalblue-100 hover:bg-sky-700 rounded w-full h-full cursor-pointer z-[1]"
                onClick={onViewButtonTypeClick}
              >
                <div className="absolute top-[9px] left-[41px] font-medium inline-block min-w-[38px] z-[2]">
                  View
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
  onEvent: PropTypes.func,
};

export default GroupComponent1;
