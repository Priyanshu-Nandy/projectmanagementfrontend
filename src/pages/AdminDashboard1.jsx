import { useCallback } from "react";
import GroupComponent4 from "../components/GroupComponent4";
import GroupComponent3 from "../components/GroupComponent3";
import GroupComponent2 from "../components/GroupComponent2";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import fetchStudentDetails from "../utils/fetchStudentDetails";
const AdminDashboard1 = () => {
  const navigate = useNavigate();
  const { studentId } = useParams();
  const [studentDetails, setStudentDetails] = useState([]);
  const token = localStorage.getItem("access_token"); // Replace with actual token
  // console.log(token)
  useEffect(() => {
    const getStudentDetails = async () => {
      try {
        const data = await fetchStudentDetails(studentId, token);
        console.log(data)
        setStudentDetails(data);
        console.log(studentDetails)
      } catch (error) {
        console.error('Error fetching student details:', error);
      }
    };

    getStudentDetails();
  },[]);

  
  if (!studentDetails) {
    return <div>Loading...</div>;
  }
  // const onGroupContainerClick = useCallback(() => {
  //   navigate("/");
  // }, [navigate]);

  return (
    <div className="w-full relative bg-whitesmoke overflow-hidden flex flex-col items-end justify-start pt-[26px] pb-[225px] pr-[68px] pl-14 box-border gap-[27px] leading-[normal] tracking-[normal] mq1275:pl-7 mq1275:pr-[34px] mq1275:box-border">
      <header className="self-stretch flex flex-row items-start justify-between gap-[20px] text-left text-11xl text-black font-inter">
        <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
          <a className="[text-decoration:none] relative font-medium text-[inherit] whitespace-nowrap">
            MANAGEMENT
          </a>
        </div>
        <div className="w-[187px] flex flex-row items-end justify-start gap-[38px] text-sm">
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[9px]">
            <div className="rounded-6xs flex flex-row items-start justify-start pt-1.5 pb-[7px] pr-6 pl-[25px] border-[1px] border-solid border-royalblue-200">
              <div className="h-[34px] w-[91px] relative rounded-6xs box-border hidden border-[1px] border-solid border-royalblue-200" />
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[42px] z-[1]">
                Admin
              </a>
            </div>
          </div>
          <div className="h-[58px] w-[58px] relative">
            <img
              className="absolute top-[5.9px] left-[5.9px] rounded-64xl w-[45.6px] h-[46.2px] object-cover"
              loading="lazy"
              alt=""
              src="/whatsapp-image-20240318-at-1224-1@2x.png"
            />
            <div className="absolute top-[0px] left-[0px] rounded-[50%] box-border w-full h-full z-[1] border-[0px] border-solid border-lightgray" />
          </div>
        </div>
      </header>
      <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] [backdrop-filter:blur(23.1px)] bg-darkslategray-200 z-[5]" />
      <main className="self-stretch flex flex-row items-start justify-end py-0 pr-[26px] pl-[30px] box-border max-w-full">
        <section className="h-[1200px] flex-1 relative max-w-full text-left text-xl text-black font-inter mq1200:h-auto mq1200:min-h-[320px]">
          <a className="[text-decoration:none] absolute top-[25px] left-[0px] font-medium text-[inherit] mq450:text-base">
            Student applications
          </a>
          <div className="absolute top-[462px] left-[0px] font-medium inline-block min-w-[128px] mq450:text-base">
            Your Projects
          </div>
          <div className="absolute top-[448px] left-[1612px] w-32 flex flex-row items-start justify-start text-21xl text-white">
            <div className="w-32 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
              <div className="self-stretch h-11 relative rounded-3xs bg-royalblue-100" />
            </div>
            <h1 className="m-0 w-[27px] relative text-inherit font-normal font-inherit inline-block z-[1] ml-[-78px] mq900:text-13xl mq450:text-5xl">
              +
            </h1>
          </div>
          <GroupComponent4 />
          <GroupComponent3 />
          <GroupComponent4 rectangleDivTop="1299px" />
          <GroupComponent2 />
          <GroupComponent2 propTop="145px" />
          <GroupComponent2 propTop="220px" />
          <GroupComponent2 propTop="295px" />
          <GroupComponent2 propTop="370px" />
          <div className="absolute top-[0px] left-[0px] rounded-21xl bg-white w-[1200px] flex flex-col items-start justify-start pt-[25px]  pr-7 pl-[72px] box-border gap-[67px] max-w-full z-[6] text-29xl">
            <div className="w-[1246px] h-[1429px] relative rounded-21xl bg-white hidden max-w-full" />
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[80px] max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border max-w-full mq900:min-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[79px] max-w-full">
                  <div className="relative font-medium inline-block max-w-full z-[1] mq900:text-19xl mq450:text-10xl">
                    <span className="text-13xl text-gray">Applied for</span>
                    <span>{` `}</span>
                    <span className="text-21xl text-darkslategray-100">-</span>
                    <span> Project Name</span>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[66px] max-w-full mq900:flex-wrap">
                    <img
                      className="h-[225px] w-[218px] relative rounded-[109px] object-cover z-[1] mq900:flex-1"
                      loading="lazy"
                      alt=""
                      src="/whatsapp-image-20240318-at-1224-1-6@2x.png"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start pt-[45px] px-0 pb-0 box-border min-w-[294px] max-w-full">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[10px] max-w-full">
                        <h1 className="m-0 relative text-inherit font-medium font-inherit z-[1] mq900:text-19xl mq450:text-10xl">
                          Kunal Sen
                        </h1>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[19px] max-w-full text-xl">
                          <div className="relative inline-block max-w-full z-[1] mq450:text-base">
                            <span className="font-light">{`Enrollment number - `}</span>
                            <span className="font-medium">12020009023087</span>
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-start gap-[25px] mq900:flex-wrap">
                            <div className="relative z-[1] mq450:text-base">
                              <span className="font-light">{`Stream - `}</span>
                              <span className="font-medium">CSIT</span>
                            </div>
                            <div className="relative inline-block min-w-[95px] z-[1] mq450:text-base">
                              <span className="font-light">{`Year - `}</span>
                              <span className="font-medium">3rd</span>
                            </div>
                            <div className="relative inline-block min-w-[70px] z-[1] mq450:text-base">
                              <span className="font-light">{`Sec - `}</span>
                              <span className="font-medium">A</span>
                            </div>
                            <div className="relative inline-block min-w-[79px] z-[1] mq450:text-base">
                              <span className="font-light">{`Roll - `}</span>
                              <span className="font-medium">26</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[329.3px] flex flex-row items-start justify-between max-w-full gap-[20px] text-base text-white font-general-sans mq900:flex-wrap">
                <div className="w-[232px] flex flex-col items-start justify-start pt-[25px] px-0 pb-0 box-border">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[22px] mq450:flex-wrap">
                    <div className="rounded-md bg-limegreen flex flex-row items-start justify-start pt-[7px] px-5 pb-[9px] z-[7]">
                      <div className="h-[38px] w-[105px] relative rounded-md bg-limegreen hidden" />
                      <div className="relative font-medium inline-block min-w-[63px] z-[1] bg-transparent">
                        Approve
                      </div>
                    </div>
                    <div className="flex-1 rounded-md bg-crimson flex flex-row items-start justify-start pt-[7px] pb-[9px] pr-7 pl-[29px] box-border min-w-[68px] z-[7]">
                      <div className="h-[38px] w-[105px] relative rounded-md bg-crimson hidden" />
                      <div className="flex-1 relative font-medium z-[1] bg-transparent">
                        Reject
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="h-[33.5px] w-[34.3px] relative cursor-pointer z-[7] text-5xl"
                  
                >
                  <div className="absolute top-[2px] left-[2px] rounded-[50%] bg-tomato w-[30px] h-[30px]" />
                  <h3 className="m-0 absolute top-[0.01px] left-[23.4px] text-inherit font-medium font-inherit [transform:_rotate(47deg)] [transform-origin:0_0] mq450:text-lgi bg-transparent" onClick={()=>navigate("/")}>
                    +
                  </h3>
                </div>
              </div>
            </div>
            <div className="w-[1121px] flex flex-row items-start justify-start py-0 px-2.5 box-border max-w-full text-5xl font-general-sans">
              <div className="flex-1 flex flex-col items-start justify-start gap-[33px] max-w-full">
                <div className="self-stretch rounded-2xs bg-whitesmoke flex flex-row items-start justify-start pt-[119px] px-[0px] pb-[110px] box-border max-w-full z-[1] text-17xl">
                  <div className="h-[278px] w-[1101px] relative rounded-2xs bg-whitesmoke hidden max-w-full" />
                  <h1 className="m-0 h-[49px] w-[351px] relative text-inherit font-medium font-inherit inline-block max-w-full z-[1] mq900:text-10xl mq450:text-3xl">
                    Student Introduction
                  </h1>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                  <h3 className="m-0 h-8 relative text-inherit font-medium font-inherit inline-block min-w-[59px] z-[1] mq450:text-lgi">
                    Skills
                  </h3>
                  <div className="self-stretch rounded-2xs bg-whitesmoke overflow-x-auto flex flex-row items-start justify-start py-[26px] px-[22px] gap-[9px] z-[1] text-3xs text-white font-inter">
                    <div className="h-[69px] w-[1101px] relative rounded-2xs bg-whitesmoke shrink-0 hidden" />
                    <div className="rounded bg-royalblue-100 flex flex-row items-start justify-start pt-0.5 px-2.5 pb-[3px] z-[1]">
                      <div className="h-[17px] w-[54px] relative rounded bg-royalblue-100 hidden" />
                      <div className="relative inline-block min-w-[34px] z-[1] bg-transparent">
                        Python
                      </div>
                    </div>
                    <div className="w-9 rounded bg-royalblue-100 shrink-0 flex flex-row items-start justify-start pt-[3px] px-2.5 pb-0.5 box-border z-[1]">
                      <div className="h-[17px] w-9 relative rounded bg-royalblue-100 hidden" />
                      <div className="relative inline-block min-w-[15px] z-[1] bg-transparent text-md">
                        ML
                      </div>
                    </div>
                    <div className="rounded bg-royalblue-100 flex flex-row items-start justify-start pt-[3px] px-[13px] pb-0.5 z-[1]">
                      <div className="h-[17px] w-9 relative rounded bg-royalblue-100 hidden" />
                      <div className="relative inline-block min-w-[10px] z-[1] bg-transparent text-md">
                        AI
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[423px] flex flex-col items-start justify-start gap-[28px] font-inter">
                  <h3 className="m-0 relative text-inherit font-medium font-inherit inline-block min-w-[92px] z-[1] mq450:text-lgi">
                    Resume
                  </h3>
                  <div className="self-stretch rounded-2xs bg-whitesmoke flex flex-row items-start justify-start pt-[119px] px-[0px] pb-[110px] box-border max-w-full z-[1] text-17xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
    </div>
  );
};

export default AdminDashboard1;
