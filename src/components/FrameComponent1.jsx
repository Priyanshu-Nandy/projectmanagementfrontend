import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GroupComponent1 from "./GroupComponent1";
import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  const navigate = useNavigate();
  const [componentsData, setComponentsData] = useState([]);
  const [numberOfComponents, setNumberOfComponents] = useState(4); // Initial number of components

  const onViewButtonTypeClick = useCallback(() => {
    navigate("/admin-dashboard");
  }, [navigate]);

  const handleGroupComponentEvent = useCallback((event) => {
    console.log("Event from GroupComponent1:", event);
    
  }, []);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
      
        const data = await response.json();
        setComponentsData(data);
      } catch (error) {
      
      }
    };

    fetchData();
  }, []);

  const handleAddMoreClick = () => {
    setNumberOfComponents(prevCount => prevCount + 1);
  };

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-0 pb-[11px] pr-[26px] pl-[30px] box-border max-w-full text-left text-xl text-black font-inter ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[14px] max-w-full">
        <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[7px]">
          <div className="relative font-medium mq450:text-base">
            Student applications
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[11px] max-w-full text-base">
          {Array.from({ length: numberOfComponents }).map((_, index) => (
            <GroupComponent1 key={index} onEvent={handleGroupComponentEvent} />
          ))}
        </div>
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
          <div className="flex flex-col items-start justify-start pt-3.5 px-0 pb-0">
            <div className="relative font-medium inline-block min-w-[128px] mq450:text-base">
              Your Projects
            </div>
          </div>
          <div className="w-[120px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border text-white">
        <div className="self-stretch h-9 relative">
          
        </div>
      </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
