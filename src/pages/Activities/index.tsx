import DashboardLayout from "../../layouts/DashboardLayout";
import EarningsTableData from "../../layouts/EarningsTableData";

const Activities = () => {
  return (
    <>
      <DashboardLayout current={2}>
        <h2 className="text-[rgba(15,161,244)] text-[20px] font-semibold">
          Check out your activities
        </h2>
        <div className="w-full max-w-full lg:max-w-screen-lg  ">
          <div className="w-full flex justify-between bg-white px-0 md:px-6 items-center mx-0 md:mx-3 mt-4 overflow-x-hidden">
            <div className="px-6 p-3 font-semibold text-black">Tasks </div>
            <div className="px-6 p-3 text-[rgba(115,115,115,1)]">Completed</div>
            <div className="px-6 p-3 text-[rgba(115,115,115,1)]">Pending</div>
            <div className="px-6 p-3 text-[rgba(115,115,115,1)]">Paid Out</div>
            <div></div>
          </div>
          <div className="w-full px-0 lg:px-6 pt-4 mx-0 md:mx-3 mt-2 bg-white">
            <EarningsTableData />
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default Activities;
