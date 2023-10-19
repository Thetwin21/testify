
import DashboardLayout from '../../layouts/DashboardLayout'
import EarningsList from '../../layouts/EarningsList'
import EarningsTableData from '../../layouts/EarningsTableData'
const Home = () => {
  return (
    <>
    <DashboardLayout current={1}>
      <div className="w-full   flex flex-col py-11 ">

        <h3 className="text-[rgba(15,161,244)] text-[20px] font-semibold">
          Welcome Andrew, let’s earn some rewards today!{" "}
        </h3>
        <EarningsList />
      </div>

      <div className="flex flex-col w-full lg:max-w-screen-lg overflow-x-hidden bg-white px-6 pt-4 mx-3 mt-4 md:mb-0">
        <h2
          className="
          text-[rgba(15,161,244,1)] 
font-bold text-lg px-6 md:px-0"
        >
          New Activity
        </h2>
        <EarningsTableData />
      </div>

    </DashboardLayout>
   
    </>
  )
}

export default Home
