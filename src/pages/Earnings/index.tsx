import EarningsList from "../../layouts/EarningsList";
import EarningsData from "../../layouts/EarningsData";
import DashboardLayout from "../../layouts/DashboardLayout";

const Earnings = () => {
  return (
    <div>
      <DashboardLayout current={3}>
        <div className="px-4 mt-4">
          <EarningsList />
        </div>
        <div className="w-full lg:max-w-screen-lg">
          <div className="flex justify-between w-full bg-white text-[rgba(115,115,115,1)] font-semibold px-6 py-4 mx-3 mt-4">
            <span>
              <h2 className="text-black">All Transactions</h2>
            </span>
            <span>
              <h2>Deposits</h2>
            </span>
            <span>
              <h2>Withdrawal</h2>
            </span>
          </div>
          <div className="flex flex-col w-full  bg-white px-6 pt-4 mx-3 mt-2">
            <EarningsData />
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default Earnings;
