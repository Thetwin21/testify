import HeadNav from "../components/general/headnav";
import Sidebar from "../components/general/sidebar";
interface dashboard {
  children?: any;

  current: number;
}
const DashboardLayout = ({ children, current }: dashboard) => {

  return (
    <div className="w-full flex flex-col">
   
      <div className="w-full min-h-screen h-100% bg-[#f6f6f6] lg:relative  flex justify-between">
        <div className="w-fit md:w-3/12 max-w-[250px]  2xl:max-w-[320px] ">
          <Sidebar current={current} />
        </div>

        <div className="md:w-9/12 flex flex-col flex-grow lg:relative h-full  ">
          <HeadNav />

          <div className="w-full h-[100%] min-h-[95vh] flow-hide px-12">

            {children}
            </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
