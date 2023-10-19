import React, { useState } from "react";
import icon1 from "../assets/png/Income Icon.svg";
import icon2 from "../assets/png/Account Type.svg";
import icon3 from "../assets/png/Task Icon.svg";
import icon4 from "../assets/png/Invite Icon.svg";

const EarningsList = () => {
  const [totalIncome, setTotalIncome] = useState(300);
  const [accounType, setAccounType] = useState("Silver");
  const [totalTask, setTotalTask] = useState(240);
  const [userInvited, setUsersInvited] = useState(24);

  return (
    <div className="mt-5 w-full">
      <div className="flex flex-wrap gap-3 md:gap-6">
        <div className="flex gap-2 justify-center items-center bg-white px-2 py-2 md:py-0 h-[80px] w-[136px] md:w-[220px] md:h-[120px] rounded-lg shadow-md">
          <img
            className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]"
            src={icon1}
            alt={icon1}
          />
          <div className="text-black space-y-[-5px]">
            <p className="font-bold text-[16px] md:text-[30px]">
              {" "}
              &#x20A6;{`${totalIncome}K+`}
            </p>
            <p className="font-semibold text-[14px] md:text-[16px] space-y-[-5px]">
              Total Income
            </p>
          </div>
        </div>
        <div className="flex gap-2 justify-center items-center bg-white px-2 py-2 md:py-0 h-[80px] w-[136px] md:w-[220px] md:h-[120px] rounded-lg shadow-md">
          <img
            className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]"
            src={icon2}
            alt={icon2}
          />
          <div className="text-black space-y-[-5px]">
            <p className="font-bold text-[16px] md:text-[30px]">{accounType}</p>
            <p className="font-semibold text-[14px] md:text-[16px]">
              Account Type
            </p>
          </div>
        </div>
        <div className="flex gap-2 justify-center items-center bg-white px-2 py-2 md:py-0 h-[80px] w-[136px] md:w-[220px] md:h-[120px] rounded-lg shadow-md">
          <img
            className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]"
            src={icon3}
            alt={icon3}
          />
          <div className="text-black space-y-[-5px]">
            <p className="font-bold text-[16px] md:text-[30px]">{totalTask}</p>
            <p className="font-semibold text-[14px] md:text-[16px]">Task Completed</p>
          </div>
        </div>
        <div className="flex gap-2 justify-center items-center bg-white px-2 py-2 md:py-0 h-[80px] w-[136px] md:w-[220px] md:h-[120px] rounded-lg shadow-md">
          <img
            className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]"
            src={icon4}
            alt={icon4}
          />
          <div className="text-black space-y-[-5px]">
            <p className="font-bold text-[16px] md:text-[30px]">
              {userInvited}
            </p>
            <p className="font-semibold text-[14px] md:text-[16px]">Total Income</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarningsList;
